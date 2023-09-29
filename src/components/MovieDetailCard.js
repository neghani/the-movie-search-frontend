import { useEffect } from "react";
import Nav from "./Nav";

import { json, useParams } from "react-router-dom";
import { getMovieDetails } from "../Services/fetchService";
import { useState } from "react";

export default  function MovieDetailCard() {
  const { id } = useParams();
  const [moveData, setMoveData] = useState({});

  useEffect(() => {
    fetchData();
  },[]);
  async function fetchData() {
    let data = await getMovieDetails(id);
    setMoveData(data);
  }
  return (
    <>
      <Nav></Nav>

      <p>sample {JSON.stringify(moveData.cast)} </p>
      <p>sample {JSON.stringify(moveData.crew)} </p>

    </>
  );
}
