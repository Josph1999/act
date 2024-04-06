import About from "src/components/about/about";
import { Layout } from "src/layouts/main/layout";

const Page = () => {
  return <About />;
};

Page.getLayout = (page) => <Layout>{page}</Layout>;

export default Page;
