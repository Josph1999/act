import Head from "next/head";
import MyPublishedreports from "src/components/published-reports/published-reports";
import Subscribers from "src/components/subscribers/subscribers";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";

const Page = () => {
  return (
    <>
      <Head>
        <title>ACT | My Reports</title>
      </Head>
      <Subscribers />
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
