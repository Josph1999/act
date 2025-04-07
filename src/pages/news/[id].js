import Head from "next/head";
import NewsDetails from "src/components/news-details/news-details";
import { Layout } from "src/layouts/main/layout";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "src/firebase/firebase";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const getServerSideProps = async (context) => {
  const { id } = context.params;

  const docRef = doc(db, "news", id);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    return { notFound: true };
  }

  const news = { id: docSnap.id, ...docSnap.data() };

  return {
    props: { news },
  };
};

const NewsPage = ({ news }) => {
  return (
    <>
      <Head>
        <title>{news?.title_en}</title>
        <meta name="description" content={news?.description_ka} />
        <meta property="og:title" content={news?.title_en} />
        <meta property="og:description" content={news?.description_ka} />
        <meta
          property="og:image"
          content={news?.photos?.[0]?.url || "/default-og.png"}
        />
      </Head>
      <NewsDetails />
    </>
  );
};

NewsPage.getLayout = (page) => <Layout>{page}</Layout>;

export default NewsPage;
