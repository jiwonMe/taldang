import Button from "@/components/Button";
import Content from "@/components/Content";
import Layout from "@/components/Layout";
import PageTitle from "@/components/PageTitle";
import { motion } from "framer-motion";
import Link from "next/link";
import styled from "styled-components";

export default function Intro() {
  return (
    <Animation
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          type: "keyframes",
          duration: 0.2,
          ease: "easeInOut",
        }}  
      >
        <Content>
          <PageTitle
            title="이용약관 및 개인정보처리방침"
            subtitle="2024.02.18. 업데이트"
          />
          <TermsText>
            탈당 서비스를 이용하시려면 이용약관 및 개인정보처리방침에 동의해야 합니다.

            제 1조 (목적)

            본 약관은 탈당 서비스(이하 &quot;서비스&quot;)를 제공함에 있어, 탈당 서비스와 이용자의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.

            제 2조 (정의)

            본 약관에서 사용하는 용어의 정의는 다음과 같습니다.

            1. &quot;서비스&quot;라 함은 탈당이 제공하는 모든 서비스를 의미합니다.

            2. &quot;이용자&quot;라 함은 본 약관에 따라 탈당이 제공하는 서비스를 받는 자를 말합니다.

            3. &quot;탈당&quot;이라 함은 탈당 서비스를 의미합니다.

            제 3조 (약관의 명시, 효력 및 개정)

            1. 탈당은 본 약관의 내용을 이용자가 쉽게 알 수 있도록 서비스 화면에 게시합니다.

            2. 탈당은 본 약관을 개정할 경우, 적용일자 및 개정사유를 명시하여 적용일자 7일 전부터 적용일자 전일까지 공지합니다.

            3. 탈당은 본 약관을 개정할 경우, 적용일자 전일까지 이용자가 이의를 제기할 수 있는 방법을 명시합니다.

            4. 이용자는 변경된 약관에 동의하지 않을 경우, 서비스 이용을 중단하고 탈당에 회원탈퇴를 요청할 수 있습니다.

            제 4조 (약관 외 준칙)

            본 약관에 명시되지 않은 사항에 대해서는 관계법령 및 상관례에 따릅니다.

            제 5조 (이용계약의 성립)

            1. 이용계약은 이용자가 서비스 화면에서 &quot;동의합니다&quot; 버튼을 클릭하여 본 약관에 동의한 후, 탈당이 이러한 동의를 승낙함으로써 성립합니다.

            2. 이용자는 서비스 이용을 위해 반드시 본 약관에 동의하여야 합니다.

            제 6조 (서비스의 내용)

            1. 탈당은 다음과 같은 서비스를 제공합니다.

            1) 탈당 서비스

            2. 탈당은 서비스의 내용을 이용자가 쉽게 알 수 있도록 서비스 화면에 게시합니다.

            제 7조 (서비스 이용의 제한)

            1. 탈당은 이용자가 다음 각 호에 해당하는 경우에는 서비스 이용을 제한할 수 있습니다.

            1) 이용자가 본 약관에 위반하는 행위를 하는 경우

            2) 이용자가 서비스의 운영을 고의로 방해하는 경우

            3) 이용자가 타인의 서비스 이용을 방해하는 경우

            4) 이용자가 타인의 개인정보를 도용하는 경우

            5) 이용자가 타인의 서비스 이용을 방해하는 경우

          </TermsText>
          <Link href="/select">
            <CTAButton>동의합니다</CTAButton>
          </Link>
        </Content>
      </Animation>
  )
}

Intro.getLayout = function getLayout(page: React.ReactNode) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

const Animation = styled(motion.div)`
  height: 100%;
  width: 100%;
  overflow: hidden;

  padding: 110px 36px 0 36px;
`;

const CTAButton = styled(Button)`
  position: absolute;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);

  max-width: 100%;
`;

const TermsText = styled.p`
  font-size: 14px;
  line-height: 20px;
  color: #2a2a2a;
  text-align: justify;
  margin-top: 20px;
  margin-bottom: 20px;

  height: 300px;
  overflow-y: scroll;

  background-color: #fff;

  padding: 16px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
`;