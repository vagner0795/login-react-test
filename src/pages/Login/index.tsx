import React from 'react'
import { Container, ContainerMain, Link, Input,Title, Text, Button, FormContainer, Message } from '../../components'

export const Login = () => {
  return (
    <>
    <Container>
        <ContainerMain>
        <Title>Login</Title>
        <Text>Acesse sua conta!</Text>
        <FormContainer>
        <Input type='email' placeholder='Digite seu E-mail' required />
        <Input type='password' placeholder='Digite sua Senha' required />
        <Button type='submit'>Entrar</Button>
        </FormContainer>
        <Message>Não Possui conta? 
            <Link>Cadastre-se</Link>
             </Message>

        </ContainerMain>
    </Container>
    </>
  )
}
