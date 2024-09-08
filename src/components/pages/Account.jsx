import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Account = () => {

    let [userAdminData, setUserAdminData] = useState({})

    let navigate = useNavigate()

    let fetchUserAdmin = async () => {
        let result
        try {

            result = await axios({
                method: "GET",
                url: "http://localhost:5500/user/dashboard",
                headers: {
                    authorization: localStorage.getItem("myToken"),
                    content: "text/json"
                }
            })

            if (result.status != 200) {
                throw ("failed to aith from backend go back !")
            }

            console.log("welcome user")

            console.log(result.data.userData)

            setUserAdminData(result.data.userData)

        } catch (err) {
            console.log("auth failed ", err)
            navigate("/user/login")
        }
    }

    useEffect(() => {

        fetchUserAdmin()

    }, [])

    return (
        <div>
            <h1>this is account page !</h1>
            <h1>welcome !
                <span className='text-danger'>
                    {
                        userAdminData ? userAdminData.name : null
                    }
                </span>
            </h1>
        </div>
    )
}

export default Account
