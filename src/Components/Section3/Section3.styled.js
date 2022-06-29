import styled from "styled-components"

export const Containner=styled.div`

`
export const Wrapper=styled.div`

`

export const Div1=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-left: 20px;
padding-right: 20px;
padding-top: 50px;
`

export const Title2=styled.h2`
    color: white;
    text-align: center;
    font-size: 30px;
    font-family: Oswald;
    font-weight: 700;
    line-height: 1.2;;
    margin: 5px;

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