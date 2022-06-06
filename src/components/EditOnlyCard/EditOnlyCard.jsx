import React from "react";

const EditOnlyCard = ({
  handleEditFormSubmit,
  blog,
  handleCancelClick,
  handleEditFormChange,
  editFormData,
}) => {
  return (
    <div className="blogcard-container" key={blog}>
      <form onSubmit={(event) => handleEditFormSubmit(event)}>
        <div className="blogcard-title">
          <input
            type="text"
            name="title"
            maxLength="25"
            id="title"
            required="required"
            value={editFormData.title}
            onChange={handleEditFormChange}
            autoFocus
          ></input>
        </div>
        <div className="blogcard-body">
          <input
            name="body"
            maxLength="150"
            id="body"
            value={editFormData.body}
            onChange={handleEditFormChange}
          ></input>
        </div>

        <div className="blogcard-author">
          <input
            type="text"
            name="author"
            maxLength="25"
            id="author"
            required="required"
            value={editFormData.author}
            onChange={handleEditFormChange}
          ></input>
        </div>
        <div className="blogcard-button">
          <button type="submit">Save edit</button>
          <button type="button" /* onClick={handleCancelClick} */>
            Cancel edit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditOnlyCard;
