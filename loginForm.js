import React, {useState} from 'react'

const LoginForm = () => {
    const [email, setEmail]   = useState("");
    const [password,setPassword]  = useState("");
    const [allEntry, setAllentry]  = useState([]);
    const submitForm = (e) => {
        e.preventDefault();
        const newEntry= { email: email, password: password };
        setAllentry([... allEntry, newEntry]);
    }
    return (
        <>
            <form action="" onSubmit={submitForm}>
              <div>
                <label htmlFor="email">Email</label>
                <input type="text" autoComplete="off" name="email" id="email"
                        value={email} onChange={(e) => { 
                            e.preventDefault();
                            setEmail(e.target.value);
                        }}/>
            </div>
            <div>
                <label htmlFor="password">Passowrd</label>
                    <input type="password" name="password" id="password" value={password}
                        onChange={(e) => {
                            e.preventDefault();
                            setPassword(e.target.value)
                        }}/>
            </div>
            <button type="submit">Login</button>


            </form>
            <div>
                {
                    allEntry.map((curr) => {
                        return (
                            <div>
                                <p>{curr.email}</p>
                                <p>{curr.password}</p>
                            </div>
                        )
                        
                    })
                }
            </div>
        </>
        
    )
}

export default LoginForm

