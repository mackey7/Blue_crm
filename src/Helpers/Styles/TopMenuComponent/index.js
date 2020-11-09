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
`

export const Logo = Styled.div`
  color:#2480cd;
  font-size:20px;
  text-transform:uppercase;
  margin-left:20px;
  font-weight:700;
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
              min-width:100px;
              max-width:100%;
              height:100%;
              
      }
`

export const UserSection = Styled.div`
  display:flex;
  align-items:center;
  margin-left:0px;
  cursor:pointer;
`

export const ArrowIcon = Styled.i`
color:#fff;
margin:0px 10px;
`

export const UserIcon = Styled.img`
width:30px;
border-radius:50%;
`


export const Hamburger = Styled.div`
  position: absolute;
  top: 10px;
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
    width:100%;
    max-height:100%;
    position: absolute;
    border:1px solid #fff;
    top: 45px;
    right:0px;
    background:#3a3e52;
    border-radius:5px;
    -webkit-box-shadow: 1px 1px 1px 0px rgba(255,255,255,1);
    -moz-box-shadow: 1px 1px 1px 0px rgba(255,255,255,1);
    box-shadow: 1px 1px 1px 0px rgba(255,255,255,1);
    flex-direction:column;
    color:#fff;
    padding:20px 5px;
    list-style:none;

    li{
      cursor:pointer;
      font-size:20px;
      text-align:center;
      &:hover{
        text-decoration:underline;
      }
    }
    
    @media(min-width: 468px) {
        width:200px;
        height:100%;
        z-index:9999;
        position: absolute;
        top: 30px;
        left:-70px;
        border-radius:5px;
        padding:5px 5px;
    }
`


