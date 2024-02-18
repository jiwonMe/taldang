import { AnimatePresence, motion } from "framer-motion";
import LimitedView from "./LimitedView";
import StatusBar from "./StatusBar";
import { useStore } from "@/store";
import getPartyColor from "@/utils/getPartyColor";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/navigation";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { selectedParty, setSelectedParty} = useStore();
  const router = useRouter();
  
  return (
    <>
      <Head>
        <meta name="theme-color" content={selectedParty ? getPartyColor(selectedParty) : "#c1c1c1"} />
      </Head>
      <LimitedView>
        <StatusBar
          backgroundColor={getPartyColor(selectedParty)}
        >
          {selectedParty ? (
            <>
              <span>
                <b>{selectedParty}</b>을(를) 떠나는 중
              </span>

              <a
                onClick={() => {
                  // 중단하시겠습니까?
                  if(window.confirm("탈당을 중단하고 메인 화면으로 돌아갑니다")) {
                    setSelectedParty("");
                    router.push("/");
                  }
                }}
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