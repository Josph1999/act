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
  Unstable_Grid2 as Grid,
  Tabs,
  Tab,
  Skeleton,
} from "@mui/material";
import { TicketsSearch } from "src/sections/my-raffles/tickets-search";
import { useCallback, useEffect, useState } from "react";
import { MyTicketCard } from "src/sections/my-tickets/my-ticket-card";
import { ticketsApi } from "src/api/tickets";
import TicketsModal from "../tickets-modal/tickets-modal";
import BuyTicketModal from "../buy-ticket.js/buy-ticket";

const MyTickets = () => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState(null);
  const [count, setCount] = useState(0);
  const [status, setStatus] = useState("ongoing");
  const [ticketsModal, setTicketsModal] = useState(false);
  const [ticket, setTicket] = useState(null);
  const [buyTicket, setBuyTicket] = useState(null);

  const handleChange = (event, newValue) => {
    setStatus(newValue);
  };

  const onTicketModal = (ticket) => {
    setTicket(ticket);
  };

  const getTickets = useCallback(async () => {
    setLoading(true);
    const data = await ticketsApi.userTickets(
      page,
      rowsPerPage,
      "created_at",
      searchText,
      "desc",
      status
    );

    if (data?.data) {
      setTickets(data?.data);

      setCount(data?.count);
      setLoading(false);
    }
  }, [page, status, searchText]);

  useEffect(() => {
    getTickets();
  }, [page, status, searchText]);

  const handlePageChange = useCallback((event, value) => {
    setPage(value);
  }, []);

  let debounceTimer;
  const handleSearch = (value) => {
    setLoading(true);
    clearTimeout(debounceTimer);

    debounceTimer = setTimeout(() => {
      setSearchText(value);
    }, 2000);
  };

  const onBuyTicket = (ticket) => {
    setBuyTicket(ticket);
  };

  return (
    <>
      <Head>
        <title>My Raffles | Dbef</title>
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
            <Stack direction="row" justifyContent="space-between" spacing={4}>
              <Stack spacing={1}>
                <Typography variant="h4">ჩემი ბილეთები</Typography>
              </Stack>
              <div>
                <Button
                  startIcon={
                    <SvgIcon fontSize="small">
                      <PlusIcon />
                    </SvgIcon>
                  }
                  variant="contained"
                >
                  Add
                </Button>
              </div>
            </Stack>
            <TicketsSearch
              onChange={handleSearch}
              value={searchText}
              text="ბილეთის ძებნა მაგ: Apple Iphone "
            />
            <Box sx={{ display: "flex", flexDirection: "row", gap: "10px", flexWrap: "wrap" }}>
              <Box sx={{ width: "100%" }}>
                <Tabs value={status} onChange={handleChange}>
                  <Tab value="ongoing" label="მიმდინარე" />
                  <Tab value="lost" label="წაგებული" />
                  <Tab value="winner" label="მოგებული" />
                </Tabs>
              </Box>
              {tickets?.map((ticket) => {
                if (loading) {
                  return <Skeleton sx={{ width: "100%", height: "400px", marginTop: "-70px" }} />;
                } else {
                  return (
                    <MyTicketCard
                      ticket={ticket}
                      onTicketModal={() => onTicketModal(ticket)}
                      buyTicket={() => onBuyTicket(ticket)}
                    />
                  );
                }
              })}
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
                count={Math.ceil(count / rowsPerPage) || 1}
                rowsPerPage={rowsPerPage}
                size="small"
              />
            </Box>
          </Stack>
        </Container>
        <TicketsModal
          open={ticket}
          id={ticket?.raffle_id}
          status={status}
          onClose={() => setTicket(null)}
        />
        <BuyTicketModal raffle={buyTicket} open={buyTicket} onClose={() => setBuyTicket(null)} />
      </Box>
    </>
  );
};

export default MyTickets;
