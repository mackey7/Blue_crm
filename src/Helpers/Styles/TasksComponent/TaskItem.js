import Styled from 'styled-components'


export const Wrapper = Styled.article`
display:flex;
background: ${props => props.isDone ? "#f86a6a" : "#fff"};

flex-direction:row;
justify-content:space-between;
align-items:center;
margin-top:40px;
input{
margin-left:50px;
}
`

export const Content = Styled.div`
margin-left:30px;

`

export const DeleteBtn = Styled.i`
margin-right:30px;
font-size:30px;
color:red;
cursor:pointer;
`

export const Row = Styled.div`
display:flex;
align-items:center;
`