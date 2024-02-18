import Button from "@/components/Button";
import Content from "@/components/Content";
import Input from "@/components/Input";
import Layout from "@/components/Layout";
import PageTitle from "@/components/PageTitle";
import { motion } from "framer-motion";
import Link from "next/link";
import styled from "styled-components";

export default function Cert() {
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
          title="본인인증"
          subtitle="본인인증을 위해 휴대폰 번호와 성명, 생년월일을 입력해주세요"
        />
        <div>
          <Input
            label="휴대폰 번호"
            type="phone"
            placeholder="010-1234-5678"
            name="phone"
          />
          <Input
            label="성명"
            type="text"
            placeholder="홍길동"
            name="name"
          />
          <Input
            label="생년월일"
            type="date"
            name="birthday"
          />
        </div>
        <Link href="/cert/naver">
          <CTAButton>
            본인 인증 요청하기 (네이버 인증서)
          </CTAButton>
        </Link>
      </Content>
    </Animation>
  );
}

Cert.getLayout = function getLayout(page: React.ReactNode) {
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