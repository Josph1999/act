import { Avatar, Box, Button, Divider, Input, Rating, Skeleton, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { authApi } from "src/api/auth";
import RateByStars from "../rate-by-stars/rate-by-stars";
import { toast } from "react-toastify";
import { v4 as uuid } from "uuid";
import { useMockedUser } from "src/hooks/use-mocked-user";
import { handleUploadPhoto } from "./helpers/upload-image";
import parse from "html-react-parser";

export default function UserProfile() {
  const [userProfile, setUserProfile] = useState(null);
  const [hovered, setHovered] = useState(false);
  const [coverHovered, setCoverHovered] = useState(false);
  const [percentage, setPercentage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [coverLoading, setCoverLoading] = useState(false);
  const [comments, setComments] = useState([]);

  const user = useMockedUser();

  const router = useRouter();
  const { id } = router.query;
  const small_id = uuid().slice(0, 8);

  const getUserProfile = useCallback(async () => {
    if (id) {
      const data = await authApi.getUserProfile(id);
      if (data?.data) {
        setUserProfile(data?.data);
        setComments(data?.data?.comments_for_me);
      }
    }
  }, [id]);

  const onMouseOver = () => {
    setHovered(!hovered);
  };

  const onMouseOut = () => {
    setHovered(!hovered);
  };

  const onCoverMouseOver = () => {
    setCoverHovered(!coverHovered);
  };

  const onCoverMouseOut = () => {
    setCoverHovered(!coverHovered);
  };

  const handleChangeProfile = (event) => {
    try {
      const image = event.target.files[0];

      handleUploadPhoto(
        image,
        small_id,
        user,
        "profile_for",
        setPercentage,
        setLoading,
        setCoverLoading,
        setHovered,
        setCoverHovered
      );
    } catch (error) {
      toast.error("შეცდომა ფოტოების ატვირთვის დროს!");
    }
  };

  const handleChangeCover = (event) => {
    try {
      const image = event.target.files[0];

      handleUploadPhoto(
        image,
        small_id,
        user,
        "cover_for",
        setPercentage,
        setLoading,
        setCoverLoading,
        setHovered,
        setCoverHovered
      );
    } catch (error) {
      toast.error("შეცდომა ფოტოების ატვირთვის დროს!");
    }
  };

  useEffect(() => {
    getUserProfile();
  }, [getUserProfile, loading, coverLoading]);

  return (
    <Box sx={{ width: "100%", padding: "0px 10px" }}>
      <Box sx={{ width: "100%", padding: "0px" }}>
        {coverLoading ? (
          <Skeleton sx={{ width: "100%", height: "400px" }} variant="rectangular" />
        ) : coverHovered && user?.id === id ? (
          <Box
            onMouseEnter={onCoverMouseOver}
            onMouseLeave={onCoverMouseOut}
            sx={{
              width: "100%",
              backgroundImage: `url(${userProfile?.cover_picture[0]?.url})`,

              height: "400px",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {" "}
            <input
              accept="image/*"
              id="cover-button-file"
              multiple
              type="file"
              style={{
                display: "none",
              }}
              onChange={handleChangeCover}
            />
            <label htmlFor="cover-button-file">
              <Box
                sx={{
                  height: "400px",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                ქავერის ფოტოს ატვირთვა +
              </Box>
            </label>
          </Box>
        ) : (
          <Box
            onMouseEnter={onCoverMouseOver}
            onMouseLeave={onCoverMouseOut}
            sx={{
              width: "100%",
              backgroundImage: `url(${userProfile?.cover_picture[0]?.url})`,
              height: "400px",
              backgroundRepeat: "no-repeat",
              backgroundColor: "#4338CA",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></Box>
        )}
        <Box sx={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          {loading ? (
            <Skeleton
              variant="circular"
              width={180}
              height={180}
              sx={{
                bottom: "80px",
                position: "relative",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "5px solid #fff",
                mb: 2,
                backgroundColor: "gray",
                transition: "0.5s",
              }}
            />
          ) : hovered && user?.id === id ? (
            <Box
              onMouseEnter={onMouseOver}
              onMouseLeave={onMouseOut}
              sx={{
                height: 180,
                width: 180,
                borderRadius: "100px",
                bottom: "80px",
                position: "relative",
                backgroundImage: `url(${userProfile?.profile_picture[0]?.url})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                display: "flex",
                backgroundPosition: "center",
                justifyContent: "center",
                alignItems: "center",
                border: "5px solid #fff",
                mb: 2,
                transition: "0.5s",
              }}
            >
              {" "}
              <input
                accept="image/*"
                id="profile-button-file"
                multiple
                type="file"
                style={{
                  display: "none",
                }}
                onChange={handleChangeProfile}
              />
              <label htmlFor="profile-button-file">
                <Box
                  sx={{
                    height: 180,
                    width: 180,
                    borderRadius: "100px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  ფოტოს ატვირთვა
                </Box>
              </label>
            </Box>
          ) : (
            <Box
              onMouseEnter={onMouseOver}
              onMouseLeave={onMouseOut}
              sx={{
                height: 180,
                width: 180,
                borderRadius: "100px",
                bottom: "80px",
                position: "relative",
                backgroundImage: `url(${userProfile?.profile_picture[0]?.url})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundColor: "#F79009",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "5px solid #fff",
                mb: 2,
                transition: "0.5s",
              }}
            ></Box>
          )}
          <Typography
            variant="h5"
            sx={{ color: "black", marginTop: "20px", display: "flex", flexDirection: "column" }}
          >
            {userProfile?.first_name} {userProfile?.last_name}
            <Rating name="read-only" value={userProfile !== null && userProfile?.rating} readOnly />
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: "30px",
            "@media (max-width: 700px)": {
              flexWrap: "wrap-reverse",
            },
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", width: "607px", gap: "30px" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="h5" fontWeight={500}>
                შეფასებები
              </Typography>
              <Typography variant="h5" fontWeight={500}>
                {userProfile !== null && userProfile?.rating}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                height: '500px',
                maxHeight: "500px",
                overflowY: "auto",
                gap: "20px",
                padding: "32px",
                "&::-webkit-scrollbar": {
                  width: "5px",
                  backgroundColor: "#E0E0FC",
                  borderRadius: "12px",
                  height: "6px",
                  transition: "0.3s",
                  cursor: "pointer",
                  "&:hover": {
                    height: "8px",
                  },
                },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: "#6366F1",
                  borderRadius: "12px",
                },
              }}
            >
              {comments?.length > 0 &&
                comments?.map((comment) => {
                  return (
                    <Box sx={{ border: "1px solid #B1B3F8", padding: "24px", borderRadius: "8px" }}>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          gap: "15px",
                          alignItems: "center",
                          cursor: 'pointer'
                        }}
                        onClick={() => {
                          router.push(`/profiles/${comment?.commented_by?.id}`);
                        }}
                      >
                        <Avatar
                          src={comment?.commented_by?.profile_picture?.[0].url || ""}
                          width={10}
                          height={10}
                        />
                        <Typography fontWeight={500}>
                          {comment?.commented_by?.first_name}
                        </Typography>
                      </Box>
                      <Divider />
                      <Typography>{parse(comment?.text)}</Typography>
                    </Box>
                  );
                })}
            </Box>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "30px", width: "736px" }}>
            <Typography variant="h5" fontWeight={500}>
              შეაფასე მომხმარებელი
            </Typography>
            <RateByStars user={userProfile} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
