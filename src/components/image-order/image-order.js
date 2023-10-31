import { Badge, Box, IconButton } from "@mui/material";
import Image from "next/image";
import { any } from "prop-types";
import React, { useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import DeleteIcon from "@mui/icons-material/Delete";
import styles from "../add-news/add-news.module.css";
import { storage } from "src/firebase/firebase";
import { toast } from "react-toastify";
import { deleteObject, ref } from "firebase/storage";

const ImageReorderApp = ({ images, setImages }) => {
  const handleImageReorder = (dragIndex, dropIndex) => {
    const draggedImage = images[dragIndex];

    const newImages = [...images];
    newImages.splice(dragIndex, 1);
    newImages.splice(dropIndex, 0, draggedImage);
    setImages([...newImages]);
  };

  const DraggableImage = ({ image, index }) => {
    const [{ isDragging }, drag] = useDrag({
      item: { index },
      type: "image",
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    });

    const [, drop] = useDrop({
      accept: "image",
      drop: (item) => {
        const dragIndex = item.index;
        const dropIndex = index;
        item["priority"] = index;
        if (dragIndex === dropIndex) return;
        handleImageReorder(dragIndex, dropIndex);
      },
    });

    const handleRemoveImage = (photo) => {
      const photoRef = ref(storage, `images/${photo.name}`);

      deleteObject(photoRef)
        .then(() => {
          const newImages = images.filter((image) => image.name !== photo.name);

          setImages(newImages);
          toast.success("ფოტო წარმატებით წაიშალა!");
        })
        .catch((error) => {
          toast.error("შეცდომა ფოტოს წაშლის დროს!");
        });
    };
    return (
      <Box
        className={styles.smallPictures}
        ref={(node) => drag(drop(node))}
        style={{ opacity: isDragging ? 0.5 : 1 }}
      >
        <Badge
          badgeContent={
            <IconButton onClick={() => handleRemoveImage(image)}>
              <DeleteIcon sx={{ color: "#F04438" }} />
            </IconButton>
          }
        >
          <Image
            // src={URL.createObjectURL(photo)}
            src={image.url}
            key={index}
            alt="Preview"
            width={96}
            height={68}
            style={{ objectFit: "cover", borderRadius: "4px" }}
          />
        </Badge>
      </Box>
    );
  };

  return (
    <Box className={styles.boxWrapper}>
      {images.map((image, index) => (
        <DraggableImage key={image.id} image={image} index={index} />
      ))}
    </Box>
  );
};

export default ImageReorderApp;
