// Write your Character component here
import React from "react";
import styled from "styled-components";

const StyledCharacter = styled.div`
    background-color: gray;
    opacity: 0.8;
    border: 3px solid darkgray;
    border-radius: 25px;
`

const Character = props => {
    const { character } = props;

    return (
        <StyledCharacter className="sw-characters">
            <h2>{ character.name }</h2>
            {(character.films.length > 0) ? 
                    character.films.map(film => {
                        return <p>{ film }</p>
                    })
            : ""}
        </StyledCharacter>
    )
}

export default Character;
