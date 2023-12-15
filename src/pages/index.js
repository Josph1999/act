import React from "react";
import Head from "next/head";
import { useState } from "react";
import MainSlider from "src/components/main-slider/main-slider";
import { Layout } from "src/layouts/main/layout";
import News from "src/components/news/news";
import MainAboutInfo from "src/components/main-about-info/main-about-info";
import Projects from "src/components/projects/projects";
import Partners from "src/components/partners/partners";

const Page = () => {
  const [raffle, setRaffle] = useState(null);
  const [open, setOpen] = useState(false);
  const [category, setCateogory] = useState("technic");

  return (
    <>
      <Head>
        <title>Main | DBEF</title>
      </Head>
      <main>
        <>
          <MainSlider />
          <News />
          <MainAboutInfo />
          <Projects />
          <Partners />
          <script
            src="https://donorbox.org/widget.js"
            paypalExpress="true"
          ></script>
        </>
      </main>
    </>
  );
};

Page.getLayout = (page) => <Layout>{page}</Layout>;

export default Page;
