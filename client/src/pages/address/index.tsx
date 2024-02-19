import React, { useState } from 'react';
import Button from "@/components/Button";
import Content from "@/components/Content";
import Input from "@/components/Input";
import Layout from "@/components/Layout"
import PageTitle from "@/components/PageTitle";
import { motion } from "framer-motion";
import styled from "styled-components";
import DaumPostcode, { Address } from 'react-daum-postcode';
import { useStore } from '@/store';

export default function Address() {
  const {
    address,
    setAddress,
    detail,
    setDetail,
  } = useStore();

  const [isOpenPost, setIsOpenPost] = useState(false);

  const handleComplete = (address: Address ) => {
    let fullAddress = address.address;
    let extraAddress = ''; 

    if (address.addressType === 'R') {
      if (address.bname !== '') {
        extraAddress += address.bname;
      }
      if (address.buildingName !== '') {
        extraAddress += (extraAddress !== '' ? `, ${address.buildingName}` : address.buildingName);
      }
      fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
    }

    setAddress(fullAddress);

    console.log(address);

    setIsOpenPost(false);
  }


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
          title="주소 입력"
          subtitle="주소를 입력해주세요"
        />
        {isOpenPost && <AddressModal>
          <DaumPostcode onComplete={handleComplete} />
          </AddressModal>}
        <div
          onClick={() => setIsOpenPost(true)}
        >  
          <Input
            label="주소"
            placeholder="서울특별시 강남구 테헤란로"
            name="address"
            value={address}
            readOnly
          />
        </div>
        <Input
          label="상세주소"
          placeholder="아파트 123동 456호"
          name="detail"
          value={detail}
          onChange={(e) => setDetail(e.target.value)}
        />
        <CTAButton
          onClick={
            () => {
              alert("주소 입력이 완료되었습니다.");
              console.log(address, detail)
            }
          }
          disabled={
            !address || !detail
          }
        >
          주소 입력 완료
        </CTAButton>
      </Content>
    </Animation>
  )
}

Address.getLayout = function getLayout(page: React.ReactNode) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

const AddressModal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
`;

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