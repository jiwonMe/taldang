# TALDANG

## 배포 프로세스
client는 vercel로 배포, server는 aws ec2로 배포합니다.


curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable"
sudo apt update
sudo apt install docker-ce
<!-- docker --version -->
sudo usermod -aG docker ${USER}
<!-- 재접속 -->
sudo systemctl start docker

docker build server -t server
docker run -d -p 80:80 server