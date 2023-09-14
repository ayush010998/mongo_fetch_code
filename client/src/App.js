import logo from './logo.svg';
import React,{useState,useEffect} from 'react';
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const[users,setUsers]=useState([])
  useEffect(()=>{
    axios.get("http:localhost:3020/getUsers")
    .then((users)=>{
      setUsers(users.data)

    })
    .catch((error)=>console.log(error))

  },[])
  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user)=>{
             return <tr>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
