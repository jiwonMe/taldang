import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import Logo from "@/assets/taldang-logo.svg";
import TaldangDocument from "@/assets/document.png";
import VSpace from "@/components/VSpace";
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
        duration: 0.5,
        ease: "easeInOut",
      }}  
    >
      <Head>
        <title>Taldang</title>
        <meta name="description" content="지금 떠나자, 탈당" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
        <VSpace height={250} />
        <LogoWithSlogan>
          <Image
            src={Logo}
            alt="탈당"
            width={230}
            height={32}
          />
          <p>지금 떠나자, 탈당</p>
        </LogoWithSlogan>
        <VSpace height={250} />
        {/* <FakeLoadingBar duration={3} /> */}
        <Link
          href={"/intro"}
        >
          <CTAButton>탈당하기</CTAButton>
        </Link>
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

  max-width: 300px;
`;

const LogoWithSlogan = styled.div`
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