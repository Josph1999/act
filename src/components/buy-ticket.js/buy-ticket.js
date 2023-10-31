import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { IconButton, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import { useMockedUser } from "src/hooks/use-mocked-user";
import { ticketsApi } from "src/api/tickets";
import { toast } from "react-toastify";
import { Unstable_NumberInput as NumberInput } from "@mui/base/Unstable_NumberInput";
import { styled } from "@mui/system";
import LogInComponent from "../log-in-component/log-in-component";
import QuantityInput from "../number-input/number-input";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  p: 4,
  display: "flex",
  flexDirection: "column",
  outline: "none",
  gap: "20px",
  "@media (max-width: 800px)": {
    width: "90%",
  },
};

export default function BuyTicketModal({ open, onClose, raffle }) {
  const StyledInputRoot = styled("div")(
    ({ theme }) => `
    font-family: IBM Plex Sans, sans-serif;
    font-weight: 400;
    
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
  `
  );

  const StyledInput = styled("input")(
    ({ theme }) => `
    font-size: 0.875rem;
    font-family: inherit;
    font-weight: 400;
    line-height: 1.375;
    border-radius: 4px;
    margin: 0 4px;
    padding: 10px 12px;
    outline: 0;
    min-width: 0;
    width: 4rem;
    text-align: center;


  
    &:focus-visible {
      outline: 0;
    }
  `
  );

  const StyledButton = styled("button")(
    ({ theme }) => `
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    box-sizing: border-box;
    line-height: 1.5;
    border: 0;
    border-radius: 999px;
    background: transparent;
  
    width: 40px;
    height: 40px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
  
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 120ms;
  
    &:hover {
      cursor: pointer;
    }
  
    &:focus-visible {
      outline: 0;
    }
  
    &.increment {
      order: 1;
    }
  `
  );

  const [quantity, setQuantity] = React.useState(1);

  const user = useMockedUser();

  const handleChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 1) {
      setQuantity(value);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleBuyTickets = async () => {
    try {
      const tickets = await ticketsApi.buyTickets({
        raffle_id: raffle.id,
        quantity: quantity,
        method: "balance",
      });

      if (tickets.success) {
        toast.success("ბილეთები წარმატებით შეიძინეთ!");
        onClose();
      }
      if (!tickets.success) {
        toast.error("არასაკმარისი თანხა!");
      }
    } catch (error) {
      toast.error("შეცდომა ბილეთების ყიდვის დროს!");
    }
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {user ? (
            <>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography variant="h6" fontSize={18}>
                  ბილეთის ყიდვა
                </Typography>
                <IconButton onClick={onClose}>
                  <HighlightOffOutlinedIcon color="error" />
                </IconButton>
              </Box>
              <Box sx={{ borderTop: "1px solid #6366F1" }}></Box>
              <Typography id="modal-modal-description" sx={{ mt: 2 }} variant="p" fontSize={14}>
                თქვენ ყიდულობთ ბილეთს გათამაშებისთვის{" "}
                <span style={{ fontWeight: 700 }}>{raffle?.title}</span>
              </Typography>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "15px",
                }}
              >
                <QuantityInput onChange={(e, value) => setQuantity(value)} />
                <Button sx={{ backgroundColor: "#6366F1" }} variant="contained">
                  {quantity * raffle?.ticket_price} ₾
                </Button>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "20px",
                  flexWrap: "wrap",
                }}
              >
                <Button endIcon={<CreditCardIcon />} variant="contained" fullWidth disabled>
                  ბარათით ყიდვა
                </Button>
                <Button
                  fullWidth
                  onClick={handleBuyTickets}
                  variant="outlined"
                  sx={{ borderRadius: "4px" }}
                >
                  ბალანსით ყიდვა ₾
                </Button>
              </Box>
            </>
          ) : (
            <LogInComponent />
          )}
        </Box>
      </Modal>
    </div>
  );
}
