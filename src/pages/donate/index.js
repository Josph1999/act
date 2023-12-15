import AllNews from "src/components/all-news/all-news";
import Donate from "src/components/donate/donate";
import { Layout } from "src/layouts/main/layout";

const Page = () => {
  return <Donate />;
};

Page.getLayout = (page) => <Layout>{page}</Layout>;

export default Page;
