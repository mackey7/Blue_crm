import Styled from 'styled-components'

export const ComponentWrapper = Styled.section`
    min-width:100%;
    min-height:100%;
    height:100vh;
    background:#2b2d3c;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;


`

export const Logo = Styled.h1`
    margin-bottom: 30px;
    font-size: 40px;
    letter-spacing:2px;
    color:#247fcc;
`


export const LoginContainer = Styled.div`
border: 2px solid #515461;
background:#2f3242;
border-radius: 5px;
div{
    width: 100 %;
    padding: 20px 0px;
    background:#434656;
    text-align: center;
    color:#fff;
}
`


export const FormContainer = Styled.form`
display: flex;
flex-direction: column;
width: 300px;
padding: 20px;

h2{
    color:#fff;
    text-align: center;
    text-transform: uppercase;
}
label{
    display: none;
}
input{
    margin-bottom: 20px;
    padding: 5px 8px;
    font-size: 15px;
}
button{
    border: 0px;
    background:#237eca;
    padding: 10px;
    cursor: pointer;
    font-weight: 600;
    color:#fff;
    font-size: 15px;
    :hover{
        background:#2196f3;
    }
}
`