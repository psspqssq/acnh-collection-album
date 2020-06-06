import React, {useState} from 'react'
import {Avatar, Username, Container} from './styles'

export const UserInformation = props =>{
   const [url, setUrl] = useState(props.avatar)
   function handleChange(e) {
       setUrl(e.target.value);
   }
return (
    <Container>
        <Avatar src={url} alt="User avatar"></Avatar>
        <Username>{props.name}</Username>
        <input onChange={handleChange}></input>
    </Container>
)
}