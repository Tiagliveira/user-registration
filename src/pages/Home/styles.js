import styled from "styled-components"

export const Title = styled.h2`
    color: #ffffff;
    text-align:center;
    font-size: 45px;
    font-style: normal;
    font-weight:600;
`


export const Container = styled.div`
    background-color: #181f36;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 20px;
    height: 100vh;
`


export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    max-width: 500px;

`

export const ContainerInputs = styled.div`
    display:flex;
    gap:20px;
`

export const Input = styled.input`
    border-radius:10px;
    border: 1px solid #d2dae2;
    background-color: #ffffff;
    padding: 10px 20px;
    outline: none;
    width:100%;
    border-bottom: none; 
    outline: none;
`


export const InputLabel = styled.label`
color: #ffffff;
font-size:12px;
font-weight: 500;

span{
    color:#ef4f45;
    font-weight: bold;
}

`




