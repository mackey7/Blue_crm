import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import { ComponentWrapper, LoginContainer, FormContainer, Logo } from '../../Helpers/Styles/Login/Login'
import app from '../../base'
import { AuthContext } from "../Auth/index";


const LoginComponent = ({ history }) => {
    const handleLogin = useCallback(
        async event => {
            event.preventDefault();
            const { email, password } = event.target.elements;
            try {
                await app
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value);
                history.push('/')
            } catch (error) {
                alert(error)
            }
        },
        [history]
    )
    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to="/" />
    }


    return (

        <ComponentWrapper>
            <Logo>BLUE CRM</Logo>
            <LoginContainer>
                <FormContainer onSubmit={handleLogin}>
                    <h2>Login In</h2>
                    <label for="email"><b>Username</b></label>

                    <input name="email" type="email" placeholder="Email" />
                    <label for="password"><b>Password</b></label>
                    <input name="password" type="password" placeholder="Password" />
                    <button type="submit" class="cancelbtn">LOG IN</button>

                </FormContainer>
                <div> Forget Password?</div>
            </LoginContainer>

        </ComponentWrapper>)


}

export default withRouter(LoginComponent);