import React, { useEffect, useState, Fragment } from "react";
import "./routes.css";
import apiRequest from "../components/apiRequest/apiRequest";
import ReadOnlyCard from "../components/ReadOnlyCard/ReadOnlyCard";
import EditOnlyCard from "../components/EditOnlyCard/EditOnlyCard";

export const Home = () => {
  const API_URL = "http://localhost:8000/blogs";
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    BlogsGet();
  }, []);

  const BlogsGet = () => {
    fetch("http://localhost:8000/blogs")
      .then((res) => res.json())
      .then((result) => {
        setBlogs(result);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    var data = {
      title: title,
      body: body,
      author: author,
    };

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        alert(result["message"]);
        if (result["status"] === "ok") {
          BlogsGet();
        }
      });
  };

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");

  /* Edit post */

  const [editBlogId, setEditBlogId] = useState(null);

  const handleEditFormSubmit = (event) => {
    console.log("editing");
    event.preventDefault();

    var data = {
      id: editBlogId,
      title: editFormData.title,
      body: editFormData.body,
      author: editFormData.author,
    };

    fetch(`http://localhost:8000/blogs/${data.id}`, {
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
          BlogsGet();
        }
      });

    const newBlogs = [...blogs];
    const index = blogs.findIndex((blog) => (blog.id = editBlogId));
    newBlogs[index] = data;

    setBlogs(newBlogs);
    setEditBlogId(null);
  };

  const handleEditClick = (event, blog) => {
    event.preventDefault();
    setEditBlogId(blog.id);

    const formValues = {
      title: blog.title,
      body: blog.body,
      author: blog.author,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditBlogId(null);
  };

  const [editFormData, setEditFormData] = useState({
    title: "",
    body: "",
    author: "",
  });

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  /* Edit post */

  const handleDelete = async (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);

    const deleteOptions = { method: "DELETE" };
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, deleteOptions);
    if (result) setError(result);
  };

  /* Sök-funktion */

  const [q, setQ] = useState("");
  const [searchTerm] = useState(["title", "body", "author"]);

  function search(items) {
    return items.filter((item) => {
      return searchTerm.some((newItem) => {
        return (
          item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
        );
      });
    });
  }

  return (
    <div className="home">
      <h1>Home</h1>
      <h2>
        This page is where you create a short post. A post-it note. We want you
        to never forget that birthday - or that you were supposed to empty the
        dishwasher 10 minutes ago.
      </h2>

      <input
        className="search"
        placeholder="Search..."
        onChange={(e) => setQ(e.target.value)}
      />

      <div className="postContainer">
        <div className="createPost">
          <div>
            <h1>Create post-it</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <label> Blogtitle:</label>
            <input
              type="text"
              name="title"
              maxLength="25"
              id="title"
              required="required"
              onChange={(e) => setTitle(e.target.value)}
              autoFocus
            />

            <label> Body:</label>
            <input
              name="body"
              maxLength="100"
              id="body"
              placeholder="Today is my mom's birthday... Important!"
              onChange={(e) => setBody(e.target.value)}
            />
            <label> Author:</label>
            <input
              type="text"
              name="author"
              maxLength="25"
              id="author"
              required="required"
              onChange={(e) => setAuthor(e.target.value)}
            />
            <button type="submit">Submit post</button>
          </form>
        </div>

        {/* {search(blogs).map((blog) => { */}
        <div className="blogcard">
          {blogs.filter((blog) => {
            if (searchTerm == "") {
              <Fragment>
                {editBlogId === blog.id ? (
                  <EditOnlyCard
                    handleEditFormSubmit={handleEditFormSubmit}
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyCard
                    blog={blog}
                    handleEditClick={handleEditClick}
                    handleDelete={handleDelete}
                  />
                )}
              </Fragment>;
            } else {
              <ReadOnlyCard
                blog={blog}
                handleEditClick={handleEditClick}
                handleDelete={handleDelete}
              />;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;

{
  /* {blogs.map((blog) => (

))} */
}
