import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
 import Header from './Component/Header';
 import Footer from './Component/Footer';
 import CreateNote from './Component/CreateNote';
 import Notes from './Component/Notes';
import { useState } from 'react';

function App() {

  const [addNotes, setAddNotes] = useState([]);

    const addNote = (note) => {
   
      setAddNotes((prevData)=> {
        return [...prevData, note];
      })

      console.log(note)
    }

    const onDelete = (id) => {
        setAddNotes((oldData)=>
          oldData.filter((ele, indx)=>{
              return id !== indx;
          })
        )
    }

  return (
    <div>  
     <Header/>
     <CreateNote passNote={addNote}/>
     <div  style={{display: "flex", gap: "1rem"}}>
    {
    addNotes.map((ele, indx)=> {
      return (
        <Notes key={indx} id={indx} title={ele.title} content={ele.content} deleteItem={onDelete} />
      )
    })
  }
  </div>
    <Footer/>
    </div>
  );
}

export default App;
