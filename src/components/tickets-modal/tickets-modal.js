import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import { useMockedUser } from "src/hooks/use-mocked-user";
import { ticketsApi } from "src/api/tickets";
import { toast } from "react-toastify";
import { useCallback } from "react";
import { useState } from "react";
import { useEffect } from "react";
import TicketIcon from "../icons/TicketIcon";
import dayjs from "dayjs";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  p: 4,
  display: "flex",
  flexDirection: "column",
  gap: "20px",
//   height: "500px",
  maxHeight: "600px",
  overflowY: "auto",
  width: "80%",
  maxWidth: "80%",
  overflowX: "auto",
  padding: '10px'
};

export default function TicketsModal({ open, onClose, id, status }) {
  const [tickets, setTickets] = useState([]);

  const getTickets = useCallback(async () => {
    try {
      const data = await ticketsApi.getTicketsByRaffle(id, status);

      if (data?.data) {
        setTickets(data?.data);
      }
    } catch (error) {
      return toast.error("შეცდომა ბილეთების ნახვის დროს!");
    }
  }, [id, open]);

  useEffect(() => {
    getTickets();
  }, [open, id]);

  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{width: '100%', display: 'flex', justifyContent: 'flex-end'}}>
            <IconButton onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </Box>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell>ბილეთის ნომერი</TableCell>
                  <TableCell align="right">შეძენილია</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tickets?.map((ticket) => (
                  <TableRow
                    key={ticket?.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{ display: "flex", alignItems: "center", gap: "20px" }}
                    >
                      <TicketIcon /> {ticket?.id}
                    </TableCell>
                    <TableCell align="right">
                      {dayjs(ticket?.created_at).format("DD/MM/YYYY hh:mm")}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Modal>
    </div>
  );
}
