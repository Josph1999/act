import {
  Box,
  Button,
  Chip,
  Grid,
  Link,
  Pagination,
  Typography,
} from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { useLanguage } from "src/contexts/language-context";
import Subscribe from "../subscribe/subscribe";
import { useWindowWidth } from "../helpers/useWindowWidth";
import { youtubeVideoData } from "../youtube-videos/data";
import { useRouter } from "next/router";

export default function AllVideos() {
  const router = useRouter();

  const rowsPerPage = 10;
  const [page, setPage] = useState(1);
  const { renderLanguage, renderFontFamily } = useLanguage();

  const [selectedSection, setSelectedSection] = useState(null);

  const windowWidth = useWindowWidth();

  const handlePageChange = useCallback((event, value) => {
    setPage(value);
  }, []);

  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const paginatedVideos = youtubeVideoData.sort((a, b) => b.id - a.id)
    .filter((data) => {
      if (selectedSection) {
        return data.section_id === selectedSection;
      }
      return data;
    })
    .slice(startIndex, endIndex);

  useEffect(() => {
    if (router.query.data) {
      setSelectedSection(router.query.data);
    }
  }, [router]);

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
        {selectedSection ? (
          <Chip
            label={renderLanguage(
              youtubeVideoData.sort((a, b) => b.id - a.id).find(
                (item) => item.section_id === selectedSection
              ).section_ka,
              youtubeVideoData.sort((a, b) => b.id - a.id).find(
                (item) => item.section_id === selectedSection
              ).section_eng
            )}
            onDelete={() => setSelectedSection(null)}
          />
        ) : null}
      </Box>

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
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            gap: "26px",
          }}
        >
          {paginatedVideos
            .filter((data) => {
              if (selectedSection) {
                return data.section_id === selectedSection;
              }
              return data;
            })
            .map((item, idx) => (
              <Box
                sx={{
                  display: "flex",
                  gap: "12px",
                  "@media (max-width: 1100px)": {
                    flexDirection: "column",
                  },
                }}
              >
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
                <Box
                  sx={{
                    width: "1600px",
                    "@media (max-width: 1100px)": {
                      width: "100%",
                    },
                    border: "1px solid black",
                    padding: "40px",
                    borderRadius: "10px",
                    cursor: "pointer",
                  }}
                >
                  <Link
                    sx={{
                      fontSize: "24px",
                    }}
                    href={`/videos?data=${item.section_id}`}
                  >
                    {renderLanguage(item.section_ka, item.section_eng)}
                  </Link>
                  <Typography
                    sx={{
                      fontSize: "22px",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "18px",
                    }}
                  >
                    {renderLanguage(item.description_ka, item.description_eng)}
                  </Typography>
                </Box>
              </Box>
            ))}
        </Box>
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
      <Subscribe />
    </Box>
  );
}
