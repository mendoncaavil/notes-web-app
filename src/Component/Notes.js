import React from "react";
import Card from "react-bootstrap/Card";

function Notes(props) {
  const deleteNotes = () => {
    props.deleteItem(props.id);
  };

  const dateTime = new Date().toLocaleString();
  

  return (
    <div style={{display: "flex", flexWrap: "wrap", margin: "10px"}}>
      <Card key={props.key} >
        <Card.Body style={{ backgroundColor: "#E6DED3" }}>
          <Card.Title style={{fontSize:"30px"}}>{props.title}</Card.Title>
          <Card.Text
            style={{
              whiteSpace: "pre-wrap",
              wordWrap: "break-word",
              width: "200px",
              fontSize:"22px"
            }}
          >
            {props.content}
          </Card.Text>
          <Card.Subtitle className="mb-2 text-muted" style={{fontSize: "12px"}}>{dateTime}</Card.Subtitle>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-trash-fill"
            viewBox="0 0 16 16"
            onClick={deleteNotes}
            style={{ cursor: "pointer" }}
          >
            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
          </svg>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Notes;
