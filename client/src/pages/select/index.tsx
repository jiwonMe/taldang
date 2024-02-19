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
          subtitle="정당의 순서는 중앙선거관리위원회의 보고 순서를 따랐습니다."
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
          <SelectChip value="새로운미래">
            <Image
                src={Party005}
                alt="새로운미래"
                width={164}
                height={32}
              />
          </SelectChip>
          <SelectChip value="조국신당">
            <h2>조국신당</h2>
          </SelectChip>
        </SelectChipContainer>

        <Link
          href="/cert"
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

  padding: 110px 36px 0 36px;
`;

const CTAButton = styled(Button)`
  position: absolute;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);

  max-width: 100%;
`;