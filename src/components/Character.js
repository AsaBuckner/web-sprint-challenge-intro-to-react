// Write your Character component here

import React, {useEffect, useState} from "react"
import styled from "styled-components"
import axios from "axios"
import "../App.css";





const Character = () => {

const [characterData, setCharacterData] = useState(null)
const [openDiv, setDiv] = useState(false)

    useEffect(() => {
        axios.get('https://swapi.dev/api/people/')
        .then((res)=>{
            setCharacterData(res.data)
            console.log(res.data)
            
        })
        
    }, [])

    const toggleOpen = () => {
        setDiv(!openDiv)
        console.log(openDiv)
    }

    const Wrapper = styled.div`
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-content: center;
    background: white
    `;


    const DetailsWrapper = styled.div`

    display: flex
    background : white
    `;

    return (
    <div>
        {characterData.map((character)=>{
        return(
            <div>
            <Wrapper>
                {character.name}
            </Wrapper>
          <DetailsWrapper>
          <p>{character.birth_year}</p>
          <p>{character.gender}</p>
          <p>{character.height}</p>
          <p>{character.mass}</p>
          <p>{character.skin_color}</p>
          <p>{character.hair_color}</p>
          <p>{character.eye_color}</p>
          </DetailsWrapper>
        </div>
        )
        })}
    </div>
    )
    }





export default Character