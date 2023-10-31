import { Box } from "@mui/material";
import UserCard from "../user-card/user-card";

export default function Users({ users }) {
  return (
    <Box sx={{display: 'flex', justifyContent: 'center', gap: '50px', flexWrap: 'wrap', marginTop: '50px'}}>
      {users?.map((user) => {
        return <UserCard user={user} />;
      })}
    </Box>
  );
}
