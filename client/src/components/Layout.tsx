import { AnimatePresence, motion } from "framer-motion";
import LimitedView from "./LimitedView";
import StatusBar from "./StatusBar";
import { useStore } from "@/store";
import getPartyColor from "@/utils/getPartyColor";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import styled from "styled-components";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { selectedParty, setSelectedParty, resetAll} = useStore();
  const router = useRouter();

  const navigateToMain = useCallback(() => {
    resetAll();
    router.push("/");
  }, [router, resetAll])
  
  return (
    <>
      <Head>
        <meta name="theme-color" content={selectedParty ? getPartyColor(selectedParty) : "#c1c1c1"} />
      </Head>
      <LimitedView>
        <TestMessage>
          <span>현재 이 웹사이트는 테스트용으로 제작되었습니다. 실제 탈당은 불가능합니다.</span>
        </TestMessage>
        <StatusBar
          backgroundColor={getPartyColor(selectedParty)}
        >
          {selectedParty ? (
            <>
              <span>
                <b>{selectedParty}</b>을(를) 떠나는 중
              </span>

              <a
                onClick={navigateToMain}
              >
                중단하기
              </a>
            </>
          ) : null}
        </StatusBar>
        <AnimatePresence mode="wait" initial={true}
        >
          {children}
        </AnimatePresence>
      </LimitedView>
    </>
  )
};
export default Layout;

const TestMessage = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px;
  background-color: #000;
  color: #fff;
  text-align: center;
  font-size: 12px;
  line-height: 1.5;
  a {
    color: #fff;
    text-decoration: underline;
    cursor: pointer;
  }
  z-index: 10000;
`;