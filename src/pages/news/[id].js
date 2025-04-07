import Head from "next/head";
import NewsDetails from "src/components/news-details/news-details";
import { Layout } from "src/layouts/main/layout";

const NewsPage = () => {
  return (
    <>
      <NewsDetails />
    </>
  );
};

NewsPage.getLayout = (page) => <Layout>{page}</Layout>;

export default NewsPage;
