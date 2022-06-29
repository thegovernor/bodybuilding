import styled from "styled-components"


export const Containner=styled.div`

`
export const Wrapper=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-top: 40px;
padding-bottom: 40px;

`
export const Div1=styled.div`
margin-bottom: 40px;
padding: 10px;
@media (min-width: 962px) {
  
  position: relative;
  right: 15%;
 }
 @media (min-width: 1024px) {
  
  position: relative;
  right: 9%;
 }
 @media (min-width: 1220px) {
  
  position: relative;
  right: 15%;
 }

`
export const Div2=styled.div`
margin-bottom: 40px;
padding: 10px;
@media (min-width: 962px) {
  
 position: relative;
 right: 15%;
}
`


export const Title=styled.h1`
color: white;
text-align: center;
font-family: Oswald;
    font-weight: 700;
    line-height: 1.2;
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-size: 36px;


`

export const Title2=styled.h2`
color: white;
text-align: center;
font-family: Oswald;
    font-weight: 700;
    line-height: 1.2;
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-size: 30px;

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
left: 10%;
position: relative;
font-weight: bold;
&:hover{
    border: 2px solid yellow;
    color: yellow;
    
}
@media (min-width: 962px) {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  left: 15%;
}


`