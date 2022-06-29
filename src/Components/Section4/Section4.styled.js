import styled from "styled-components"

export const Containner=styled.div`
display: flex;
flex-direction: column;
/* height: 100%; */
justify-content: center;
align-items: center;
background-color: black;

`
export const Wrapper=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: black;
@media (min-width: 1024px) {
  

  flex-direction: row;
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 50px;

}

`

export const Div1=styled.div`
    border: 4px double #f9822a;
    margin: 20px;
    max-width: 600px;
`
export const Img=styled.img`
width: 100%;
    /* border: 4px double #f9822a; */

`
export const Div2=styled.div`
    border: 4px double #f9822a;
    max-width: 600px;
    margin: 20px;
`
export const Div3=styled.div`
    border: 4px double #f9822a;
    max-width: 600px;
    margin: 20px;
`
export const Div0=styled.div`
 
`

export const Title=styled.h2`
    font-family: Oswald;
    font-weight: 700;
    text-align: center;
    font-size: 46px;

`
export const Div4=styled.div`
    /* height: 15VH; */
    width: 100%;
    background-color: #f9822a   ;

`
export const Title2=styled.h2`
    font-family: Oswald;
    font-weight: 700;
    text-align: center;
    font-size: 30px;
    padding-left: 20px;
    padding-right: 20px;

`