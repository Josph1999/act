import Head from "next/head";
import MyPublishedNews from "src/components/published-news/published-news";
import MyPublishedpartners from "src/components/published-partners/published-partners";
import MyPublishedreports from "src/components/published-reports/published-reports";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";

const Page = () => {
  return (
    <>
      <Head>
        <title>DBEF | My Reports</title>
      </Head>
      <MyPublishedreports />
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
