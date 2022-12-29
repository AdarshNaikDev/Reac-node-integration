import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "./view-users.css"

function ViewUsers({usersData, showUsers, setUserName, setAge, setEditbtn,setUserId }) {

    const deleteUser = async(event)=>{
        //console.log(event)
        //console.log(event.target.id)
        let delID = event.target.id
        //console.log('http://localhost:4002/api/delete/'+delID)
        try{
            const delRes = await axios.delete('http://localhost:4002/api/delete/'+delID)
            //console.log(delRes.status)
            if(delRes.status === 200)
            {
                showUsers();
            }
            else
            {
                alert("Something went wrong check internet")
            }
        }

        catch(err)
        {
            console.log(err)
        }
        
        
    }

    const editUser = (fullName, age,id)=>{
        // console.log(fullName)
        // console.log("age",age)
        setUserName(fullName)
        setAge(age)
        setEditbtn(true)
        setUserId(id)

    }

    return (
        <>
            {
                
                usersData && usersData.map((data,id) => {
                    
                    return (
                        <div key= {id}  className='list-container'>

                            <div  className='name-data'>
                                <h3 className='header'>Name:</h3>
                                <h3 className='ans'>{data.name}</h3>
                            </div>
                            <div className='age-data'>
                                <h3 className='header'>
                                    Age:
                                </h3>
                                <h3 className='ans'>
                                    {data.age}
                                </h3>
                            </div>
                            <div className='edit-del'>
                                <button onClick={()=>editUser(data.name, data.age, data._id)} >Edit</button>
                                <button onClick={deleteUser} id={data._id} >Delete</button>
                            </div>
                        </div>

                    )
                })
            }

            

        </>
    )
}

export default ViewUsers