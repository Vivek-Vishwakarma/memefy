import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Chip } from "@mui/material";
import { useSelector } from "react-redux";
import Mymodal from "./Mymodal";
import { useNavigate } from "react-router-dom";
import "../App.css";
export default function MyCard({ e }) {
  const { loading, img, error, success } = useSelector((state) => state.image);

  const navigate = useNavigate();
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const convertDate = (date) => {
    const utcDate = new Date(date);
    return utcDate.toLocaleString();
  };
  const handleOpen = () => setOpen(true);

  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Card className="card" sx={{ width: 240 }}>
        <CardHeader
          sx={{ cursor: "pointer" }}
          avatar={<Avatar alt={e.userId.name} src={e.userId.image} />}
          title={capitalizeFirstLetter(e.userId.name)}
          subheader={convertDate(e.createdAt)}
          onClick={() => {
            navigate(`/profile/${e.userId._id}`);
          }}
        />
        <CardMedia
          style={{ cursor: "pointer" }}
          onClick={handleOpen}
          component="img"
          height="250"
          image={e.imgUrl}
          alt="Paella dish"
        />
        <Mymodal open={open} setOpen={setOpen} img={e.imgUrl} />
        <CardContent>
          <Typography variant="subtitle1">
            {capitalizeFirstLetter(e.name)}
          </Typography>
          {e.tags.map((ele) => {
            return (
              <Chip
                sx={{ marginRight: 1, fontWeight: "bold" }}
                key={ele}
                label={capitalizeFirstLetter(ele)}
                color="success"
                size="small"
                variant="filled"
              />
            );
          })}
        </CardContent>
      </Card>
    </>
  );
}
