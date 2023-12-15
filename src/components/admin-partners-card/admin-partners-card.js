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
import styles from "./admin-partners-card.module.css";
import parse from "html-react-parser";
import EditIcon from "@mui/icons-material/Edit";
import { useRouter } from "next/router";
import { useLanguage } from "src/contexts/language-context";

export default function AdminPartnersCard({ partners }) {
  const router = useRouter();
  const { renderLanguage } = useLanguage();
  return (
    <Card className={styles.cardContainer}>
      <CardHeader
        title={partners.url}
        subheader={dayjs(new Date(partners.created_at).toISOString()).format(
          "DD/MM/YYYY hh:mm"
        )}
        className={styles.header}
        action={
          <IconButton
            aria-label="edit"
            onClick={() =>
              router.push(`/dashboard/add-project?edit=true&id=${partners.id}`)
            }
          >
            <EditIcon />
          </IconButton>
        }
      />
      <CardMedia
        component="img"
        height="194"
        image={partners?.photos?.[0]?.url || ""}
        alt="DBEF Partners"
      />
    </Card>
  );
}
