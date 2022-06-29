import React from "react";
import { Div1,Div2, Wrapper,Img, Title,Btn } from "./Section2.styled";
import img from "../Images/Ultraflex.jpeg"

export default function Section2(){
    return(
        <Wrapper>
<Div1>
<Img src={img} alt=""/>
</Div1>

<Div2>
<Title><span>WHAT IS PRO PHYSIQUES?</span></Title>
<Title>✓ An <span>elite coaching team </span> who want to transform under Charlie Garforth's exclusive online coaching services.</Title>
<Title>✓ A <span>bespoke online coaching service</span> tailored to your specific goals, time frame & lifestyle.</Title>
<Title>✓ Not just <span> a bodybuilding coach </span> we help every day people transform too. As long as you have the drive and determination to succeed. </Title>
<a href="https://verifyhub.net/98a0a14" target="_blank" rel="noreferrer"><Btn className="btn">EXCLUSIVE TRAINING COURSE FOR FREE</Btn></a>
</Div2>

        </Wrapper>
    )
}