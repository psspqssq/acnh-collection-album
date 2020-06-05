import styled from 'styled-components'


export const Nav = styled.div`
    display: flex; 
    justify-content: space-between;
    align-content: center;
    background-image: radial-gradient(#71f594 10%, transparent 5%),
        radial-gradient(#008a25 10%, transparent 5%),
        radial-gradient(#71f594 10%, transparent 5%);
    background-color: #32a852;
    background-position: 0 0, 50px 50px;
    background-size: 75px 75px;
`

export const Title = styled.span`
    @import url('https://fonts.googleapis.com/css2?family=Bangers&display=swap');
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    margin-left: -7%;
    font-family: 'Bangers', cursive;
    color: #fbff00;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    margin-left: 5px;
`
