import {
    collection,
    doc,
    getDoc,
    getDocs,
    limit,
    orderBy,
    query,
  } from "firebase/firestore";
  import { useCallback, useEffect, useState } from "react";
  import { useLanguage } from "src/contexts/language-context";
  import { useRouter } from "next/router";
  import { db } from "src/firebase/firebase";
  import { Box, Typography } from "@mui/material";
  import { toast } from "react-toastify";
  import Image from "next/image";
  import parser from "html-react-parser";
import { Dates } from "../news/constants";
  
  export default function ProjectsDetails() {
    const [loading, setLoading] = useState(false);
    const [projects, setProjects] = useState([]);
    const { renderLanguage, renderFontFamily } = useLanguage();
  
    const router = useRouter();
  
    const { id } = router.query;
  
    const getDocumentById = useCallback(async () => {
      try {
        const docRef = doc(db, "projects", id);
        const docSnapshot = await getDoc(docRef);
  
        if (docSnapshot.exists) {
          const data = docSnapshot.data();
  
          data.id = docSnapshot.id;
          data.created_at = docSnapshot.data().created_at.toDate();
          setProjects(data);
        } else {
          toast.error(renderLanguage("პროექტი არ მოიძებნა!", "Projects not found!"));
        }
      } catch (error) {
        toast.error(
          renderLanguage(
            "შეცდომა დოკუმენტის ძებნის დროს",
            "Error while searching for document"
          )
        );
      }
    }, [id]);
  
    useEffect(() => {
      getDocumentById();
    }, [id]);
  
    const options = {
      day: "numeric",
      month: "long",
      hour: "numeric",
      minute: "numeric",
      year: "numeric",
      hour12: false,
    };
    const renderDate = (dateObj) => {
      const formattedDateTime =
        dateObj?.toLocaleDateString("en-US", options) || "";
  
      const [month, day, year, at, time] = formattedDateTime?.split(" ");
  
      const formatedDate = `${day} ${renderLanguage(
        Dates[month?.toLocaleLowerCase()],
        month
      )} ${year}`;
  
      return formatedDate;
    };
  
    return (
      <>
        <Box
          marginTop={7}
          sx={{
            padding: "128px",
            paddingBottom: "20px",
            "@media (max-width: 800px)": {
              padding: "20px",
              marginTop: 10,
            },
          }}
        >
          <Typography
            fontFamily={renderFontFamily()}
            fontSize={20}
            textAlign="center"
          >
            {renderLanguage(projects?.title_ka, projects?.title_eng)}
          </Typography>
          <Box sx={{ marginTop: 6 }}>
            {" "}
            <Image
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "600px", objectFit: "cover" }}
              src={projects?.photos?.[0]?.url}
              alt={projects?.photos?.[0]?.name}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
            }}
          >
            <Box
              sx={{ backgroundColor: "#4338CA", padding: "18px", width: "200px" }}
            >
              <Typography fontFamily={renderFontFamily()} textAlign="center">
                {renderDate(projects?.created_at)}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            padding: "128px",
            "@media (max-width: 800px)": {
              padding: "20px",
              marginTop: "20px",
            },
          }}
        >
          <Typography color="black !important">
            {parser(
              renderLanguage(
                projects?.description_ka || "",
                projects?.description_eng || ""
              )
            )}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
            flexWrap: "wrap",
            padding: "128px",
            "@media (max-width: 800px)": {
              padding: "20px",
              marginTop: "20px",
            },
          }}
        >
          {projects?.photos?.map((item) => (
            <Image width={384} height={224} src={item?.url} alt={item.name} />
          ))}
        </Box>
      </>
    );
  }
  