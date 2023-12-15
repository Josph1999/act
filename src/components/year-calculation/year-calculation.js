import { Box, IconButton, Typography } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import { db } from "src/firebase/firebase";
import { useRouter } from "next/router";
import { collection, getDocs, query } from "firebase/firestore";
import { useCallback, useEffect, useState } from "react";
import useDownloader from "react-use-downloader";
import { useLanguage } from "src/contexts/language-context";

export default function AnnualReports() {
  const rowsPerPage = 6;
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const [reports, setreports] = useState([]);

  const { renderLanguage, language } = useLanguage();

  const getreports = useCallback(async () => {
    const reportsRef = collection(db, "reports");

    const documentSnapshots = await getDocs(query(reportsRef));

    setLoading(true);

    const reportsData = documentSnapshots.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setreports(reportsData);
    setLoading(false);
  }, []);

  useEffect(() => {
    getreports();
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "128px",
        alignItems: "center",
        "@media (max-width: 800px)": {
          padding: "20px",
        },
      }}
    >
      {reports.map((report) => (
        <Box
          sx={{
            width: "584px",
            display: "flex",
            justifyContent: "space-between",
            borderBottom: "1px solid #8A81F8",
            alignItems: "center",
            padding: "32px 0px",
            "@media (max-width: 800px)": {
              width: "100%",
            },
          }}
        >
          <a
             href={language === "KA" ? report?.url_ka : report?.url_eng}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <Typography>
              {renderLanguage(report?.name_ka, report?.name_eng)}
            </Typography>
          </a>
          <IconButton>
            {" "}
            <a
              href={language === "KA" ? report?.url_ka : report?.url_eng}
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <DownloadIcon />
            </a>
          </IconButton>
        </Box>
      ))}
    </Box>
  );
}
