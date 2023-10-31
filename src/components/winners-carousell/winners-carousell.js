import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useRef, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import CarouselLeftIcon from "../icons/CarouselLeftIcon";
import CarouselRightIcon from "../icons/CarouselRightIcon";
import BuyTicketModal from "../buy-ticket.js/buy-ticket";
import { WinnerCard } from "../winner-card/winner-card";

const WinnersCarousell = ({ winners }) => {
  const swiperRef = useRef(null);

  const [open, setOpen] = useState(false);
  const [raffle, setRaffle] = useState(null);

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Swiper
        className="card-swiper"
        ref={swiperRef}
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
      >
        {winners?.length > 0 ? (
          winners?.map((winner) => (
            <SwiperSlide>
              <WinnerCard winner={winner} />
            </SwiperSlide>
          ))
        ) : (
          <Box
            sx={{
              width: "100%",
              height: "450px",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography>შედეგები არ მოიძებნა!</Typography>
          </Box>
        )}
      </Swiper>
      <Button
        sx={{
          position: "absolute",
          top: "50%",
          left: "0",
          transform: "translateY(-50%)",
          margin: 0,
          padding: 0,
          zIndex: 2,
          "@media (max-width: 800px)": {
            top: "108%",
          },
        }}
        onClick={handlePrev}
      >
        <CarouselLeftIcon />
      </Button>
      <Button
        sx={{
          position: "absolute",

          right: "0",
          transform: "translateY(-50%)",
          margin: 0,
          padding: 0,
          zIndex: 2,
          "@media (max-width: 800px)": {
            top: "108%",
          },
        }}
        onClick={handleNext}
      >
        <CarouselRightIcon />
      </Button>
      <BuyTicketModal onClose={() => setOpen(false)} open={open} raffle={raffle} />
    </Box>
  );
};

export default WinnersCarousell;
