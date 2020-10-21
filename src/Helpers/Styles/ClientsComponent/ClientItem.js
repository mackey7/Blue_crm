import Styled from 'styled-components'

export const Row = Styled.div`
display:flex;
`

export const Wrapper = Styled.div`
/* background:#fff; */
padding:20px;
margin-top:30px;
`


export const Table = Styled.table`
        width:100%;
   
                 
     thead{
               min-width:100%;
                  display: flex;
          tr{
                 display: flex;
                  justify-content:space-around;
                 margin-top:10px;
                 min-width:100%;
                 border:1px solid #000;
                 background:#fff;
                 font-weight:500;
          }     
     }
      
        tbody{
         display: block;
              width:100%;
                tr{
                 display: flex;
                  justify-content:space-around;
                 margin-top:10px;
                 min-width:100%;
                 border:1px solid #000;
                 background:#fff;
                 font-weight:500;

                 &:nth-child(odd){
background: #CCC

                 }
                                td{
                                display: block;
                                padding:10px;
                                }
                }
                
    
}
`
export const DeleteBtn = Styled.i`
cursor:pointer;
color:red;
font-size:24px;
`

