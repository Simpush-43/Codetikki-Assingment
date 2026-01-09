import React, { useState } from "react";

const NoteForm = ({ onAdd }) => {
  const [formdata, setformdata] = useState({
    title: "",
    description: "",
  });
  const [error, seterror] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformdata((prev) => ({ ...prev, [name]: value }));
    if (name === "title" && value.trim() !== "") {
      seterror(null);
    }
  };
  // function to handle notes input
  const handleSubmit = (e) => {
    e.preventDefault();
    // Valdidation
    if (!formdata.title.trim()) {
      seterror("Title is missing");
      return;
    }
    // Create new note
    const Newnote = {
      id: Date.now(),
      title: formdata.title,
      description: formdata.description,
    };
    onAdd(Newnote);
    // after submit reset formdata
    setformdata({ title: "", description: "" });
    seterror(null);
  };
  return (
    <>
      <div className="note-form-card">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              value={formdata.title}
              onChange={handleChange}
              placeholder="Title"
              className={error ? "input-error" : ""}
              name="title"
            />
            {/* Error message */}
            {error && <span style={{ color: "red" }}>{error}</span>}
          </div>
          <div className="form-group">
            <textarea
              name="description"
              value={formdata.description}
              onChange={handleChange}
              placeholder="Desciption (Optional)"
              rows="3"
            />
          </div>
          <button type="submit">
            Add notes
          </button>
        </form>
      </div>
    </>
  );
};

export default NoteForm;
