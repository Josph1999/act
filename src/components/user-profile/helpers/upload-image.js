import { deleteObject, getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { toast } from "react-toastify";
import { authApi } from "src/api/auth";
import { storage } from "src/firebase/firebase";

const metadata = {
  contentType: "image/jpeg",
};

export const deletePhoto = async (imageName) => {
  try {
    const imageRef = ref(storage, `images/${imageName}`);
    await deleteObject(imageRef);
  } catch (error) {
    toast.error("შეცდომა ფოტოს წაშლის დროს")
  }
};

export const handleUploadPhoto = (
  image,
  small_id,
  user,
  type,
  setPercentage,
  setLoading,
  setCoverLoading,
  setHovered,
  setCoverHovered
) => {
  try {
    const promises = [];

    if (type === "profile_for") {
      setLoading(true);
    }
    if (type === "cover_for") {
      setCoverLoading(true);
    }
    const imageRef = ref(storage, `images/${image.name.replace(/[()]/g, "").trim() + small_id}`);
    const uploadTask = uploadBytesResumable(imageRef, image, metadata);
    promises.push(imageRef);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setPercentage(progress);
        switch (snapshot.state) {
          case "paused":
            break;
          case "running":
            break;
          default:
            break;
        }
      },
      (error) => {
        return false;
      },
      async () => {
        const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);

        const request = {
          url: downloadUrl,
          priority: 1,
          original_name: image.name,
          name: `${image.name.replace(/[()]/g, "").trim() + small_id}`,
        };

        request[type] = user.id;

        await authApi.upload(request);

        await deletePhoto(user?.profile_picture[0]?.name);

        setLoading(false);
        setCoverHovered(false);
        setCoverLoading(false);
        setHovered(false);
        toast.success("ფოტო აიტვირთა წარმატებით!");
      }
    );

    return true;
  } catch (error) {
    return false;
  }
};
