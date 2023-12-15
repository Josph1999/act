import AddProject from "src/components/add-project/add-project";
import AddPartners from "src/components/add-sponsor/add-sponsor";
import { Layout } from "src/layouts/dashboard/layout";

const Page = () => {
  return <AddPartners />;
};

Page.getLayout = (page) => <Layout>{page}</Layout>;

export default Page;
