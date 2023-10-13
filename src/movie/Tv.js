import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Tv() {
  const [tvTitle, setTvTitle] = useState("Breaking Bad");
  const [tvImagePath, setTvImagePath] = useState(
    "https://es.web.img3.acsta.net/pictures/18/04/04/22/52/3191575.jpg"
  );

  const apiKey = "ae087f9e047cea3d15eb1c5fba503e08"; // Set your API key here
  const imagePath = "https://image.tmdb.org/t/p/w500";
  const [allTvShow, setAllTv] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [lang, setLang] = useState("en-US");

  const fetchTvShows = () => {
    axios
      .get(`https://api.themoviedb.org/3/tv/airing_today`, {
        params: {
          api_key: apiKey,
          page: pageNumber,
          language: lang,
        },
      })
      .then((response) => {
        setAllTv(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    // Fetch TV shows when the component mounts
    fetchTvShows();
  }, [pageNumber, lang]);

  const prevPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  const nextPage = () => {
    setPageNumber(pageNumber + 1);
  };

  const changeLang = () => {
    setLang(lang === "en-US" ? "ar-SA" : "en-US");
  };

  return (
    <>
     
      <div className="w-25 float-end mt-2">
        <button
          className="btn btn-warning"
          onClick={prevPage}
          disabled={pageNumber <= 1}
        >
          Prev
        </button>
        <button className="btn btn-warning" onClick={nextPage}>
          Next
        </button>
      </div>
      <button className="btn btn-warning" onClick={changeLang}>
        {lang === "en-US" ? "Arabic" : "English"}
      </button>
      <div className="container mt-5">
        <div className="row">
          {allTvShow.map((tvShow) => (
            <Card style={{ width: "20rem", margin: "2px" }} className="Card" key={tvShow.id}>
              <Card.Img variant="top" src={`${imagePath}${tvShow.poster_path}`} />
              <Card.Body>
                <Card.Title>{tvShow.name}</Card.Title>
                <Link className="btn btn-success" to={`/TVD/${tvShow.id}`}>
                  See Details
                </Link>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}

export default Tv;
