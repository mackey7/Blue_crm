import Styled from 'styled-components'


export const Wrapper = Styled.nav`
    background:#2f3242;
    min-height:100vh;
    width:40px;
    display:flex;
    flex-direction:column;
    align-items:center;
        @media(min-width: 468px) {
             width:80px; 
        }
`

export const Icon = Styled.i`
    color:#737ba0;
    font-size:20px;
    padding:15px 5px;
    cursor:pointer;
        :active{
            color:#fff;
        }
     @media(min-width: 468px) {
            padding:30px 10px;
               font-size:30px;
        }
`