import { Box } from "@mui/material";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function RafflePhotos({ photos }) {
  const [mainPhoto, setMainPhoto] = useState(null);

  useEffect(() => {
    if (photos && photos.length > 0) {
      setMainPhoto(photos[0]);
    }
  }, [photos]);

  const changeMainPhoto = (photo) => {
    setMainPhoto(photo);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "20px", width: '100%' }}>
      <Box
        sx={{
          border: "1px solid #E3E3E4",
          width: "100%",
          height: "230px",
          borderRadius: "12px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          src={mainPhoto?.url}
          alt={mainPhoto?.alt}
          width={300}
          height={200}
          loading="lazy"
          style={{ borderRadius: "12px", objectFit: 'contain' }}
        />
      </Box>
      <Box
        sx={{
          maxWidth: "480px",
          display: "flex",
          overflowX: "scroll",
          gap: "20px",
          padding: '10px',
          borderRadius: "12px",
          "&::-webkit-scrollbar": {
            width: "2px",
            backgroundColor: "#FDE8CD",
            borderRadius: "12px",
            height: "6px",
            transition: "0.3s",
            cursor: 'pointer',
            "&:hover": {
              height: "8px",
            },
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#F48C06",
            borderRadius: "12px",
          },
        }}
      >
        {photos.map((photo, index) => (
          <Box
            key={index}
            sx={{
              border: "1px solid #E3E3E4",
              borderRadius: "12px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
              cursor: "pointer",
            }}
          >
            <Image
              src={photo.url}
              alt="Dbef Image Photo"
              width={96}
              height={84}
              style={{ borderRadius: "12px", objectFit: 'contain' }}
              onClick={() => changeMainPhoto(photo)}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
