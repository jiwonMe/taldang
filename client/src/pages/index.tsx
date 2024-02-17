import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import View from "@/components/View";
import styled, { css } from "styled-components";
import Logo from "@/assets/taldang-logo.svg";
import TaldangDocument from "@/assets/document.png";
import VSpace from "@/components/VSpace";
import FakeLoadingBar from "@/components/FakeLoadingBar";
import Button from "@/components/Button";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Taldang</title>
        <meta name="description" content="지금 떠나자, 탈당" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${inter.className}`}>
        <div className="foreground" />
        <LimitedView>
          <Background>
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
            <CTAButton>탈당하기</CTAButton>
          </Content>
        </LimitedView>
      </main>
    </>
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
  max-width: 768px;
  margin: 0 auto; // 중앙 정렬

  overflow: hidden;

  align-items: center;

  background-color: #E9E9E9;
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
  height: 100vh;
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