import Head from 'next/head';
import MyPublishedNews from 'src/components/published-news/published-news';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';

const Page = () => {

  return (
    <>
      <Head>
        <title>
          Raffles | My Raffles
        </title>
      </Head>
     <MyPublishedNews/>
    </>
  );
};

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
