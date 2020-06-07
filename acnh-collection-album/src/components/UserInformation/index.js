import React from 'react'
import {Avatar, Username, Container} from './styles'

export const UserInformation = props =>{
return (
    <Container>
        <Avatar src={props.avatar} alt="User avatar"></Avatar>
        <Username>{props.name}</Username>
    </Container>
)
}