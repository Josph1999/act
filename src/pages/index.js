import React from "react";
import Head from "next/head";
import { useState } from "react";
import MainSlider from "src/components/main-slider/main-slider";
import { Layout } from "src/layouts/main/layout";
import News from "src/components/news/news";
import MainAboutInfo from "src/components/main-about-info/main-about-info";
import Projects from "src/components/projects/projects";
import Partners from "src/components/partners/partners";
import MissionAndVision from "src/components/mission-and-vision/mission-and-vision";
import Subscribe from "src/components/subscribe/subscribe";
import YoutubeVideos from "src/components/youtube-videos/youtube-videos";

const Page = () => {
  const [raffle, setRaffle] = useState(null);
  const [open, setOpen] = useState(false);
  const [category, setCateogory] = useState("technic");

  return (
    <>
      <Head>
        <title>Main | ACT</title>
        <meta
          property="og:image"
          content="https://firebasestorage.googleapis.com/v0/b/act-georgia.appspot.com/o/0a05f13f-1df9-432e-abac-87535eee4d5d.jpeg?alt=media&token=78728359-6361-48f1-a2e8-03b495f25925"
        />
      </Head>
      <main>
        <>
          <MainSlider />
          <MissionAndVision />
          <YoutubeVideos />
          <News />
          <MainAboutInfo />
          {/* <Projects /> */}
          <Partners />
          <Subscribe />
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
