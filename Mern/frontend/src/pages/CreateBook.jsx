import React, { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateBook = () => {
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [publishyear, setPublishyear] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handelSaveBook = () => {
    const data = {
      title,
      author,
      publishyear,
    };
    setLoading(true);
    axios
      .post(`http://localhost:3000/books`, data)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        alert("some error check git hub page");
        console.log(error);
      });
  };
  return (
    <div
      className="p-4 h-screen"
      style={{
        backgroundImage:
          'url("https://miro.medium.com/v2/resize:fit:720/format:webp/1*6Jp3vJWe7VFlFHZ9WhSJng.jpeg")',
      }}
    >
      <BackButton />
      <h1
        className="text-3xl my-4 mx-4 p-4"
        style={{ backgroundColor: "rgba(246, 246, 246, 0.5)" }}
      >
        Create Book
      </h1>
      {loading ? <Spinner /> : ""}
      <div
        className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto"
        style={{ backgroundColor: "rgba(246, 246, 246)" }}
      >
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2  w-full "
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Publish Year</label>
          <input
            type="number"
            value={publishyear}
            onChange={(e) => setPublishyear(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2  w-full "
          />
        </div>
        <button className="p-2 bg-sky-300 m-8" onClick={handelSaveBook}>
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateBook;
