import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function LoginPage() {

    // TODO: Add in google login service

    // Set state variables to use
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ error, setError ] = useState(null);

    // Form submission authorization and correctness logic
    const handleSubmit = (event) => {
        
        // Don't reset page after each submit
        event.preventDefault();

        // TODO: Plug up this to check out credentials from DB

        // Ensure no fields are empty, if so then 
        if (username == "" || password == "") {
            setError("Fields must not be empty");

        } else if (username != "butt" || password != "butt") {
            setError("Username and password must be 'butt'.");
            
        // } else if (db_password != password) {
        //      setError("Incorrect password.");
        // }
        
        } else {
            setError(null);
            alert("You did it!");
        }
    };


  return (
    <div className="login-page">
        <h1>Login Page</h1>
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
            </label>
            <label>
                Password:
                <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
            </label>
            <Link to="FIX ME">Forgot password?</Link>
            <button type="submit">Login</button>
            <p className="link-text">
                Don't have an account? 
                <Link to="FIX ME">Sign up</Link>
                here!
            </p>
            {error && <p className="form-error-msg">{error}</p>}
        </form>
    </div>
  );
}

export default LoginPage;