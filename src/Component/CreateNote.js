import React, { useState } from "react";
import "./style.css";

function CreateNote(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const inputChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setNote((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
    console.log(note);
  };

  const addEvent = (e) => {
    e.preventDefault();

    props.passNote(note);

    setNote({
      title: "",
      content: "",
    });
  };

  return (
    <div className="createNotes-container">
      <form>
        <input
          type="text"
          name="title"
          value={note.title}
          onChange={inputChange}
          placeholder="Title"
          autoComplete="off"
          className="inputarea"
          style={{backgroundColor: "#E6DED3", width: "300px", border: "none", borderRadius: "10px 10px 0 0" }}
        />
        <div>
          <textarea
            rows="5"
            name="content"
            value={note.content}
            onChange={inputChange}
            column="5"
            placeholder="Take a note..."
            className="textarea"
            style={{backgroundColor: "#E6DED3", width: "300px", height: "100px", border: "none", borderRadius: "0 0 10px 10px"}}
          />
        </div>
        <button onClick={addEvent} className="button-style">Add Note</button>
      </form>
    </div>
  );
}

export default CreateNote;
