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
import styles from "./add-news.module.css";
import ImageReorderApp from "../image-order/image-order";
import { toast } from "react-toastify";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { useRouter } from "next/router";
import { useLanguage } from "src/contexts/language-context";
import LoaderModal from "../loader-modal/loader-modal";
import axios from "axios";
import LinkChips from "../link-chips/link-chips";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

export default function AddNews() {
  const small_id = uuid().slice(0, 8);
  const [imageList, setImageList] = useState([]);
  const [percentage, setPercentage] = useState(null);
  const [status, setStatus] = useState(null);
  const [news, setNews] = useState(null);
  const [deleting, setDeleting] = useState(false);
  const [adding, setAdding] = useState(false);
  const [chipData, setChipData] = useState([]);
  const router = useRouter();
  const { renderLanguage } = useLanguage();

  const { edit, id } = router.query;

  const formik = useFormik({
    initialValues: {
      title_ka: "",
      title_eng: "",
      description_ka: "",
      description_eng: "",
      photos: [],
      submit: null,
      created_at: news ? dayjs(news?.created_at) : dayjs(new Date()),
    },
    validationSchema: Yup.object({
      title_ka: Yup.string()
        .max(255)
        .required(
          renderLanguage(
            "სათაური ქართულად სავალდებულოა",
            "Title on Georgian is required"
          )
        ),
      title_eng: Yup.string()
        .max(255)
        .required(
          renderLanguage(
            "სათაური ინგლისურად სავალდებულოა",
            "Title on English is required"
          )
        ),
      description_ka: Yup.string().required(
        renderLanguage(
          "აღწერა ქართულად სავალდებულოა",
          "Description on Georgian is required"
        )
      ),
      description_eng: Yup.string().required(
        renderLanguage(
          "აღწერა ინგლისურად სავალდებულოა",
          "Description on English is required"
        )
      ),
      photos: Yup.array().required(
        renderLanguage("ფოტოები სავალდებულოა!", "Photos are required")
      ),
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
          const {
            title_ka,
            title_eng,
            description_ka,
            description_eng,
            photos,
          } = values;

          for (let i = 0; i < photos.length; i++) {
            photos[i]["priority"] = i;
          }

          const todosRef = doc(db, "news", id);

          await updateDoc(todosRef, {
            title_ka,
            title_eng,
            description_ka,
            description_eng,
            photos,
            created_at: new Date(values.created_at.toISOString()),
            updated_at: new Date(),
            mediaLinks: chipData,
          });
          setAdding(false);
          toast.success(
            renderLanguage(
              "სიახლე წარმატებით დარედაქტირდა!",
              "News has succesfully been edited"
            )
          );
          // router.push("/dashboard/published-news");
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

        const {
          title_ka,
          title_eng,
          description_ka,
          description_eng,
          photos,
          created_at,
        } = values;
        for (let i = 0; i < photos.length; i++) {
          photos[i]["priority"] = i;
        }

        const todosRef = collection(db, "news");

        const docId = uuid();

        await setDoc(doc(todosRef, docId), {
          title_ka,
          title_eng,
          description_ka,
          description_eng,
          photos,
          created_at: new Date(values.created_at.toISOString()),
          updated_at: new Date(),
          mediaLinks: chipData,
        });
        setAdding(false);
        toast.success(
          renderLanguage(
            "სიახლე წარმატებით დაემატა!",
            "News has succesfully been added"
          )
        );
        const emailRef = collection(db, "subscriptions");

        await axios.post(
          process.env.NEXT_PUBLIC_API_URL + `/send-news?link=news&id=${docId}`,
          {
            title_ka,
            title_eng,
            description_ka,
            description_eng,
            photos,
            created_at: new Date(),
            updated_at: new Date(),
          }
        );

        // router.push("/dashboard/published-news");
      } catch (err) {
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false);
      }
    },
  });

  let priority = 0;

  const metadata = {
    contentType: "image/jpeg",
  };

  const getDocumentById = useCallback(async () => {
    try {
      const docRef = doc(db, "news", id);
      const docSnapshot = await getDoc(docRef);

      if (docSnapshot.exists) {
        const data = docSnapshot.data();
        data.created_at = docSnapshot.data().created_at.toDate();
        formik.setFieldValue("title_ka", data?.title_ka);
        formik.setFieldValue("title_eng", data?.title_eng);
        formik.setFieldValue("description_ka", data?.description_ka);
        formik.setFieldValue("description_eng", data?.description_eng);
        formik.setFieldValue("created_at", dayjs(data?.created_at));
        setImageList(data?.photos);
        setNews(data);
        setChipData(data?.mediaLinks || []);
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

  const handleChange = (event) => {
    try {
      for (let i = 0; i < event.target.files.length; i++) {
        const image = event.target.files[i];
        const promises = [];
        image["id"] = Math.random();
        const imageRef = ref(storage, `images/${image.name + small_id}`);
        const uploadTask = uploadBytesResumable(imageRef, image, metadata);
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
                setStatus(
                  renderLanguage("ფოტოები იტვირთება", "Upload in proccess")
                );
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
      for await (const image of news.photos) {
        handleRemoveImage(image);
      }

      const docRef = doc(db, "news", id);
      await deleteDoc(docRef);

      toast.success(
        renderLanguage(
          "სიახლე წარმატებით წაიშალა!",
          "News has succesfully been deleted!"
        )
      );
      setDeleting(false);
      router.push("/dashboard/published-news");
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
        <title>ACT | Add News</title>
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
              ? renderLanguage("სიახლის რედაქტირება", "Edit news")
              : renderLanguage("სიახლის დამატება", "Add News")}
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
                  {renderLanguage("ფოტოს დამატება", "Add Photos")}
                </label>
                <input
                  multiple
                  id="file-input"
                  type="file"
                  onChange={handleChange}
                  style={{ display: "none" }}
                />
              </Box>
              {imageList && imageList.length > 0 ? null : (
                <Box className={styles.boxWrapperForPlaceHolders}>
                  <Box className={styles.smallPicturesPlaceHolder}></Box>
                  <Box className={styles.smallPicturesPlaceHolder}></Box>
                  <Box className={styles.smallPicturesPlaceHolder}></Box>
                  <Box className={styles.smallPicturesPlaceHolder}></Box>
                </Box>
              )}
              <Box className={styles.boxWrapper}>
                <ImageReorderApp images={imageList} setImages={setImageList} />
              </Box>
              {formik.errors.photos && (
                <Typography color="error" sx={{ mt: 3 }} variant="body2">
                  {formik.errors.photos}
                </Typography>
              )}

              <Typography>
                {percentage === 100 || percentage === null
                  ? null
                  : `${status} ${percentage} %`}
              </Typography>
            </Box>
            <Box>
              <form noValidate onSubmit={formik.handleSubmit}>
                <Stack spacing={3}>
                  <TextField
                    error={
                      !!(formik.touched.title_ka && formik.errors.title_ka)
                    }
                    fullWidth
                    helperText={
                      formik.touched.title_ka && formik.errors.title_ka
                    }
                    label={renderLanguage(
                      "სათაური ქართულად",
                      "Title on Georgian"
                    )}
                    name="title_ka"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.title_ka}
                  />
                  <TextField
                    error={
                      !!(formik.touched.title_eng && formik.errors.title_eng)
                    }
                    fullWidth
                    helperText={
                      formik.touched.title_eng && formik.errors.title_eng
                    }
                    label={renderLanguage(
                      "სათაური ინგლისურად",
                      "Title on English"
                    )}
                    name="title_eng"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.title_eng}
                  />
                  <QuillEditor
                    formik={formik}
                    value={formik.values.description_ka}
                    placeholder={renderLanguage(
                      "აღწერა ქართულად",
                      "Description on Georgian"
                    )}
                    name="description_ka"
                    type="description_ka"
                    sx={{ width: "370px" }}
                  />
                  {formik.errors.description_ka && (
                    <Typography color="error" sx={{ mt: 3 }} variant="body2">
                      {formik.errors.description_ka}
                    </Typography>
                  )}
                  <QuillEditor
                    formik={formik}
                    value={formik.values.description_eng}
                    placeholder={renderLanguage(
                      "აღწერა ინგლისურად",
                      "Description on English"
                    )}
                    name="description_eng"
                    type="description_eng"
                    sx={{ width: "370px" }}
                  />
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      label="Basic date picker"
                      onChange={(e) => {
                        formik.setFieldValue("created_at", e);
                      }}
                      value={formik.values.created_at}
                    />
                  </LocalizationProvider>
                  <LinkChips chipData={chipData} setChipData={setChipData} />
                  {formik.errors.description_eng && (
                    <Typography color="error" sx={{ mt: 3 }} variant="body2">
                      {formik.errors.description_eng}
                    </Typography>
                  )}
                </Stack>
                {formik.errors.submit && (
                  <Typography color="error" sx={{ mt: 3 }} variant="body2">
                    {formik.errors.submit}
                  </Typography>
                )}

                <Button
                  fullWidth
                  size="large"
                  sx={{ mt: 3 }}
                  type="submit"
                  variant="contained"
                >
                  {edit
                    ? renderLanguage("სიახლის რედაქტირება", "Edit news")
                    : renderLanguage("სიახლის დამატება", "Add News")}
                </Button>
                {edit && (
                  <Button
                    onClick={deleteNews}
                    fullWidth
                    size="large"
                    sx={{ mt: 3 }}
                    variant="contained"
                    color="error"
                  >
                    {renderLanguage("სიახლის წაშლა", "Delete News")}
                  </Button>
                )}
              </form>
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
