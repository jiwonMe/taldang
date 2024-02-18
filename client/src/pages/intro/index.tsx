import Content from "@/components/Content";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <motion.div
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
          <h1>hello</h1>
        </Content>
      </motion.div>
  )
}

Intro.getLayout = function getLayout(page: React.ReactNode) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}