import React from 'react'
import {Avatar, Username, Container} from './styles'

export const UserInformation = props =>
(
    <Container>
        <Avatar className="UserInformation__Avatar" src={props.avatar} alt="User avatar"></Avatar>
        <Username className="UserInformation__Name">{props.name}</Username>
    </Container>
)