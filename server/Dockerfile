# Python 이미지를 기반으로 새 Docker 이미지를 생성합니다.
FROM python:3.8

# 작업 디렉토리를 설정합니다.
WORKDIR /app

# 필요한 패키지를 설치합니다.
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# PIL과 관련된 OS 종속성을 설치합니다.
RUN apt-get update && apt-get install -y \
    libjpeg-dev \
    zlib1g-dev \
    libpng-dev

#uvicorn을 설치합니다.
RUN pip install uvicorn

# 애플리케이션 코드를 Docker 컨테이너에 복사합니다.
COPY . .

# 애플리케이션을 실행할 명령을 지정합니다.
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "80"]
