import Head from "next/head";
import MyPublishedNews from "src/components/published-news/published-news";
import MyPublishedpartners from "src/components/published-partners/published-partners";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";

const Page = () => {
  return (
    <>
      <Head>
        <title>ACT | My Partners</title>
      </Head>
      <MyPublishedpartners />
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
