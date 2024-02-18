import Button from "@/components/Button";
import Content from "@/components/Content";
import Layout from "@/components/Layout";
import PageTitle from "@/components/PageTitle";
import { motion } from "framer-motion";
import Link from "next/link";
import styled from "styled-components";

export default function Select() {
  return (
    <Animation>
      <Content>
        <PageTitle
          title="떠나고 싶은 정당을 선택해주세요"
          subtitle="정당의 순서는 중앙선거관리위원회의 보고 순서를 따랐습니다."
        />

        <Link
          href="/select/confirm"
          passHref
        >
          <CTAButton>
            다음
          </CTAButton>
        </Link>
      </Content>
    </Animation>
  )
}

Select.getLayout = function getLayout(page: React.ReactNode) {
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