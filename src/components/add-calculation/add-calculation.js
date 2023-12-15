import Head from "next/head";
// import { useParams, useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useAuth } from "src/hooks/use-auth";
import DefaultSelect from "src/components/select";
import { QuillEditor } from "src/components/quill/quill-editor";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { v4 as uuid } from "uuid";
import { useCallback, useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { db, storage } from "src/firebase/firebase";
import styles from "./add-calculation.module.css";
import ImageReorderApp from "../image-order/image-order";
import { toast } from "react-toastify";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { useRouter } from "next/router";
import { useLanguage } from "src/contexts/language-context";
import LoaderModal from "../loader-modal/loader-modal";

export default function AddCalculation() {
  const small_id = uuid().slice(0, 8);
  const [imageList, setImageList] = useState([]);
  const [percentage, setPercentage] = useState(null);
  const [status, setStatus] = useState(null);
  const [reports, setNews] = useState(null);
  const [deleting, setDeleting] = useState(false);
  const [adding, setAdding] = useState(false);
  const router = useRouter();
  const { renderLanguage } = useLanguage();

  const { edit, id } = router.query;

  const formik = useFormik({
    initialValues: {
      name_eng: "",
      name_ka: "",
      url_ka: "",
      url_eng: "",
      photos: [],
      submit: null,
    },
    validationSchema: Yup.object({
      name_ka: Yup.string()
        .required(renderLanguage("სახელი ქართულად სავალდებულოა", "Name in Georgian is required")),
        name_eng: Yup.string()
        .required(renderLanguage("სახელი ინგლისურად სავალდებულოა", "Name in English is required")),
        url_ka: Yup.string()
        .required(renderLanguage("ლინკი ქართულად სავალდებულოა", "Link in Georgian is required")),
        url_eng: Yup.string()
        .required(renderLanguage("ლინკი ინგლისურად სავალდებულოა", "Link in English is required")),
      photos: Yup.array().required("Photos Are Required"),
    }),
    onSubmit: async (values, helpers) => {
      try {
        if (edit) {
          if (imageList.length < 1) {
            formik.setFieldError(
              "photos",
              renderLanguage("ფოტოები სავალდებულოა!", "Photos are required")
            );
            helpers.setStatus({ success: false });
            helpers.setSubmitting(false);
            return;
          }
          setAdding(true);
          const { photos } = values;

          for (let i = 0; i < photos.length; i++) {
            photos[i]["priority"] = i;
          }

          const todosRef = doc(db, "reports", id);

          await updateDoc(todosRef, photos[0]);
          setAdding(false);
          toast.success(
            renderLanguage(
              "სიახლე წარმატებით დარედაქტირდა!",
              "News has succesfully been edited"
            )
          );
          //   router.push("/dashboard/published-reports");
          return;
        }
        if (imageList.length < 1) {
          formik.setFieldError(
            "photos",
            renderLanguage("ფოტოები სავალდებულოა!", "Photos are required")
          );
          helpers.setStatus({ success: false });
          helpers.setSubmitting(false);
          return;
        }
        setAdding(true);

        const { photos } = values;
        for (let i = 0; i < photos.length; i++) {
          photos[i]["priority"] = i;
        }

        const todosRef = collection(db, "reports");

        photos[0].name_eng = values.name_eng
        photos[0].name_ka = values.name_ka
        photos[0].url_eng = values.url_eng
        photos[0].url_ka = values.url_ka
        const res = await setDoc(doc(todosRef, uuid()), photos[0]);
        setAdding(false);
        toast.success(
          renderLanguage(
            "სიახლე წარმატებით დაემატა!",
            "News has succesfully been added"
          )
        );
        router.push("/dashboard/published-reports");
      } catch (err) {

        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false);
      }
    },
  });

  let priority = 0;

  const getDocumentById = useCallback(async () => {
    try {
      const docRef = doc(db, "reports", id);
      const docSnapshot = await getDoc(docRef);

      if (docSnapshot.exists) {
        const data = docSnapshot.data();
        formik.setFieldValue("title_ka", data?.title_ka);
        formik.setFieldValue("title_eng", data?.title_eng);
        formik.setFieldValue("description_ka", data?.description_ka);
        formik.setFieldValue("description_eng", data?.description_eng);
        setImageList(data?.photos);
        setNews(data);
      } else {
        toast.error(renderLanguage("სიახლე არ მოიძებნა!", "News not found!"));
      }
    } catch (error) {
      toast.error(
        renderLanguage(
          "შეცდომა დოკუმენტის ძებნის დროს",
          "Error while searching for document"
        )
      );
    }
  }, [edit, id]);
  useEffect(() => {
    if (edit) {
      getDocumentById();
    }
  }, [edit, id]);

  const handleChange = async (event) => {
    try {
      for (let i = 0; i < event.target.files.length; i++) {
        const image = event.target.files[i];
        const promises = [];
        image["id"] = Math.random();
        const imageRef = ref(storage, `annualReports/${image.name + small_id}`);
        const uploadTask = uploadBytesResumable(imageRef, image);
        promises.push(imageRef);
        const id = priority++;
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setPercentage(progress);
            switch (snapshot.state) {
              case "paused":
                setStatus(renderLanguage("ატვირთვა დაპაუზდა", "Upload paused"));
                break;
              case "running":
                setStatus(renderLanguage("იტვირთება", "Upload in proccess"));
                break;
              default:
                break;
            }
          },
          (error) => {
            toast.error(
              renderLanguage(
                "მოხდა შეცდომ აფოტოების ატვირთვის დროს!",
                "Error while deleting photos!"
              )
            );
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
              setImageList((prev) => [
                ...prev,
                {
                  url: downloadUrl,
                  priority: id,
                  original_name: image.name,
                  name: `${image.name + small_id}`,
                },
              ]);
            });
          }
        );
      }
    } catch (error) {
      return toast.error("Error While uploading image");
    }
  };

  useEffect(() => {
    formik.values.photos = imageList;
  }, [imageList]);

  const handleRemoveImage = (photo) => {
    const photoRef = ref(storage, `images/${photo.name}`);

    deleteObject(photoRef)
      .then(() => {
        return renderLanguage(
          "ფოტო წარმატებით წაიშალა",
          "photo has been deleted"
        );
      })
      .catch((error) => {
        toast.error(
          renderLanguage(
            "შეცდომა ფოტოს წაშლის დროს!",
            "Error while deleting photo!"
          )
        );
      });
  };

  const deleteNews = async () => {
    try {
      setDeleting(true);
      for await (const image of reports.photos) {
        handleRemoveImage(image);
      }

      const docRef = doc(db, "reports", id);
      await deleteDoc(docRef);

      toast.success(
        renderLanguage(
          "სიახლე წარმატებით წაიშალა!",
          "News has succesfully been deleted!"
        )
      );
      setDeleting(false);
      router.push("/dashboard/published-reports");
    } catch (error) {
      toast.error(
        renderLanguage(
          "შეცდომა დოკუმენტის წაშლის დროს",
          "Error while deleting document!"
        )
      );
    }
  };

  return (
    <>
      <Head>
        <title>DBEF | Add News</title>
      </Head>
      <Box
        sx={{
          flex: "1 1 auto",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            px: 3,
            py: "100px",
            width: "100%",
          }}
        >
          <Typography
            variant="h4"
            sx={{ textAlign: "center", marginBottom: "40px" }}
          >
            {edit
              ? renderLanguage("წლიური ანგარიშის რედაქტირება", "Edit reports")
              : renderLanguage("წლიური ანგარიშის დამატება", "Add News")}
          </Typography>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "row-reverse",
              gap: "160px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Box>
              <Box
                className={styles.photoUpload}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
                sx={{
                  backgroundImage:
                    imageList.length > 0 && `url(${imageList[0]?.url})`,
                }}
              >
                <label className={styles.addPhotos} htmlFor="file-input">
                  <AddIcon sx={{ color: "#6366F1", fontSize: "12px" }} />
                  {renderLanguage(
                    "წლიური ანგარიშის დამატება დამატება",
                    "Add Photos"
                  )}
                </label>
                <input
                  id="file-input"
                  type="file"
                  onChange={handleChange}
                  style={{ display: "none" }}
                />
              </Box>
              <TextField
                error={!!(formik.touched.name_ka && formik.errors.name_ka)}
                fullWidth
                helperText={formik.touched.name_ka && formik.errors.name_ka}
                label={renderLanguage("სახელი ქართულად", "Name in Gergian")}
                onChange={formik.handleChange}
                value={formik.values.name_ka}
                name="name_ka"
              />
                   <TextField
                error={!!(formik.touched.name_eng && formik.errors.name_eng)}
                fullWidth
                helperText={formik.touched.name_eng && formik.errors.name_eng}
                label={renderLanguage("სახელი ინგლისურად", "Name in English")}
                onChange={formik.handleChange}
                value={formik.values.name_eng}
                name="name_eng"
              />
                    <TextField
                error={!!(formik.touched.url_ka && formik.errors.url_ka)}
                fullWidth
                helperText={formik.touched.url_ka && formik.errors.url_ka}
                label={renderLanguage("ლინკი ქართულად", "Link in Gergian")}
                onChange={formik.handleChange}
                value={formik.values.url_ka}
                name="url_ka"
              />
                   <TextField
                error={!!(formik.touched.url_eng && formik.errors.url_eng)}
                fullWidth
                helperText={formik.touched.url_eng && formik.errors.url_eng}
                label={renderLanguage("ლინკი ინგლისურად", "Link in English")}
                onChange={formik.handleChange}
                value={formik.values.url_eng}
                name="url_eng"
              />
              {
                imageList.map((report) =>   <Typography color="black">
                <a href={report?.url} target="_blank">
                  {report?.original_name}
                </a>
              </Typography>)
              }
            
              <Button onClick={() => formik.handleSubmit()}>დამატება</Button>
              <Typography>
                {percentage === 100 || percentage === null
                  ? null
                  : `${status} ${percentage} %`}
              </Typography>
            </Box>
          </Box>
          <LoaderModal
            open={deleting}
            title={renderLanguage(
              "სიახლე იშლება გთხოვთ დალოდოთ...",
              "News is deleting please wait..."
            )}
          />
          <LoaderModal
            open={adding}
            title={renderLanguage(
              "სიახლე ემატება გთხოვთ დალოდოთ...",
              "News is adding please wait..."
            )}
          />
        </Box>
      </Box>
    </>
  );
}
