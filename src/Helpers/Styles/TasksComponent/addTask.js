import Styled from 'styled-components'



export const ContainerWrapper = Styled.section`
max-width:100%;
height:100%;
background:rgba(255, 255, 255, 0.7);
padding:30px;
`

export const Form = Styled.form`
display:flex;
flex-direction:column;
input{
    margin-bottom:15px;
}


`

export const AddBtn = Styled.input`
margin-top:30px;
border:0px;
background:#17c74d;
padding:10px;
color:#fff;
font-weight:400;
font-size:20px;
letter-spacing:1px;
cursor:pointer;
&:hover{
background:#14de52;

}
`