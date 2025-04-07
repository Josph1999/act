import NewsDetails from "src/components/news-details/news-details";
import { Layout } from "src/layouts/main/layout";
import { doc, getDoc } from "firebase/firestore";
import { db } from "src/firebase/firebase";
import Head from "next/head";

const Page = ({ news,metadata }) => {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta
          property="og:image"
          content={metadata.image || "/default-og.png"}
        />
      </Head>
      <NewsDetails ssrNews={news} />
    </>
  );
};

Page.getLayout = (page) => <Layout>{page}</Layout>;

export async function getServerSideProps(context) {
  const { params } = context;
  const { id } = params;

  try {
    const docRef = doc(db, "news", id);
    const docSnapshot = await getDoc(docRef);

    if (docSnapshot.exists) {
      const data = docSnapshot.data();
      data.id = docSnapshot.id;
      data.created_at = docSnapshot.data().created_at.toDate().toISOString();

      // Extract metadata from data
      const metadata = {
        title: data.title_ka, // Update with correct field
        description: data.description_ka, // Update with correct field
        image: data.photos[0]?.url || "", // Update with correct field and handle empty case
      };

      return {
        props: {
          metadata,
          news: JSON.stringify(data),
        },
      };
    } else {
      return {
        notFound: true,
      };
    }
  } catch (error) {
    console.error("Error fetching document:", error);
    return {
      notFound: true,
    };
  }
}

export default Page;
