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
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { db } from "src/firebase/firebase";
import styles from "./published-partners.module.css";
import { TicketsSearch } from "src/sections/my-raffles/tickets-search";
import { useLanguage } from "src/contexts/language-context";
import AdminPartnersCard from "../admin-partners-card/admin-partners-card";

const MyPublishedpartners = () => {
  const rowsPerPage = 6;
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const { renderLanguage } = useLanguage();

  const router = useRouter();

  const [partners, setpartners] = useState([]);

  const getpartners = useCallback(async () => {
    const partnersRef = collection(db, "partners");

    const documentSnapshots = await getDocs(
      query(partnersRef, orderBy("created_at", "desc"))
    );

    setLoading(true);

    const partnersData = documentSnapshots.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
      created_at: doc.data().created_at.toDate(),
    }));
    setpartners(partnersData);
    setLoading(false);
  }, []);

  useEffect(() => {
    getpartners();
  }, []);

  const handlePageChange = useCallback((event, value) => {
    setPage(value);
  }, []);

  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const paginatedpartners = partners.slice(startIndex, endIndex);

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
                    "განთავსებული პარტნიორები",
                    "Published Partners"
                  )}
                </Typography>
              </Stack>
              <div>
                <Button
                  startIcon={
                    <SvgIcon fontSize="small">
                      <PlusIcon />
                    </SvgIcon>
                  }
                  variant="contained"
                  onClick={() => router.push("/dashboard/add-partner")}
                >
                  {renderLanguage("პარტნიორის დამატება", "Add Partner")}
                </Button>
              </div>
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
                : paginatedpartners?.map((item) => (
                    <AdminPartnersCard partners={item} key={item.id} />
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
                count={Math.ceil(partners.length / rowsPerPage) || 1}
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

export default MyPublishedpartners;
