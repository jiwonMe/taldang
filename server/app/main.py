from ftplib import FTP
from fastapi import FastAPI, Body
from typing import Optional
from pdf2image import convert_from_path
from PIL import Image, ImageDraw, ImageFont
from datetime import datetime
from app.config import BAROBILL_FTP_HOST, BAROBILL_FTP_PASSWORD, BAROBILL_FTP_USER

from app.util.utils import sendFax, upload_file_to_ftp

app = FastAPI()

def get_now_datetime():
    now = datetime.now().strftime('%Y-%m-%d %H:%M:%S')

    return {
        "year": now[:4],
        "month": now[5:7],
        "day": now[8:10],
    }

@app.post("/annotate_pdf")
def annotate_pdf(
    name: str = Body(...),
    gender: str = Body(...),
    birth_date: str = Body(...),
    address: str = Body(...),
    phone: str = Body(...),
):
    # load pdf
    images = convert_from_path(
        pdf_path='assets/sample.pdf',
        dpi=150,
    )

    # upload image to ftp
    ftp = FTP()
    ftp.connect(host=BAROBILL_FTP_HOST, port=9031)
    ftp.set_pasv(True)
    ftp.login(user=BAROBILL_FTP_USER, passwd=BAROBILL_FTP_PASSWORD)

    for i in range(len(images)):
        # convert pdf to image
        image = images[i]

        # add text to image
        draw = ImageDraw.Draw(image)
        font = ImageFont.truetype('assets/Maruburi-Regular.ttf', 20)

        draw.text((277, 300), f'{name}', fill='black', font=font)
        draw.text((277, 378), f'{gender}', fill='black', font=font)
        draw.text((277, 456), f'{birth_date}', fill='black', font=font)
        draw.text((277, 690), f'{address}', fill='black', font=font)
        draw.text((919, 456), f'{phone}', fill='black', font=font)

        # date
        year, month, day = get_now_datetime().values()
        draw.text((437, 996), f'{year}', fill='black', font=font)
        draw.text((575, 996), f'{month}', fill='black', font=font)
        draw.text((651, 996), f'{day}', fill='black', font=font)

        # name
        draw.text((575, 1116), f'{name}', fill='black', font=font)

        # save image
        image_path = f'./dist/output_image{i}.png'
        image.save(image_path)

        upload_file_to_ftp(file=image_path, ftp=ftp, remote_path=f'output_image.png')

    sendKey = sendFax(fileName='output_image.png')

    # close ftp
    ftp.quit()

    return {
        "message": "PDF에 텍스트가 추가되었습니다.",
        "sendKey": sendKey,
    }