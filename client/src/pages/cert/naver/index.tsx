import Button from "@/components/Button";
import Content from "@/components/Content";
import Layout from "@/components/Layout";
import PageTitle from "@/components/PageTitle";
import { motion } from "framer-motion";
import styled from "styled-components";
import NaverCertImageSrc from "@/assets/navercert.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function NaverCert() {
  const [certStatus, setCertStatus] = useState<"idle" | "pending" | "success" | "failure">("pending");

  useEffect(() => {
    if (certStatus === "pending") {
      setTimeout(() => {
        setCertStatus("success");
      }, 3000);
    }
  }, [certStatus])

  const router = useRouter();

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
          subtitle="네이버 인증서를 통해 본인인증을 진행합니다."
        />
        <CallOut>
          <p>스마트폰에 <b>네이버 앱</b>이 설치되어있어야 합니다.</p>
          <p>네이버 앱에서 알림이 오면 인증을 진행해주세요.</p>
        </CallOut>
        <NaverCertImage 
          src={NaverCertImageSrc}
          alt="네이버 인증"
        />
        <CTAButton
          onClick={() => {
            if (certStatus === "success") {
              alert("인증이 완료되었습니다.");
              router.push("/address");
            } else {
              setCertStatus("pending");
              setTimeout(() => {
                setCertStatus("success");
              }, 3000);
            }
          }}
          disabled={certStatus === "pending"}
        >
          {certStatus === "pending" ? "인증 중..." : certStatus === "success" ? "인증 완료" : "다시 인증 요청하기"}
        </CTAButton>
      </Content>
    </Animation>
  )
}

NaverCert.getLayout = function getLayout(page: React.ReactNode) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

const NaverCertImage = styled(Image)`
  margin-top: 16px;
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const CTAButton = styled(Button)`
  position: absolute;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);

  max-width: 100%;
`;

const CallOut = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;

  padding: 16px;

  background-color: #ffffff69;

  border: 1px solid #bababa;
  border-radius: 8px;
  line-height: 20px;

  font-size: 14px;
  color: #2a2a2a;
`;

const Animation = styled(motion.div)`
  height: 100%;
  width: 100%;
  overflow: hidden;

  padding: 60px 36px 0 36px;
`;