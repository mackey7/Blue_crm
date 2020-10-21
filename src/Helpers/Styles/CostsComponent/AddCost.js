import Styled from 'styled-components'

export const Wrapper = Styled.section`
max-width:100%;
height:100%;
background:rgba(255, 255, 255, 0.7);
padding:30px;
display:flex;
justify-content:center;
`

export const Form = Styled.form`
label{
    display:none
}
input{
    padding:5px 10px;
    margin:0px 5px 0px 0px;
    color:#000;
    font-weight:400;
    border:0;
}

input[type="submit"]{
    cursor:pointer;
    background:#17c74d;
    color:#fff;
   
    &:hover{
        background:#14de52;

}
}

`