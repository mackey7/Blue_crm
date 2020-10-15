import Styled from 'styled-components'

export const ComponentWrapper = Styled.nav`
width:100%;
height:40px;
padding:10px 0px;
background:#2f3242;
display:flex;
justify-content:space-between;
align-items:center;
flex-wrap:nowrap;
flex-direction:row;
margin:0;
/* position: relative; */
`

export const Logo = Styled.div`
color:#2480cd;
font-size:20px;
text-transform:uppercase;
margin-left:20px;;
font-weight:700;
`

export const UserSection = Styled.div`
display:flex;
align-items:center;
margin-left:20px;
cursor:pointer;
`

export const ArrowIcon = Styled.i`
color:#fff;
margin:0px 10px;
`

export const ManagementMenu = Styled.section`
    display:${(props) => props.open ? "flex" : "none"};
    position: absolute;
    top: 50px;
    left:0px;
    min-width:100%;
    padding:20px;
    background:#2f3242;
    align-items:center;
      @media (min-width: 468px) {
              position: relative;
              display:flex;
              top: 0px;
              left:0px;
              padding:0px;
              min-width:300px;
              max-width:100%;
              height:100%;
              
      }
`

export const ButtonAdd = Styled.button`
    background:inherit;
    border:1px solid #2480cc;
    padding:10px 30px;
    border-radius:40px;
    color:#fff;
    font-weight:700;
    cursor:pointer;
i{
    margin-left:10px;
    color:#2480cc;
  
}
:hover{
  background:#404359
}
`

export const ButtonSearch = Styled.i`
color:#fff;
margin:0px 20px;
cursor:pointer;
:hover{
  color:#dddee6
}
`
export const ButtonNotific = Styled.i`
color:#fff;
margin:0px 20px;
cursor:pointer;
:hover{
  color:#dddee6
}
`

export const UserIcon = Styled.img`
width:30px;
border-radius:50%;

`


export const Hamburger = Styled.div`
   position: absolute;
  top: 5px;;
  right:20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;

    background:#fff;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }

@media(min-width: 468px) {
  display: none;
}

`

export const UserSectionMenu = Styled.ul`
    display: ${({ MenuOpen }) => MenuOpen ? 'flex' : 'none'};
    width:200px;
    height:100%;

    position: absolute;
    border:1px solid #fff;
    top: 60px;
    right:40px;
    background:#3a3e52;
    border-radius:5px;
    -webkit-box-shadow: 10px 10px 5px 0px rgba(255,255,255,1);
    -moz-box-shadow: 10px 10px 5px 0px rgba(255,255,255,1);
    box-shadow: 10px 10px 5px 0px rgba(255,255,255,1);
    flex-direction:column;
    color:#fff;
    padding:20px 5px;
    list-style:none;
    
@media(min-width: 468px) {
    width:200px;
    height:100%;
z-index:9999;
    position: absolute;
    top: 30px;
    right:10px;
    border-radius:5px;
    padding:20px 5px;

}
`

export const NotificationMenu = Styled.ul`
    display: ${({ NotoficationOpen }) => NotoficationOpen ? 'flex' : 'none'};
    width:200px;
    height:100%;
    position: absolute;
    border:1px solid #fff;
    top: 60px;
    right:40px;
    background:#3a3e52;
    border-radius:5px;
    -webkit-box-shadow: 10px 10px 5px 0px rgba(255,255,255,1);
    -moz-box-shadow: 10px 10px 5px 0px rgba(255,255,255,1);
    box-shadow: 10px 10px 5px 0px rgba(255,255,255,1);
    flex-direction:column;
    color:#fff;
    padding:20px 5px;
    list-style:none;
    
@media(min-width: 468px) {
    width:200px;
    height:100%;

    position: absolute;
    top: 30px;
    right:10px;
    border-radius:5px;
    padding:20px 5px;

}
`

export const SearchInput = Styled.input`
   display: ${({ SearchOpen }) => SearchOpen ? 'flex' : 'none'};
   border:0px;
   padding:5px;
   position: absolute;
    top: 67px;
    left:0px;
    border:1px solid #000;
    border-radius:5px;
    width:100%;
@media(min-width: 468px) {
    width:200px;
    height:100%;
    border:0px;
    position: relative;
    top: 0px;
    border-radius:none;

}
`