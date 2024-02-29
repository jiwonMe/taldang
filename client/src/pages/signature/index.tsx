import Background from "@/components/Background";
import Button from "@/components/Button";
import Content from "@/components/Content";
import SignatureInput from "@/components/Input/SignatureInput";
import Layout from "@/components/Layout"
import PageTitle from "@/components/PageTitle";
import { motion } from "framer-motion";
import Link from "next/link";
import styled from "styled-components";

export default function Signature() {
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
          title="서명하기"
          subtitle="서명을 입력해주세요"
        />
        <SignatureInput />
        <Link href="/confirm">
          <CTAButton>서명 완료</CTAButton>
        </Link>
      </Content>
    </Animation>
  );
}

Signature.getLayout = (page: React.ReactNode) => {
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

  padding: 60px 36px 0 36px;
`;

const CTAButton = styled(Button)`
  position: absolute;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);

  max-width: 100%;
`;