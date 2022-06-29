import styled from "styled-components"

export const Wrapper=styled.div`
display: flex;
flex-direction: column;
/* flex-wrap: wrap; */
background-color: black;
@media (min-width: 1024px) {
  
  flex-direction: row;

}
`
export const Div1=styled.div`
max-width: 100%;
@media (min-width: 1024px) {
  
  display: flex;
  justify-content: center;
  align-items: center;

}
`
export const Img=styled.img`
width: 100%;
@media (min-width: 1024px) {
  
  max-width: 80%;

}
`

export const Div2=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-left: 20px;
padding-right: 20px;
`
export const Title=styled.h2`
    color: white;
    text-align: center;

    text-align: center;
    font-size: 30px;
    font-family: Oswald;
    font-weight: 700;
    line-height: 1.2;
    /* margin: 5px; */
    @media (min-width: 1024px) {
  
  font-size: 25px;

}
`
export const Btn=styled.button`
background-color: inherit;
color:#f9822a;
border: 2px solid #f9822a;
padding: 10px 30px;
margin-top: 40px;
cursor: pointer;
transition: 500ms;
font-size: 18px;
font-weight: bold;
&:hover{
    border: 2px solid yellow;
    color: yellow;
}
`