import styled from "styled-components";


export const Container = styled.div`
 background-color: #181f36;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 20px;

`


export const Title = styled.h2`
    color: #ffffff;
    text-align:center;
    font-size: 45px;
    font-style: normal;
    font-weight:600;
    margin-top: 30px
`

export const ContainerUsers = styled.div`
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:20px;
    margin:40px  0;

    @media (max-width:750px) {
        grid-template-columns:1fr ;
    }
`

export const CardUsers = styled.div`
    background-color: #252d48;
    padding:16px;
    border-radius:32px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    gap:20px;
    max-width:380px;
    border: solid 1px #ffffff;
     box-shadow: 0px 0px 3px 3px rgba(246, 249, 247, 0.6);
    p{
        color:#ffffff;
        font-size:16px;
        font-weight:200;

    }

    h3{
        color:#ffffff;
        font-size:24px;
        margin-bottom:3px;
        text-transform: capitalize;
        
    }
`

export const TrashIcon = styled.img`
    cursor: pointer;
    
   
    &:hover{
        opacity: 0.8;
    }
    &:active{
        opacity:0.5;
         transform: scale(1.5);
         transition:0.5s;
    }
    padding-left:30px;
`

export const AvatarUser = styled.img`
    border-radius:50%;
    border: solid 2px #ffffff;
    box-shadow: 0px 0px 5px 5px rgba(246, 249, 247, 0.6);
    cursor: pointer;
    
    &:active{
    transform: scale(1.2);
    transition:0.5s;
    }

    height: 80px
`