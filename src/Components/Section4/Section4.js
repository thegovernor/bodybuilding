import React from "react";
import { Containner, Div1, Div2, Div3,Img,Div0,Title,Div4,Title2,Wrapper } from "./Section4.styled";
import Img1 from "../Images/body1.jpeg"
import Img2 from "../Images/body3.jpeg"
import Img3 from "../Images/body4.jpeg"


export default function Section4(){
return(
    <Containner>
        <Div0><Title><span>SOME OF THE EXCEPTIONAL RESULTS</span></Title></Div0>
<Wrapper>
<Div1>
<Img src={Img1} alt=""/>
</Div1>
<Div2>
<Img src={Img2} alt=""/>
</Div2>
<Div3>
<Img src={Img3} alt=""/>
</Div3>
</Wrapper>
<Div4>
<Title2>EXCLUSIVE ACCESS TO MY MEMBERS-ONLY VIDEO LAB!</Title2>
</Div4>
    </Containner>
)

}