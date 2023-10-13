import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
function TVD() {
  const apiKey = "ae087f9e047cea3d15eb1c5fba503e08";
  const imagePath = "https://image.tmdb.org/t/p/w500";
  const { id } = useParams();
  const [tvShow, setTvShow] = useState({});
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/tv/${id}`, {
        params: {
          api_key: apiKey,
        },
      })
      .then((response) => {
        console.log(response.data);
        setTvShow(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <Card style={{ width: "20rem", margin: "2px" }} className="Card">
        <Card.Img variant="top" src={`${imagePath}${tvShow.poster_path}`} />
        <Card.Body>
          <Card.Title>{tvShow.name}</Card.Title>
          <Card.Text>{tvShow.overview}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default TVD;