import React from "react";
import { Box, Typography } from "@mui/material";
import Head from "next/head";
import { useCallback, useEffect, useState } from "react";
import { rafflesApi } from "src/api/raffles";
import BuyTicketModal from "src/components/buy-ticket.js/buy-ticket";
import Categories from "src/components/categories/categories";
import HotRaffles from "src/components/hot-raffles/hot-raffles";
import MainSlider from "src/components/main-slider/main-slider";
import { Layout } from "src/layouts/main/layout";
import Winners from "src/components/winners/winners";
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
        <title>Main | ACT</title>
      </Head>
      <main
      >
        <>
          {/* <MainSlider />
          <News/>
          <MainAboutInfo/>
          <Projects/>
          <Partners/> */}
          <h1>საიტი მუშავდება!</h1>
        </>
      </main>
    </>
  );
};

Page.getLayout = (page) => <Layout>{page}</Layout>;

export default Page;
