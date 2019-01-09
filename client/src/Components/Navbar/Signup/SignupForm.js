import React from 'react'

const SignupForm = (props) => {
    const { handleChange, handleSubmit, btnText, email, password, toggleLogSign, signInButton, signIn, isAuthenticated} = props
    return (
        <form className="signup-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input  type="email" 
                        name="email"
                        value={email}
                        onChange={handleChange}
                        className="form-control" 
                        id="exampleInputEmail1" 
                        aria-describedby="emailHelp" 
                        placeholder="Enter email" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input  type="password"
                        name="password"
                        value={password}
                        onChange ={handleChange}
                        className="form-control" 
                        id="exampleInputPassword1" 
                        placeholder="Password" />
            </div>
            <div className="form-check" onClick={toggleLogSign}>
                <input type="checkbox" className="form-check-input" id="exampleCheck1" onClick={signIn}/>
                {
                    signInButton ?
                    <label className="form-check-label" htmlFor="exampleCheck2">Already have an account?</label>
                    :
                    <label className="form-check-label" htmlFor="exampleCheck1">Sign up</label>
                }
            </div>
            <button id="signup-form-button" type="submit" className="btn btn-primary">{btnText}</button>
        </form>
    )
}

export default SignupForm