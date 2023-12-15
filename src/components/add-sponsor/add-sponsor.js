import Head from "next/head";
// import { useParams, useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
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
import styles from "./add-partner.module.css";
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

export default function AddPartners() {
  const small_id = uuid().slice(0, 8);
  const [imageList, setImageList] = useState([]);
  const [percentage, setPercentage] = useState(null);
  const [status, setStatus] = useState(null);
  const [partners, setPartners] = useState(null);
  const [deleting, setDeleting] = useState(false);
  const [adding, setAdding] = useState(false);
  const [deletingPhotos, setDeletingPhotos] = useState([]);
  const router = useRouter();
  const { renderLanguage } = useLanguage();

  const { edit, id } = router.query;

  const formik = useFormik({
    initialValues: {
      url: "",
      photos: [],
    },
    validationSchema: Yup.object({
      url: Yup.string()
        .max(255)
        .required(renderLanguage("ლინკი სავალდებულოა", "Link is required")),
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

          const todosRef = doc(db, "partners", id);

          await updateDoc(todosRef, {
            title_ka,
            title_eng,
            description_ka,
            description_eng,
            photos,
            created_at: partners.created_at,
            updated_at: new Date(),
          });
          setAdding(false);
          toast.success(
            renderLanguage(
              "სიახლე წარმატებით დარედაქტირდა!",
              "Partner has succesfully been edited"
            )
          );
          router.push("/dashboard/published-partners");
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
        const { url, photos } =
          values;
        for (let i = 0; i < photos.length; i++) {
          photos[i]["priority"] = i;
        }

        const todosRef = collection(db, "partners");

        await setDoc(doc(todosRef, uuid()), {
          url,
          photos,
          created_at: new Date(),
          updated_at: new Date(),
        });
        setAdding(false);
        toast.success(
          renderLanguage(
            "სიახლე წარმატებით დაემატა!",
            "Partner has succesfully been added"
          )
        );
        router.push("/dashboard/published-partners");
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
      const docRef = doc(db, "partners", id);
      const docSnapshot = await getDoc(docRef);

      if (docSnapshot.exists) {
        const data = docSnapshot.data();
        formik.setFieldValue("url", data?.url);
        setImageList(data?.photos);
        setPartners(data);
      } else {
        toast.error(
          renderLanguage("სიახლე არ მოიძებნა!", "Partner not found!")
        );
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
      if (imageList.length > 0) {
        return;
      }
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
                "მოხდა შეცდომა აფოტოების ატვირთვის დროს!",
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

  const handleRemoveImageFromDB = (photo) => {
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

  const deletePartners = async () => {
    try {
      setDeleting(true);
      for await (const image of partners.photos) {
        handleRemoveImageFromDB(image);
      }

      const docRef = doc(db, "partners", id);
      await deleteDoc(docRef);

      toast.success(
        renderLanguage(
          "პარტნიორი წარმატებით წაიშალა!",
          "Partner has succesfully been deleted!"
        )
      );
      setDeleting(false);
      router.push("/dashboard/published-partners");
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
        <title>ACT | Add partners</title>
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
              ? renderLanguage("პარტნიორის რედაქტირება", "Edit Partner")
              : renderLanguage("პარტნიორის დამატება", "Add Partner")}
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
                    error={!!(formik.touched.url && formik.errors.url)}
                    fullWidth
                    helperText={formik.touched.url && formik.errors.url}
                    label={renderLanguage("ლინკი", "Link")}
                    onChange={formik.handleChange}
                    value={formik.values.url}
                    name="url"
                  />
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
                    ? renderLanguage("პარტნიორის რედაქტირება", "Edit Partner")
                    : renderLanguage("პარტნიორის დამატება", "Add Partner")}
                </Button>
                {edit && (
                  <Button
                    onClick={deletePartners}
                    fullWidth
                    size="large"
                    sx={{ mt: 3 }}
                    variant="contained"
                    color="error"
                  >
                    {renderLanguage("პარტნიორის წაშლა", "Delete Partner")}
                  </Button>
                )}
              </form>
            </Box>
          </Box>
          <LoaderModal
            open={deleting}
            title={renderLanguage(
              "პარტნიორი იშლება გთხოვთ დალოდოთ...",
              "Partner is deleting please wait..."
            )}
          />
          <LoaderModal
            open={adding}
            title={renderLanguage(
              "პარტნიორი ემატება გთხოვთ დალოდოთ...",
              "Partner is adding please wait..."
            )}
          />
        </Box>
      </Box>
    </>
  );
}
