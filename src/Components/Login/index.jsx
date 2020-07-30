import React from 'react';
import { ComponentWrapper, LoginContainer, FormContainer, Logo } from '../../Helpers/Styles/Login/Login'
export const LoginComponent = () => {
    return (

        <ComponentWrapper>
            <Logo>BLUE CRM</Logo>
            <LoginContainer>
                <FormContainer>
                    <h2>Login In</h2>
                    <label for="email"><b>Username</b></label>
                    <input type="email" name="email" id="" placeholder="Email" />
                    <label for="password"><b>Username</b></label>
                    <input type="password" name="password" id="" placeholder="Password" />
                    <button type="button" class="cancelbtn">LOG IN</button>
                </FormContainer>
                <div> Forget Password?</div>
            </LoginContainer>

        </ComponentWrapper>)


}