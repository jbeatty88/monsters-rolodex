import React from 'react';
import styled from 'styled-components';

/*
* Notes:
* - Padding is where you set the size of the card
* */
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #95dada;
  border: 1px solid grey;
  border-radius: 5px;
  padding: 25px;
  cursor: pointer;
  -moz-osx-font-smoothing: grayscale;
  backface-visibility: hidden;
  transform: translateZ(0);
  transition: transform(0.25s ease-out);

  &:hover {
    transform: scale(1.05);

  }
`

const MessageMeButton = styled.button`
  background-color: whitesmoke;
  border: 1px solid grey;
  border-radius: 15px;
  
  &:hover {
	background-color: lightskyblue;
  }`

/* This component is responsible for the cards that will be displaying the actual information */
export const Card = ({monster}) => {
    return (
        <CardContainer>
            <img
                alt={"monster"}
                src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}/>
            <h2>{monster.name}</h2>
            <p>{monster.email}</p>
            <MessageMeButton>Message Me</MessageMeButton>
        </CardContainer>
    );
};
