import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
//import useList from "../hooks/useList"


    return <>
        <h1>Formulario registro</h1>
        <form onSubmit={handleSubmit} className="flex flex-col">
            <label htmlFor="name">Nombre</label>
            <input type="text" id="name" name="name" value={user.name} 
                onChange={handleChange}/>

            <label htmlFor="email">Email</label>
            <input type="text" name="Email" id="email" value={user.email} 
                onChange={handleChange}/>
        
            <label htmlFor="password">Password</label>
            <input type="password" name="Password" id="password" value={user.password} 
                onChange={handleChange}/>

            <button type="submit">Registro</button>
        </form>
        {error && <p style={{color: 'red'}}>{error}</p>}
    </>


export default UserForm
