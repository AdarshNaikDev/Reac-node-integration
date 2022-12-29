import React, { useState, useRef} from "react";
import axios from "axios";

const AddUser = ({ userName,setUserName,userId, age,setAge, showUsers , addbtn, setEditbtn}) => {

    

    const adduserHandler = async (event) => {
        
        try {
            const newUser = {
                name: userName,
                age: age
            }
            console.log(newUser)
            const result = await axios.post('http://localhost:4002/api/post', newUser)
            showUsers();
            setUserName("")
            setAge('')
            
        }
        catch (error) {
            console.log(error)
        }

    }

    const editUserHandler = async()=>{
        try{
            let updatedUserObj = {
                name:userName,
                age:age
            }
            const apiResponse = await axios.patch('http://localhost:4002/api/update/'+userId, updatedUserObj)
            console.log(apiResponse.status)
            //if(apiResponse === 200)
            
                showUsers();
                setUserName("")
                setAge('')
                setEditbtn(false)
            
        }
        catch(error)
        {
            console.log(error)
        }
    }


    return (
        <>
            <header>
                
                <div className="input-container">
                    <div className="inputs">
                        <input type="text" className="input-style" placeholder="Enter your Name" value={userName}
                            onChange={(event) => setUserName(event.target.value)} />
                        <input type="number" className="input-style" placeholder="Enter your Age" value={age}
                            onChange={(event)=> setAge(event.target.value)} />
                    </div>

                    <div className="addbtn">
                        {addbtn? <button onClick={editUserHandler} >Update</button>: <button onClick={adduserHandler}>Add User</button>}
                        
                        
                    </div>

                </div>
 
            </header>
        </>
    )
}

export default AddUser;