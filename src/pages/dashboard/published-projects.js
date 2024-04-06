import Head from 'next/head';
import MyPublishedProjects from 'src/components/published-projects/published-projects';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';

const Page = () => {

  return (
    <>
      <Head>
        <title>
          Raffles | My Raffles
        </title>
      </Head>
     <MyPublishedProjects/>
    </>
  );
};

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
