import Head from "next/head";
import NewsDetails from "src/components/news-details/news-details";
import { Layout } from "src/layouts/main/layout";
import { db } from "../../lib/firebase-admin";

export async function getServerSideProps(context) {
  const { id } = context.params;

  try {
    const docRef = db.collection("news").doc(id);
    const docSnap = await docRef.get();

    if (!docSnap.exists) {
      return { notFound: true };
    }

    const news = {
      id: docSnap.id,
      ...docSnap.data(),
    };

    delete news["created_at"];
    delete news["updated_at"];

    console.log("NEWS:", news);

    return {
      props: { news },
    };
  } catch (error) {
    console.error("Error fetching news:", error);
    return { notFound: true };
  }
}

const NewsPage = ({ news }) => {
  return (
    <>
      <Head>
        <title>{news.title_ka}</title>
        <meta name="description" content={news.description_ka} />
        <meta name="image" content={news?.photos?.[0]?.url} />
        <meta property="og:title" content={news.title_ka} />
        <meta property="og:description" content={news.description_ka} />
        <meta
          property="og:image"
          content={news?.photos?.[0]?.url || "/default-og.png"}
        />
      </Head>
      <NewsDetails news={news} />
    </>
  );
};

NewsPage.getLayout = (page) => <Layout>{page}</Layout>;

export default NewsPage;
