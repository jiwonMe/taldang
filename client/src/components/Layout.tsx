import { AnimatePresence, motion } from "framer-motion";
import LimitedView from "./LimitedView";
import StatusBar from "./StatusBar";
import { useStore } from "@/store";
import getPartyColor from "@/utils/getPartyColor";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { selectedParty, setSelectedParty} = useStore();
  const router = useRouter();

  const navigateToMain = useCallback(() => {
    setSelectedParty("");
    router.push("/");
  }, [setSelectedParty, router])
  
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