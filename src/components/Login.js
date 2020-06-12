import React from 'react';

function Login(){

    return (
        <form method="POST">
            <label for="username">Username</label> <br></br>
            <input type="text" name="username" id="username" ></input>
            <br></br><br></br>
            <label for="password">Senha</label> <br></br>
            <input type="password" name="password" id="password" ></input>

            <br></br><br></br>
            <submit>Login</submit>
        </form>
    );
}

export default Login; 