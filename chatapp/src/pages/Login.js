import React, { useState, useContext } from 'react'
import firebase from '../config/firebase'
import { AuthContext } from '../AuthService'
import { Redirect } from 'react-router-dom'

// history に分割代入
const Login = (　{history}　) => {
    const [email, setEmail] = useState('')
    const [password, setpassword] =useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                history.push("/") //"/"にリダイレクト
            })
            .catch(err => {
                console.log(err)
            })
    }
    
    const user = useContext(AuthContext)

    if(user) {
        return <Redirect to="/" />
    }

    return (
        <>
            <h1>Login</h1>        
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='email'>E-mail</label>
                    <input 
                        type='email' 
                        id='email' 
                        name='email' 
                        placeholder='Email'
                        onChange={e => {
                            setEmail(e.target.value)
                            }
                        }
                    />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input 
                        type='password' 
                        id='password' 
                        name='password'
                        placeholder='password'
                        onChange={e => {
                            setpassword(e.target.value)
                            }
                        }
                    />
                </div>
                <button type='submit'>Login</button>
            </form>
        </>
    )
}

export default Login