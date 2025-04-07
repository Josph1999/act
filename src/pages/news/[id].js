import NewsDetails from "src/components/news-details/news-details";
import { Layout } from "src/layouts/main/layout";

const Page = () => {
  return <NewsDetails />;
};

Page.getLayout = (page) => <Layout>{page}</Layout>;

export default Page;
