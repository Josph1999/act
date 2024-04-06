import AddNews from "src/components/add-news/add-news";
import { Layout } from "src/layouts/dashboard/layout";

const Page = () => {
  return <AddNews />;
};

Page.getLayout = (page) => <Layout>{page}</Layout>;

export default Page;
