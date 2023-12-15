import { useRouter } from "next/router";
import Biography from "src/components/biography/biography";
import { Layout } from "src/layouts/main/layout";

const Page = () => {

  return <Biography />;
};

Page.getLayout = (page) => <Layout>{page}</Layout>;

export default Page;
