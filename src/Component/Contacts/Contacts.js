import { useState, useEffect, useContext } from "react";
import axios from "axios";
import React from "react";
import cors from "react"
import "./Contacts.css"

function Contacts() {

    var [detail,setdetail] = useState([])
    var [search,setSearch] = useState([])
    React.useEffect(() => {
        axios.get('http://localhost:4000/api/v1/contacts').then((response) => {
          setdetail(...detail,response.data.allcontact.reverse());
          console.log(response.data.allcontact)
        });
      }, []);
      
     
      
         const DisplayData=detail.map(function (info){
    
            return(
                <tbody id={info._id} key={info._id}>
                <tr><td><input type="checkbox" /></td> 
        
        <td>{info.name}</td>
        <td>{info.designation}</td>
        <td>{info.company} </td>
        <td>{info.industry}</td>
        <td>{info.email}</td>
        <td>{info.phoneNumber}</td>
        <td>{info.country}</td>
        <td>{info.date}</td>
        <td><img height="30px" width="30px" src="./images/editIcon.png"/></td>
        <td><img height="20px"  width="20px" src="./images/deleteIcon.png"/></td></tr>
        </tbody>
            )
        }
    )
    console.log(DisplayData)
      return (<>
      <div className="container">
    
      <div className="sideBar" >
        <div className="logo">
          <img src="./images/Logo.svg"/>
          
        </div>
        <div> 
        <img className="vector" src="./images/vector.png"/>
        <span className="dashboard">
          Dashboard
        </span>
        </div>
        <div className="totalcontacts">
          <img className="person" src="./images/person.png"/>
          <span className="ttlcnts">Total Contacts</span>
        </div>
    
      

      </div>
      <div className="header">
        <span className="heading"> Total Contacts</span>
        <div className="searchbar" >
        <img className="lens" src="./images/search.png" onClick={(e)=>{ setSearch(...search,document.getElementById("searchText").value)}}/> 
        <input type="text" className="searchText" id="searchText"/>
        </div>

      </div>
      <div className="contacts">

      <div className="fns">
        <button className="delete"> 
        <img className="deleteimg" src="./images/deleteButton.png"/>Delete</button>
        <button className="import">
          <img className="importimg" src="./images/import.png"/> Import</button>

      </div>
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

    { DisplayData}
        

        
      </table>
      </div>
      </div>
      
      </>)
    }    
export default Contacts;