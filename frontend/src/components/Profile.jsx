import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import Yourimages from "./Yourimages";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../App.css";
const Profile = () => {
  let { id } = useParams();
  const [user, setUser] = useState({});
  const getUserData = async () => {
    try {
      const data = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/users/user/${id}`
      );
      setUser(data.data);
      // console.log(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUserData();
  }, []);
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const convertDate = (date) => {
    const utcDate = new Date(date);
    return utcDate.toLocaleString();
  };
  return (
    <>
      <Container
        className="profileContainer"
        maxWidth="lg"
        sx={{ display: "flex", marginTop: "20px " }}
      >
        <Box style={{ flex: 1.5 }}>
          <img
            style={{
              display: "block",
              width: "300px",
              marginInline: "auto",
            }}
            src={user.image}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            // alignItems: "center",
            justifyContent: "center",
            flex: 2,
          }}
        >
          <Typography variant="h5">
            Name : {user.name && capitalizeFirstLetter(user.name)}
          </Typography>
          <Typography variant="h5">
            Email : {user.name && capitalizeFirstLetter(user.email)}
          </Typography>
          <Typography variant="h5">
            Joined At : {convertDate(user?.createdAt)}
          </Typography>
        </Box>
      </Container>
      <Typography
        variant="h4"
        sx={{ textAlign: "center", marginBlock: "20px" }}
      >
        {user.name && capitalizeFirstLetter(user.name)}'s Post
      </Typography>
      <Yourimages userId={id} />
    </>
  );
};

export default Profile;
