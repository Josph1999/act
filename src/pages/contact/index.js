import About from "src/components/about/about";
import Contact from "src/components/contact/contact";
import { Layout } from "src/layouts/main/layout";

const Page = () => {
  return <Contact />;
};

Page.getLayout = (page) => <Layout>{page}</Layout>;

export default Page;
