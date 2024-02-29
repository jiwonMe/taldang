import Button from "@/components/Button";
import { SelectChip, SelectChipContainer } from "@/components/ChipSelect";
import Content from "@/components/Content";
import Layout from "@/components/Layout";
import PageTitle from "@/components/PageTitle";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";

import Party001 from "@/assets/party_001.png";
import Party002 from "@/assets/party_002.png";
import Party003 from "@/assets/party_003.png";
import Party004 from "@/assets/party_004.png";
import Party005 from "@/assets/party_005.png";

import Image from "next/image";
import { useStore } from "@/store";

export default function Select() {
  const {
    selectedParty,
    setSelectedParty,
  } = useStore();

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
          title="떠나고 싶은 정당을 선택해주세요"
          subtitle="정당의 순서는 제20대 국회 의석수를 기준으로 하였습니다."
        />

        <SelectChipContainer
          value={[selectedParty]}
          onChange={(value) => setSelectedParty(value[0])}
          multi={false}
        >
          <SelectChip value="더불어민주당">
            <Image
              src={Party001}
              alt="더불어민주당"
              width={95}
              height={48}
            />
          </SelectChip>
          <SelectChip value="국민의힘">
            <Image
              src={Party002}
              alt="국민의힘"
              width={135}
              height={32}
            />
          </SelectChip>
          <SelectChip value="녹색정의당">
            <Image
              src={Party003}
              alt="녹색정의당"
              width={175}
              height={28}
            />
          </SelectChip>
          <SelectChip value="개혁신당">
            <Image
              src={Party004}
              alt="개혁신당"
              width={122}
              height={48}
            />
          </SelectChip>
          {/* <SelectChip value="새로운미래">
            <Image
                src={Party005}
                alt="새로운미래"
                width={164}
                height={32}
              />
          </SelectChip> */}
        </SelectChipContainer>
        <Description>
        원내정당 중 새로운미래, 진보당, 새진보연합은 주민등록번호를 요구하거나, 탈당신고서를 제공하지 않아 본 서비스에서 제외되었습니다.
        </Description>
        <Link
          href={
            selectedParty === "더불어민주당" ? 
            "/redirect?url=https://membership.theminjoo.kr/exit/agreeToTerms" :
            "/cert"
          }
        >
          <CTAButton
            disabled={!selectedParty}
          >
            {selectedParty ? "선택 완료" : "정당을 선택해주세요"}
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

  padding: 60px 36px 0 36px;
`;

const CTAButton = styled(Button)`
  position: absolute;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);

  max-width: 100%;
`;

const Description = styled.p`
  margin-top: 8px;
  font-size: 10px;
  color: #616161;
  line-height: 13px;

  text-align: left;

  word-break: keep-all;
`;