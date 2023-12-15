import AllProjects from "src/components/all-projects/all-projects";
import { Layout } from "src/layouts/main/layout";

const Page = () => {
  return <AllProjects />;
};

Page.getLayout = (page) => <Layout>{page}</Layout>;

export default Page;
