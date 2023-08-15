import styled from "styled-components";


export const Container = styled.div`
width: 100vw;
height: 100vh;
background-color: #111111;
display: flex;
justify-content: center;
align-items: center;

`

export const ContainerMain = styled.div`
width: 500px;
height: 500px;
padding: 20px;
background-color: #e4e4e4;
border-radius: 10px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

`

export const Input = styled.input`
width: 100%;
height: 40px;
padding: 20px;
background-color: #e4e4e4;
border: 1px solid #000000;
border-radius: 10px;
outline: none;
display: flex;
justify-content: center;
margin-bottom: 20px;

`

export const Title = styled.h1`
font-size: 30px;
margin: 5px 0;

`

export const Text = styled.p`
font-size: 20px;
margin: 0px 0 50px;


`

export const Button = styled.button`
width: 160px;
height: 50px;
background-color: #0097ff;
border: none;
border-radius: 10px;
font-size: 20px;
font-weight: 600;
color: #ffffff;
cursor: pointer;

&:hover{
    opacity: .8;
}

&:active{
    opacity: .6;
}


`

export const FormContainer = styled.form`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;

`

export const Message = styled.p`
font-size: 16px;
margin-top: 30px;

`

export const Link = styled.a`
font-size: 16px;
margin-left: 10px;
text-decoration: underline;
cursor: pointer;
`






