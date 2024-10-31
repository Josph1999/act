import { Box, Grid, Pagination, Typography } from "@mui/material";
import { useCallback, useState } from "react";
import { useLanguage } from "src/contexts/language-context";
import Subscribe from "../subscribe/subscribe";
import { useWindowWidth } from "../helpers/useWindowWidth";
import { youtubeVideoData } from "../youtube-videos/data";

export default function AllVideos() {
  const rowsPerPage = 10;
  const [page, setPage] = useState(1);
  const { renderLanguage, renderFontFamily } = useLanguage();

  const windowWidth = useWindowWidth();

  const handlePageChange = useCallback((event, value) => {
    setPage(value);
  }, []);

  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const paginatedVideos = youtubeVideoData.slice(startIndex, endIndex);

  return (
    <Box marginTop={10}>
      <Box
        sx={{
          width: "100%",
          alignItems: "center",
          color: "black",
          padding: "32px 128px",
          "@media (max-width: 1000px)": {
            padding: "32px 64px",
            marginTop: "20px",
          },
          "@media (max-width: 760px)": {
            padding: "24px !important",
          },
        }}
      >
        <Typography
          sx={{ fontFeatureSettings: "'case' on" }}
          fontSize={34}
          color="#232C65"
        >
          {renderLanguage("ყველა ვიდეო", "Videos")}
        </Typography>
        <Typography
          sx={{ fontFeatureSettings: "'case' on" }}
          fontSize={16}
          color="#232C65"
        >
          {renderLanguage(
            "ბოლო ვიდეოები ACT ისგან",
            "The latest Videos about ACT Georgia"
          )}
        </Typography>
      </Box>
      <Subscribe />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "16px",
          padding: "0px 128px",
          marginTop: "40px",
          "@media (max-width: 1000px)": {
            padding: "0px 64px",
            marginTop: "20px",
          },
          "@media (max-width: 760px)": {
            padding: "24px !important",
          },
        }}
      >
        {windowWidth > 760 ? (
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {paginatedVideos.map((item, idx) => (
              <Grid item xs={6}>
                <iframe
                  width="100%"
                  height="315"
                  src={item.url}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              marginTop: "40px",
              justifyContent: "center",
              gap: "32px",
            }}
          >
            {paginatedVideos.map((item, idx) => (
      
              <iframe
                width="100%"
                height="315"
                src={item.url}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            ))}
          </Box>
        )}
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "60px",
          marginBottom: "60px",
        }}
      >
        <Pagination
          onChange={handlePageChange}
          page={page}
          count={Math.ceil(youtubeVideoData.length / rowsPerPage) || 1}
          rowsPerPage={rowsPerPage}
          size="small"
        />
      </Box>
    </Box>
  );
}
