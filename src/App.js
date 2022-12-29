import React,{useState, useEffect} from 'react';
import axios from 'axios';
import AddUser from './AddUser';
import './App.css';
import ViewUsers from './ViewUsers';

function App() {
  //const[nameAge, setNameAge] = useState({})
  const[userName, setUserName] = useState("")
  const[age, setAge] = useState(0)
  const [usersData, setUsersData] = useState([])
  const [addbtn, setEditbtn] = useState(false)
  const[userId, setUserId] = useState("")
  
  const showUsers = async () => {

    try {
        const response = await axios('http://localhost:4002/api/getAll')
        //console.log("response Data", response.data)
        setUsersData(response.data)

    }
    catch (error) {

    }

}

useEffect(() => {
    showUsers();
}, [])

  return (
    <>
    <div>
      <AddUser userName={userName} userId={userId} setEditbtn={setEditbtn} setUserName={setUserName} age={age} setAge={setAge} showUsers={showUsers} addbtn={addbtn} setEditbtn={setEditbtn}/>
      <ViewUsers usersData={usersData} setUserId={setUserId} setUsersData={setUsersData} showUsers={showUsers} setUserName={setUserName} setAge={setAge} setEditbtn={setEditbtn}/>
    </div>
    </>
  );
}

export default App;
