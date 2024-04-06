import AddProject from "src/components/add-project/add-project";
import { Layout } from "src/layouts/dashboard/layout";

const Page = () => {
  return <AddProject />;
};

Page.getLayout = (page) => <Layout>{page}</Layout>;

export default Page;
