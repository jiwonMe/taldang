import Button from '@/components/Button';
import Content from '@/components/Content';
import Layout from '@/components/Layout';
import PageTitle from '@/components/PageTitle';
import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import DocumentImageSrc from '@/assets/document.png';
import Link from 'next/link';

export default function Confirm() {
  return (
    <Animation>
      <Content>
        <PageTitle
          title="생성된 탈당 신고서를 확인하세요"
          subtitle="아래 신고서를 정당에 팩스로 제출합니다."
        />
        <DocumentImageBox>
          <DocumentImage
            src={DocumentImageSrc}
            alt="탈당 신고서"
            width={300}
            height={400}
          />
          <A>이미지로 다운로드</A>
        </DocumentImageBox>
        <ButtonContainer>
          <Link href="/finish">
            <Button>팩스로 제출</Button>
          </Link>
        </ButtonContainer>
      </Content>
    </Animation>
  )
}

Confirm.getLayout = (page: React.ReactNode) => {
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

const DocumentImageBox = styled.div`
  position: relative;
  max-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DocumentImage = styled(Image)`
  width: 90%;
  max-width: 100%;
  height: auto;
  max-height: 100%;
  object-fit: contain;

  box-shadow: 0px 0px 20px 0px #00000033;
`;

const A = styled.a`
  display: block;
  margin-top: 8px;
  text-align: center;
  font-size: 12px;
  color: #676767;
  cursor: pointer;
  text-decoration: underline;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-right: 10px;
  box-sizing: border-box;
`;