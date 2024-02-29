import Button from "@/components/Button";
import Content from "@/components/Content";
import Layout from "@/components/Layout";
import PageTitle from "@/components/PageTitle";
import { motion } from "framer-motion";
import Link from "next/link";
import styled from "styled-components";

export default function Confirm() {
  return (
    <Animation>
      <Content>
        <PageTitle
          title="제출이 완료되었습니다"
          subtitle="탈당의 효력은 제출과 동시에 발생합니다"
        />

        <InformationTitle>제출 내용</InformationTitle>
        <InformationBox>
          <InforamtionList>
            <InformationItem>
              <b>신고인</b> <span>홍길동</span>
            </InformationItem>
            <InformationItem>
              <b>제출일시</b> <span>2021년 10월 10일 10시 10분</span>
            </InformationItem>
            <InformationItem>
              <b>수신기관</b> <span>개혁신당 서울시당</span>
            </InformationItem>
            <InformationItem>
              <b>수신번호</b> <span>0504-234-2342</span>
            </InformationItem>
            <InformationItem>
              <b>발신번호</b> <span>0504-123-4432</span>
            </InformationItem>
          </InforamtionList>
        </InformationBox>
        <ButtonContainer>
          <Link href="/">
            <Button>종료하고 메인으로</Button>
          </Link>
        </ButtonContainer>
      </Content>
    </Animation>
  )
}

Confirm.getLayout = (page: React.ReactNode) => {
  return (
    <Layout finish>
      {page}
    </Layout>
  )
}

const Animation = styled(motion.div)`
  height: 100%;
  width: 100%;
  overflow: hidden;

  padding: 60px 36px 0 36px;
`;

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  flex-direction: column;

  gap: 8px;

  width: 100%;
  max-width: 100%;
`;

const InformationBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  margin-top: 8px;
  padding: 16px;
  border-radius: 8px;
  background-color: #F2F2F2;

  font-size: 14px;
`;

const InforamtionList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const InformationItem = styled.li`
  display: flex;
  gap: 8px;
`;

const InformationTitle = styled.b`
  font-weight: bold;
  font-size: 14px;
`;