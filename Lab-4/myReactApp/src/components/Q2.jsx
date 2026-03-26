import './Q2.css'
import {useState} from 'react'
export const PasswordToggler = () =>{
    const [showPassword, setShowPassword] = useState(false)
    const [passwordValue, setPasswordValue] = useState("")
    const togglePassword = () =>{
        setShowPassword(!showPassword)
    }
    return (
        <>
        <div className='container'>
            <h1>Password Show / Hide Toggler</h1>

            <div className='card'>
            <input type={showPassword?"text":"password"} placeholder='Enter password' value={passwordValue} onChange={(e)=>setPasswordValue(e.target.value)}/>
            <button  onClick={togglePassword}>
                <img
                    src={showPassword ? "/hidden.png" : "/show.png"}
                    alt={showPassword ? "Hide password" : "Show password"}
                />
            </button>
            </div>

            <div>   
            <p>{showPassword?"Pasword is visible":"Password is hidden"}</p>
            <h1>password : {showPassword ? passwordValue : ""}</h1>
            </div>
        </div>
        </>
    )

}