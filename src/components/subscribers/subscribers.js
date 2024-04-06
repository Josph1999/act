import Head from "next/head";
import PlusIcon from "@heroicons/react/24/solid/PlusIcon";
import {
  Box,
  Button,
  Container,
  Pagination,
  Stack,
  SvgIcon,
  Typography,
  Skeleton,
} from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { collection, deleteDoc, doc, getDocs, orderBy, query, where } from "firebase/firestore";
import { db } from "src/firebase/firebase";
import styles from "./subscribers.module.css";
import { TicketsSearch } from "src/sections/my-raffles/tickets-search";
import { useLanguage } from "src/contexts/language-context";
import { toast } from "react-toastify";
import AdminReportsCard from "../admin-reports-card/admin-reports-card";
import SubscribersCard from "../subscribersCard/subscribersCard";

const Subscribers = () => {
  const rowsPerPage = 6;
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const { renderLanguage } = useLanguage();

  const router = useRouter();

  const [reports, setreports] = useState([]);

  const getreports = useCallback(async () => {
    const reportsRef = collection(db, "subscriptions");

    const documentSnapshots = await getDocs(
      query(reportsRef)
    );

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

  const handlePageChange = useCallback((event, value) => {
    setPage(value);
  }, []);

  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const paginatedreports = reports.slice(startIndex, endIndex);

  const deleteNews = async (id) => {
    try {
      const docRef = doc(db, "subscriptions", id);
      await deleteDoc(docRef);

      toast.success(
        renderLanguage(
          "მეილი წარმატებით წაიშალა!",
          "Mail has succesfully been deleted!"
        )
      );
      const updatedReports = reports.filter((report) => report.id !== id)

      setreports(updatedReports)
      router.push("/dashboard/subscribers");
    } catch (error) {
      toast.error(
        renderLanguage(
          "შეცდომა დოკუმენტის წაშლის დროს",
          "Error while deleting document!"
        )
      );
    }
  };

  return (
    <>
      <Head>
        <title>Published Partners | ACT</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="xl">
          <Stack spacing={3}>
            <Stack
              direction="column"
              justifyContent="space-between"
              gap="20px"
              spacing={4}
            >
              <Stack spacing={1}>
                <Typography variant="h4">
                  {renderLanguage(
                    "გამომწერები",
                    "Subscribers"
                  )}
                </Typography>
              </Stack>
            </Stack>
            <Box className={styles.cardsContainer}>
              {loading
                ? Array.from({ length: 6 }, (value, index) => (
                    <Skeleton
                      key={index}
                      className={styles.skeleton}
                      sx={{ height: "506px", marginBottom: "-200px" }}
                    />
                  ))
                : paginatedreports?.map((item) => (
                    <SubscribersCard subscriber={item} key={item.id} onDelete={deleteNews}/>
                  ))}
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Pagination
                onChange={handlePageChange}
                page={page}
                count={Math.ceil(reports.length / rowsPerPage) || 1}
                rowsPerPage={rowsPerPage}
                size="small"
              />
            </Box>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Subscribers;
