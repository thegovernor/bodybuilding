import styled from "styled-components"

export const Containner=styled.div`
padding-top: 40px;
padding-bottom: 40px;
display: flex;
justify-content: center;
align-items: center;
/* height: 50vh; */
background-color: black;

`
export const Div=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
 border: 4px double #f9822a;
 width: 80%;
 padding-left: 10px;
 padding-right: 10px;


`
export const Title=styled.h2`
text-align: center;
margin-bottom: 0px;

`

export const Paragraph=styled.p`
color: white;
text-align: center;
font-weight: bold;

`
export const Btn=styled.button`
font-size: 25px;
font-weight: bold;
padding: 10px 30px;
background-color: #f9822a;
border: none;
border-radius: 5px;
margin-bottom: 30px;
cursor: pointer;
transition: 500ms;

&:hover{
    background-color: yellow;
}
`
