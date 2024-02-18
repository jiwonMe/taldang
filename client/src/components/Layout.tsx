import { motion } from "framer-motion";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{
      type: "keyframes",
      duration: 0.5,
      ease: "easeInOut",
    }}
  >
    {children}
  </motion.div>
);
export default Layout;