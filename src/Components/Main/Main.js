import React from "react";
import { Containner, Title, Title2, Wrapper,Div1,Div2, Btn } from "./Main.styled";


export default function Main(){
    return(<Containner className="bgimg">
        <Wrapper>
            <Div1>
<Title>"<span>DOO SOMETHING</span> TODAY </Title>
<Title>THAT YOUR FUTURE SELF WILL </Title>
<Title>THANK YOU FOR WITH OUR</Title>
<Title>CUSTOMISED ONLINE <span>COACHING PACKAGES</span>" </Title>
</Div1>
<Div2>

    <Title2><span>✓</span> Bodybuilding Prep Coach</Title2>
    <Title2><span>✓</span> Body Transformation Coach</Title2>
    <Title2><span>✓</span> Photoshoot Prep Coach</Title2>
{/* </div> */}
{/* <div> */}
    <a href="https://verifyhub.net/98a0a14" target="_blank" rel="noreferrer"><Btn>APPLY TO JOIN THE TEAM</Btn></a>
    
</Div2>
</Wrapper>
    </Containner>
        
    )
}