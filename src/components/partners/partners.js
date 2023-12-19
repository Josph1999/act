import React, { useCallback, useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { useWindowWidth } from "../helpers/useWindowWidth";
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { db } from "src/firebase/firebase";
import "swiper/css/navigation";
import { Box, Typography } from "@mui/material";
import { Autoplay } from "swiper/modules";
import { useLanguage } from "src/contexts/language-context";

export default function Partners() {
  const windowSize = useWindowWidth();
  const [loading, setLoading] = useState(false);
  const [partners, setPartners] = useState([]);
  const [selected, setSelected] = useState(partners[0]);

  const { renderLanguage, renderFontFamily } = useLanguage();

  const getPartners = useCallback(async () => {
    const PartnersRef = collection(db, "partners");

    let documentSnapshots;

    documentSnapshots = await getDocs(
      query(PartnersRef, orderBy("created_at", "desc"), limit(20))
    );

    setLoading(true);

    const PartnersData = documentSnapshots.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
      created_at: doc.data().created_at.toDate(),
    }));
    setPartners(PartnersData);
    setLoading(false);
  }, []);

  useEffect(() => {
    getPartners();
  }, []);

  return (
    <Box sx={{ padding: "128px", "@media (max-width: 800px)": {
      padding: "24px",
    }, }}>
      <Box
        sx={{
          paddingBottom: "50px",
          "@media (max-width: 800px)": {
            padding: "30px",
          },
        }}
      >
        <Typography fontSize={32} sx={{ fontFeatureSettings: "'case' on" }}>
          {renderLanguage("პარტნიორები", "Partners")}
        </Typography>
        <Typography sx={{ fontFeatureSettings: "'case' on" }}>
          {renderLanguage(
            "პარტნიორი ორგანიზაციები, რომლებთანაც ფონდი თანამშრომლობს",
            "Partner organizations with which the Foundation cooperates"
          )}
        </Typography>
      </Box>
      <Swiper
        className="mySwiper"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        breakpoints={{
          360: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          920: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1224: {
            slidesPerView: 6,
            spaceBetween: 50,
          },
        }}
        pagination={{
          type: "fraction",
        }}
      >
        {partners.map((item) => (
          <SwiperSlide>
            <a target="_blank" href={item.url} rel="noopener noreferrer">
              <img src={item?.photos?.[0]?.url} width={30} height={30} />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
      <Box sx={{ marginTop: "16px" }}></Box>
      <Swiper
        className="mySwiper"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          reverseDirection: true,
        }}
        modules={[Autoplay]}
        breakpoints={{
          360: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          920: {
            slidesPerView: 3,
            spaceBetween: 40,
          },

          1224: {
            slidesPerView: 6,
            spaceBetween: 50,
          },
        }}
        pagination={{
          type: "fraction",
        }}
      >
        {partners.reverse().map((item) => (
          <SwiperSlide>
            <a target="_blank" href={item.url} rel="noopener noreferrer">
              <img src={item?.photos?.[0]?.url} width={30} height={30} />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
