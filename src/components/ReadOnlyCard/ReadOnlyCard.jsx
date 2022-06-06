import React from "react";

const ReadOnlyCard = ({ blog, handleDelete, handleEditClick }) => {
  return (
    <div className="blogcard-container" key={blog.id}>
      <div className="blogcard-title">
        <h3>
          {blog.title}, #{blog.id}
        </h3>
      </div>
      <div className="blogcard-body">
        <p>{blog.body}</p>
      </div>
      <div>
        <div className="blogcard-author">
          <h4>{blog.author}</h4>
        </div>
      </div>
      <div className="blogcard-button">
        <button onClick={(event) => handleEditClick(event, blog)}>
          Edit post
        </button>
        <button onClick={() => handleDelete(blog.id)}>Delete post</button>
      </div>
    </div>
  );
};

export default ReadOnlyCard;
