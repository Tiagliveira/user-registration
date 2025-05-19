import styled from "styled-components";

export const Button = styled.button`
border: ${ (props) => props.theme === 'primary' ? 'nome' : '2px solid #ffffff'};
background: ${(props) => 
    props.theme === "primary"
     ? "linear-gradient(180deg, #00FFFF 0%,#00FF00 100%)" 
     : "transparent"};
color:#ffffff;
font-size: 16px;
padding:16px 32px;
width:fit-content;
cursor: pointer;
border-radius:30px;
box-shadow: ${ (props) => props.theme === 'primary' ? '0px 0px 5px 5px rgba(0, 255, 255, 0.6)' :'none'};


&:hover{
    opacity:0.8 ;
}

&:active{
    opacity:0.5;
}

`