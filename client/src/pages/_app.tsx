import "@/styles/globals.css";
import type { AppProps as _AppProps} from "next/app";
import { AnimatePresence } from "framer-motion";

// override getLayout to the app component (typescript)
interface CustomAppProps {
  Component: {
    getLayout?: (page: React.ReactNode) => React.ReactNode
  }
}

type AppProps = _AppProps & CustomAppProps

export default function App({ Component, pageProps, router }: AppProps) {
  const getLayout = Component.getLayout ?? ((page) => page)
 
  return getLayout(
    <AnimatePresence mode="wait" initial={true}>
      <Component {...pageProps} key={router.asPath} />
    </AnimatePresence>
  )
}
