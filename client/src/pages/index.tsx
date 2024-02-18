import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import View from "@/components/View";
import styled from "styled-components";
import Logo from "@/assets/taldang-logo.svg";
import TaldangDocument from "@/assets/document.png";
import VSpace from "@/components/VSpace";
import Button from "@/components/Button";
import Layout from "@/components/Layout";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Taldang</title>
        <meta name="description" content="지금 떠나자, 탈당" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="foreground" />
        <LimitedView>
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
            <TopGradient />
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
        </LimitedView>
      </main>
    </Layout>
  );
}

const CTAButton = styled(Button)`
  position: absolute;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);

  max-width: 300px;
`;

// View 컴포넌트를 확장하여 최대 너비를 설정합니다.
const LimitedView = styled(View)`
  position: relative;

  margin: 0 auto; // 중앙 정렬

  overflow: hidden;

  align-items: center;

  background-color: #E9E9E9;

  @media screen and (max-width: 768px) {
    padding: 0 16px;
  }

  @media screen and (min-width: 768px) {
    max-width: 400px;
  }
`;

const TopGradient = styled.div`
  position: absolute;
  top: -20px;
  left: -20px;
  right: -20px;
  height: 400px;

  z-index: 0;

  background: linear-gradient(180deg, #A2A2A299 0%, #A2A2A200 75%);
`;

const LogoWithSlogan = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const Background = styled.div`
  position: absolute;
  height: 100dvh;
  width: 100%;

  z-index: 0;

  overflow: hidden;
`;

const Content = styled.div`
  position: relative;

  width: 100%;
  z-index: 1;
  flex-grow: 1;
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