from ftplib import FTP
from zeep import Client

from app.config import BAROBILL_CERTKEY, BAROBILL_CORPNUM, BAROBILL_ID, TEST_FROM_NUMBER, TEST_TO_NUMBER 

def upload_file_to_ftp(file: str, ftp: FTP, remote_path: str):
    with open(file, 'rb') as f:
        ftp.storbinary(f'STOR {remote_path}', f)

def sendFax(fileName: str):
  client = Client("https://testws.baroservice.com/FAX.asmx?WSDL")  # 테스트서버

  result = client.service.SendFaxFromFTP(
    CERTKEY=BAROBILL_CERTKEY,
    CorpNum=BAROBILL_CORPNUM,
    SenderID=BAROBILL_ID,
    FileName=fileName,
    FromNumber=TEST_FROM_NUMBER,
    ToNumber=TEST_TO_NUMBER,
  )

  return result