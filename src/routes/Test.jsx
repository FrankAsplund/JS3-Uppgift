import React from "react";
import { useEffect, useState } from "react";
import "./routes.css";
import apiRequest from "../components/apiRequest/apiRequest";
/* import ReadOnlyCard from "../components/ReadOnlyCard/ReadOnlyCard"; */
import EditOnlyCard from "../components/EditOnlyCard/EditOnlyCard";
/* import { useParams } from "react-router-dom"; */

export const Test = () => {
  const API_URL = "http://localhost:8000/blogs";
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);

  /* useEffect(() => {
    BlogsGet();
  }, []); */

  /* const BlogsGet = () => {
    fetch("http://localhost:8000/blogs")
      .then((res) => res.json())
      .then((result) => {
        setBlogs(result);
      });
  }; */

  /* const { id } = useParams(); */
  /* useEffect(() => {
    fetch("http://localhost:8000/blogs" + id)
      .then((res) => res.json())
      .then((result) => {
        setTitle(result.blog.title);
        setBody(result.blog.body);
        setAuthor(result.blog.author);
      });
  }, [id]); */

  /* const handleSubmit = (event) => {
    event.preventDefault();
    var data = {
      id: id,
      title: title,
      body: body,
      author,
    };
    fetch("http://localhost:8000/blogs", {
      method: "PUT",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        alert(result["message"]);
        if (result["status"] === "ok") {
          window.location.href = "/";
        }
      });
  }; */

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");

  return (
    <div className="home">
      <h1>Test</h1>
      <div className="postContainer">
        <div className="blogcard">
          {blogs.map((blog) => (
            <EditOnlyCard blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Test;
