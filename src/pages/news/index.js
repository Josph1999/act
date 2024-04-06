import AllNews from "src/components/all-news/all-news";
import { Layout } from "src/layouts/main/layout";

const Page = () => {
  return <AllNews />;
};

Page.getLayout = (page) => <Layout>{page}</Layout>;

export default Page;
