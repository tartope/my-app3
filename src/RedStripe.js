import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'
import { useRecoilState } from 'recoil'
import { userNameAtom } from './atoms'
import './RedStripe.scss'

export const RedStripe = () => {
    let [userName, setUserName] = useRecoilState(userNameAtom);
    let [email, setEmail] = useState("");

    const url = 'https://jsonplaceholder.typicode.com/users/1'
    // Makes a call to the JSON placeholder API when the component loads to the DOM or when the browser window gains focus (when a user clicks off the browser and clicks on the browser, React-Query calls the API automatically)
    //  Has 2 arguments ( the name for our cache associated with the data returned from the API; second is the function we wnat to use to make the call to the API)
    // Now has a third argument (calls the API for a particular user when the button is pushed
    const usersQuery = useQuery(`users/1`, async ()=> await axios.get(url), {
        refetchOnWindowFocus: false,
        enabled: false
    })

    useEffect(()=>{
        // // An object is returned so we can use the isFetched property
        // // Waits for the API call to finish; once finished the data received from the API is logged to the console
        // if(usersQuery.isFetched){
        //     // console.log(usersQuery.data)
        //     // *IMPORTANT: if this if statement is not included, the app would be caught in an infinite loop
        //     if(userName === ""){
        //         //Pulling the username from our usersQuery.data property and setting it to our component state
        //         setUserName(usersQuery.data.data.name)
        //     }
        // }

        // A better way to write the above commented code
        if(usersQuery.isFetched && userName === ""){
            console.log(usersQuery.data)
            setUserName(usersQuery.data.data.name)
            setEmail(usersQuery.data.data.email)
        }
    }, [userName,
        setEmail,
        setUserName,
        usersQuery.isFetched,
        usersQuery.data?.data.name,
        usersQuery.data?.data.email])
    

    const onHandlePush = ()=>{
        // console.log("Hello")
        // Calls the refetch() method on the usersQuery() object to call the API when the button is pushed
        usersQuery.refetch()
    }

  return (
    <div className='RedStripe'>
        <button onClick={()=> onHandlePush()}>Get User</button>
        Username: {userName} {email}
    </div>
  )
}
