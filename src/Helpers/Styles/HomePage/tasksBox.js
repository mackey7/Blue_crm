import Styled from 'styled-components'

export const WrapperComponent = Styled.section`
width:100%;
max-height:100%;
background:rgba(255, 255, 255, 0.7);
padding:30px;
margin:10px;
`

export const WrapperItem = Styled.div`
display:flex;
background: #fff};
flex-direction:row;
justify-content:space-between;
align-items:center;
margin-top:40px;
`

export const Row = Styled.div`
display:flex;
flex-direction:column;

h4,p{
    margin:0;
    padding:3px 10px ;
}

`
