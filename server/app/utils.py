from datetime import datetime
from ftplib import FTP
from zeep import Client

from app.constants.barobil_const import BAROBILL_CERTKEY, BAROBILL_CORPNUM, BAROBILL_ID 

def get_now_datetime():
    now = datetime.now()
    return {
        "year": now.year,
        "month": now.month,
        "day": now.day,
    }

def upload_file_to_ftp(file: str, ftp: FTP, remote_path: str):
    with open(file, 'rb') as f:
        ftp.storbinary(f'STOR {remote_path}', f)

def send_fax(
  file_name: str,
  from_number: str,
  to_number: str,
):
  client = Client("https://testws.baroservice.com/FAX.asmx?WSDL")  # 테스트서버

  result = client.service.SendFaxFromFTP(
    CERTKEY=BAROBILL_CERTKEY,
    CorpNum=BAROBILL_CORPNUM,
    SenderID=BAROBILL_ID,
    FileName=file_name,
    FromNumber=from_number,
    ToNumber=to_number,
  )

  return result