import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  FormControl,
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import { authApi } from "src/api/auth";
import { useMockedUser } from "src/hooks/use-mocked-user";
import { useRouter } from "next/router";
import { toast } from "react-toastify";


export default function CardForm() {

  const [amount, setAmount] = useState(1)

  const user = useMockedUser()

  const router = useRouter()

  const handleDeposit = async () => {
   try{

    const request = {amount: Number(amount)}
    
    const response = await authApi.deposit(request)

    if(response.success){
      user.balance = response?.data?.amount

      router.push('/dashboard')
    }
    

   }catch(error){
    toast.error("შეცდომა დეპოზიტის დროს!")
   }
  }

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "80px",
      }}
    >
      <Box sx={{ width: "450px" }}>
        <Typography variant="h2">თანხის ჩარიცხვა</Typography>
        <TextField
          InputProps={{
            startAdornment: <InputAdornment position="start">₾</InputAdornment>,
          }}
          type="number"
          variant="outlined"
          label="თანხა"
          margin="normal"
          onChange={(e) => setAmount(e.target.value)}
          fullWidth
        />
        <Button variant="contained" fullWidth onClick={handleDeposit}>დეპოზიტი</Button>
      </Box>
    </Box>
  );
}
