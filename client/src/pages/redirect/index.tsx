import Layout from "@/components/Layout";
import VSpace from "@/components/VSpace";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";

export default function Redirect() {
  const router = useRouter();
  const { url } = router.query;
  const previousUrl = useRef<string | undefined>();

  useEffect(() => {
    if (url && url !== previousUrl.current) {
      router.push(url as string);
      previousUrl.current = url as string;
    } else if (!url && previousUrl.current) {
      // If the user comes back from another page, go to "/select"
      router.push("/select");
    }
  }, [url, router]);

  return (
    <p style={{ padding: 10 }}>
      <VSpace height={40} />
      더불어민주당은 자체 탈당 페이지를 운영하고 있습니다. 잠시후 정당 페이지로 이동합니다.
    </p>
  )
}

Redirect.getLayout = function getLayout(page: React.ReactNode) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}