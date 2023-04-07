import { Container } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./Loading";
import MyCard from "./MyCard";
import { userImages } from "../redux/imageAction";

const Yourimages = ({ userId }) => {
  const { loading, userInfo, error, success } = useSelector(
    (state) => state.user
  );
  const { img } = useSelector((state) => state.userImage);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userImages(userInfo._id));
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            gap: 4,
            marginBlock: 5,
          }}
        >
          {img &&
            img.map((e) => {
              return <MyCard key={e._id} e={e} />;
            })}
        </Container>
      )}
    </>
  );
};

export default Yourimages;
