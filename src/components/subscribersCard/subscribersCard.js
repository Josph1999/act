import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import dayjs from "dayjs";
import styles from "./subscribersCard.module.css";
import parse from "html-react-parser";
import DeleteIcon from '@mui/icons-material/Delete';
import { useRouter } from "next/router";
import { useLanguage } from "src/contexts/language-context";

export default function SubscribersCard({ subscriber, onDelete }) {
  const router = useRouter();

  return (
    <Card className={styles.cardContainer}>
      <CardHeader
        title={subscriber.email}
        className={styles.header}
        action={
          <IconButton
            aria-label="edit"
            onClick={() => onDelete(subscriber.id)}
          >
            <DeleteIcon />
          </IconButton>
        }
      />
      <CardContent sx={{ height: "155px", maxHeight: "155px", overflow: "hidden" }}>
        <Typography variant="body2" color="text.secondary">
          {subscriber.email}
        </Typography>
      </CardContent>
    </Card>
  );
}
