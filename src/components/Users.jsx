import { useState, useEffect } from "react"
import { addNewUser, fetchAllUsers } from "../services/userService"

const Users = () => {
    const [users, setUsers] = useState([])
    const [user, setUser] = useState("")

    async function peticion(){
        const json = await fetchAllUsers()
        setUsers(json)
        console.log('se ha llamado a peticion')
    }

    useEffect( ()=>{ 
        peticion()
    } ,  [] )

    useEffect( ()=>{
        setInterval( peticion ,   2000  )
    } ,  [] )


}