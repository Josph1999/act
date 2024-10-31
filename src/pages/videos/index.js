import AllVideos from "src/components/all-videos/all-videos";
import { Layout } from "src/layouts/main/layout";

const Page = () => {
  return <AllVideos />;
};

Page.getLayout = (page) => <Layout>{page}</Layout>;

export default Page;
