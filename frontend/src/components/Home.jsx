import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserFromLocal } from "../redux/userSlice";
import Upload from "./Upload";
import Yourimages from "./Yourimages";

const Home = () => {
  const { loading, userInfo, error, success } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userId = JSON.parse(localStorage.getItem("userToken"));

  useEffect(() => {
    if (!localStorage.getItem("userToken")) {
      alert("Please login before accessing home page !!");
      navigate("/login");
    } else {
      dispatch(setUserFromLocal(JSON.parse(localStorage.getItem("userToken"))));
    }
  }, []);

  return (
    <>
      <Upload />
      <h1 style={{ textAlign: "center" }}>Your Images</h1>
      {success && <Yourimages userId={userId.user._id} />}
    </>
  );
};

export default Home;
