import { Avatar, Box, Divider, Rating, Typography } from "@mui/material";
import RaffleIcon from "../icons/RaffleIcon";
import TicketIcon from "../icons/TicketIcon";
import { useRouter } from "next/router";

export default function UserCard({ user }) {
  const router = useRouter();

  return (
    <Box
      sx={{
        display: "flex",
        gap: "15px",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
      onClick={() => router.push(`profiles/${user?.id}`)}
    >
      <Avatar src={user?.profile_picture[0]?.url} sx={{ width: 100, height: 100 }} />
      <Typography>{user?.first_name}</Typography>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "15px" }}>
        <Rating name="read-only" value={user !== null && user?.rating} readOnly />
        <Typography>{user?.rating}</Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "15px" }}>
        <RaffleIcon /> {user?.raffle?.length}
        <Divider orientation="vertical" flexItem />
        <TicketIcon /> {user?.ticket?.length}
      </Box>
    </Box>
  );
}
