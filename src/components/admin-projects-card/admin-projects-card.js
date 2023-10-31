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
import styles from "./adminProjectsCard.module.css";
import parse from "html-react-parser";
import EditIcon from "@mui/icons-material/Edit";
import { useRouter } from "next/router";
import { useLanguage } from "src/contexts/language-context";

export default function AdminProjectsCard({ projects }) {
  const router = useRouter();
  const { renderLanguage } = useLanguage();
  return (
    <Card className={styles.cardContainer}>
      <CardHeader
        title={renderLanguage(projects.title_ka, projects.title_eng)}
        subheader={dayjs(new Date(projects.created_at).toISOString()).format("DD/MM/YYYY hh:mm")}
        className={styles.header}
        action={
          <IconButton
            aria-label="edit"
            onClick={() => router.push(`/dashboard/add-project?edit=true&id=${projects.id}`)}
          >
            <EditIcon />
          </IconButton>
        }
      />
      <CardMedia
        component="img"
        height="194"
        image={projects?.photos?.[0]?.url || ""}
        alt="Dbef projects"
      />
      <CardContent sx={{ height: "155px", maxHeight: "155px", overflow: "hidden" }}>
        <Typography variant="body2" color="text.secondary">
          {parse(renderLanguage(projects.description_ka, projects.description_eng))}
        </Typography>
      </CardContent>
    </Card>
  );
}
