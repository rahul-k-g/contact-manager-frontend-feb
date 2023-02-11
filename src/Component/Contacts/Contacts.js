import { useState, useEffect, useContext } from "react";
import axios from "axios";
import React from "react";
import cors from "react"
import "./Contacts.css"
import Popup from "../Delete/Popup";
import Importpopup from "../Import/Import";

function Contacts() {

  var [detail, setdetail] = useState([])
  var [search, setSearch] = useState([])
  const [imports, setImports] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [checked, setChecked] = useState([]);
  const [isDeleted,setDeleted] = useState(false)
  const [contacts, setContacts] = React.useState([])
  const token = localStorage.getItem("token")
 console.log(token) 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  } 
  const toggleImport = () => {
    setImports(!imports)
  }
  
  React.useEffect(() => {
    getData()
  }, []);
  
    function getData() { 
    axios('http://localhost:4000/api/v1/contacts', {
      method: "get",
      headers: {
        
        authorization: token
    } 
  }).then((response) => {
     // setdetail(...detail, response.data.allcontact.reverse());
     setdetail(response.data.allcontact)
      console.log(response.data.allcontact)
    })
   .catch((err) => console.log(err))
  }
 const searchHandle= async ()=> { 
  const search = document.getElementById("searchText").value;
  await axios('http://localhost:4000/api/v1/contacts', {
      method: "get",
      headers: {
        'Accept':'application/json',
        "Authorization": token
    } 
  }).then((response) => {
     // setdetail(...detail, response.data.allcontact.reverse());
     setdetail(response.data.allcontact)
      console.log(response.data.allcontact)
    })
   .catch((err) => console.log(err))
  }

  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  function handleDelete() {
    console.log(checked)
    
    axios.delete("http://localhost:4000/api/v1/contacts/", {
      headers: {
        Accept:'application/json, text/plain, */*',
        authorization: token
    },
      data: {
          source: checked
      }
  })
      .then(res => {
        console.log(res);
        console.log(res.data);
        setIsOpen(!isOpen);
        getData()

      })
      .catch((err) => console.log(err))

  }

  

  const DisplayData = detail.map(function (info) {

    return (
      <tbody id={info._id} key={info._id}>
        <tr><td><input type="checkbox" value={info._id} onChange={handleCheck} /></td>

          <td>{info.name}</td>
          <td>{info.designation}</td>
          <td>{info.company} </td>
          <td>{info.industry}</td>
          <td>{info.email}</td>
          <td>{info.phoneNumber}</td>
          <td>{info.country}</td>
          <td>{info.date}</td>
          <td><img height="30px" width="30px" src="./images/editIcon.png" /></td>
          <td><img height="20px" width="20px" src="./images/deleteIcon.png" onClick={togglePopup} /></td></tr>
      </tbody>
    )
  }
  )
  console.log(DisplayData)
  return (<>
    <div className="container">

      <div className="sideBar" >
        <div className="logo">
          <img src="./images/Logo.svg" />

        </div>
        <div>
          <img className="vector" src="./images/vector.png" />
          <span className="dashboard">
            Dashboard
          </span>
        </div>
        <div className="totalcontacts">
          <img className="person" src="./images/person.png" />
          <span className="ttlcnts">Total Contacts</span>
        </div>



      </div>
      <div className="header">
        <span className="heading"> Total Contacts</span>
        <div className="searchbar" >
          <img className="lens" src="./images/search.png" onClick={ searchHandle } />
          <input type="text" className="searchText" id="searchText" />
        </div>

      </div>
      <div className="contacts">

        <div className="fns">
          <button className="delete" onClick={togglePopup} >
            <img className="deleteimg" src="./images/deleteButton.png" />Delete</button>
           
       <button className="import" onClick={toggleImport}>
           
  <img className="importimg" src="./images/import.png" /> Import</button>

        </div>
        {imports && <Importpopup getDatas={getData} importfn={setImports}
          content={<>
            <div className="imgbox"><img className="delconfirm" src="./images/dragndrop.png" /></div>
             
             <p className="pcnt">Drag and drp csv file to upload</p>
           <div className="btnwrapper" ><button className="cancel" onClick={toggleImport} >
              Cancel
            </button> </div>


          </>}

        />}
        
        {isOpen && <Popup
          content={<>
            <div className="imgbox"><img className="delconfirm" src="./images/delconfirm.png" /></div>
             <div className="delcontent">Delete contacts</div>
             <p className="pcnt">So you want to delete these contacts?</p>
           <div className="btnwrapper" ><button className="cancel" onClick={togglePopup} >
              Cancel
            </button> <button className="okbut" onClick={handleDelete}>Ok</button></div>


          </>}

        />}
        <table border="1"  ><thead>
          <tr><th></th>

            <th>Name</th>
            <th>Designation</th>
            <th>Company </th>
            <th>industry</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Country</th>
            <th>Date</th>
            <th>Edit</th>
            <th>Delete</th></tr>
        </thead>

          {DisplayData}



        </table>
      </div>
    </div>

  </>)
}
export default Contacts;