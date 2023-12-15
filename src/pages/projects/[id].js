import NewsDetails from "src/components/news-details/news-details";
import ProjectsDetails from "src/components/project-details/project-details";
import { Layout } from "src/layouts/main/layout";

const Page = () => {
  return <ProjectsDetails />;
};

Page.getLayout = (page) => <Layout>{page}</Layout>;

export default Page;
