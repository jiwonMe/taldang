import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import Logo from "@/assets/taldang-logo.svg";
import TaldangDocument from "@/assets/document.png";
import Button from "@/components/Button";
import Layout from "@/components/Layout";
import Link from "next/link";
import { motion } from "framer-motion";
import Background from "@/components/Background";
import Content from "@/components/Content";

export default function Home() {
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
      <Head>
        <title>Taldang</title>
        <meta name="description" content="탈당: 우리는 동의하지 않습니다" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="탈당" />
        <meta property="og:description" content="탈당: 우리는 동의하지 않습니다" />
        <meta property="og:image" content="/thumbnail.png" />
        <meta property="og:url" content="https://taldang.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="탈당" />
        <meta name="twitter:description" content="탈당: 우리는 동의하지 않습니다" />
        <meta name="twitter:image" content="/thumbnail.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Background>
        <motion.div
          // floating animation
          initial={{ y: 0 }}
          animate={{ y: 20 }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 2,
            ease: "easeInOut",
          }}
        >
          <ImageAnimation
            src={TaldangDocument}
            alt="탈당"
            width={255}
            height={360}
          />
          <ImageAnimation
            src={TaldangDocument}
            alt="탈당"
            width={255}
            height={360}
          />
          <ImageAnimation
            src={TaldangDocument}
            alt="탈당"
            width={255}
            height={360}
          />
          <ImageAnimation
            src={TaldangDocument}
            alt="탈당"
            width={255}
            height={360}
          />
        </motion.div>
      </Background>
      <Content>
        <LogoWithSlogan>
          <Image
            src={Logo}
            alt="탈당"
            width={230}
            height={32}
          />
          <p>우리는 동의하지 않습니다</p>
        </LogoWithSlogan>
        <Link
          href={"/intro"}
        >
          <CTAButton>탈당하기</CTAButton>
        </Link>
        <NoticeDescription>
          본 서비스는 특정 정당으로부터 독립적인 프로젝트입니다.
        </NoticeDescription>
      </Content>
    </Animation>
  );
}

Home.getLayout = function getLayout(page: React.ReactNode) {
  return (
    <Layout>
      {page}
    </Layout>
  );
}
const NoticeDescription = styled.p`
  position: absolute;
  bottom: 40px;
  left: 36px;

  text-align: left;

  font-size: 12px;
  color: #acacac;

  font-weight: 500;
`;

const Animation = styled(motion.div)`
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

const CTAButton = styled(Button)`
  position: absolute;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);

  max-width: calc(100% - 72px);
`;

const LogoWithSlogan = styled.div`
  position: absolute;

  top: 30%;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const ImageAnimation = styled(Image)`
  position: absolute;

  /* first element */
  &:nth-child(1) {
    top: -20px;
    left: calc(50% - 200px);

    transform: rotate(45deg) translateX(-50%) translateY(-50%);
    filter: blur(8px);
    opacity: 0.5;
  }

  /* second element */
  &:nth-child(2) {
    top: 40px;
    right: calc(50% - 600px);

    transform: rotate(-45deg) translateX(-50%) translateY(-50%);
    filter: blur(5px);
    opacity: 0.7;
  }

  /* third element */
  &:nth-child(3) {

    left: calc(50% - 300px);

    transform: rotate(45deg) translateX(50%) translateY(50%);
    filter: blur(2px);
    opacity: 0.9;
  }

  /* fourth element */
  &:nth-child(4) {
    top: 400px;
    right: calc(50% - 80px);

    transform: rotate(-45deg) translateX(50%) translateY(50%);
    filter: blur(0.5px);
  }
`;