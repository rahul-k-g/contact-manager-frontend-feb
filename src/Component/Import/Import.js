
import React from "react";
import { useState } from "react";
import './Import.css'
import axios from "axios";
import { parse } from "papaparse";

const Importpopup = props => {

  const [highlighted, setHighlighted] = React.useState(false)
  const [contacts, setContacts] = React.useState([])
  const [imports, setImports] = useState(false);
  const token = localStorage.getItem("token")
  console.log(token)
  function handleImport() {
   
    axios.post("http://localhost:4000/api/v1/contacts/", {
       headers: {
        "content-type" :"application/csv",
        "Authorization": token
    },
      
      data: {
          source: contacts
      }
  })
      .then(res => {
        console.log(res);
        console.log(res.data);
        setImports(!imports)
        props.getDatas()

      })
      .catch((err) => console.log(err))

  }
  

  return (
    <div className={`popup-box ${highlighted ? "highlighted": "nothighlighted"}`}
      onDragEnter={() => { setHighlighted(true) }}
      onDragLeave={() => { setHighlighted(false) }}
      onDragOver={(e) => { e.preventDefault() }} onDrop={(e) => {
        e.preventDefault()
        setHighlighted(false)
        console.log(e.dataTransfer.files)
      
        Array.from(e.dataTransfer.files).filter(file => file.type === "text/csv")
          .forEach(async (file) => { 
            const text= await file.text();
            const result = parse(text,{header:true})
           
           let payload = {
            importedData: result.data
        };
            axios.post("http://localhost:4000/api/v1/contacts/",payload,
            {
              headers: { authorization: props.token }

          }
           
          )
              .then(res => {
                console.log(res);
                console.log(res.data);
                setImports(!imports)
                props.getDatas()
        
              })
              .catch((err) => console.log(err))
        
          
           })
      }}>


      {props.content}
       
    </div>
  );
};

export default Importpopup;