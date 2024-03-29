import React from "react";
import { useState, useEffect } from "react";

import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md"; // Corrected import statements
import BooksTable from "../components/home/BooksTable";
import BooksCard from "../components/home/BooksCard";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showtype, setShowtype] = useState();

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:3000/books")
      .then((res) => {
        setBooks(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  return (
    <div
      className="p-4 h-screen"
      style={{
        backgroundImage:
          'url("https://miro.medium.com/v2/resize:fit:720/format:webp/1*6Jp3vJWe7VFlFHZ9WhSJng.jpeg")',
      }}
    >
      <div className="flex justify-center items-center gap-x-4">
        <button
          className="bg-sky-200 hover:bg-sky-300 px-4 py-1 rounded-lg"
          onClick={() => setShowtype("table")}
        >
          Table
        </button>
        <button
          className="bg-sky-200 hover:bg-sky-300 px-4 py-1 rounded-lg"
          onClick={() => setShowtype("card")}
        >
          Card
        </button>
      </div>
      <div
        className="flex justify-between items-center p-4 rounded-md font-bold italic m-4"
        style={{
          backgroundColor: "rgba(246, 246, 246, 0.5)",
        }}
      >
        <h1 className="text-3xl my-8">Book List</h1>
        <Link to="/books/create">
          <MdOutlineAddBox className=" text-black-400 text-4xl" />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : showtype === "table" ? (
        <BooksTable books={books} />
      ) : (
        <BooksCard books={books} />
      )}
    </div>
  );
};

export default Home;
