import React from 'react';
import styled from 'styled-components';
import {Card} from "../card/card.component";


/* Notes
- Our grid only spans 85% of the view width | '-----' |
- When making a grid, we need to specify that the display type is of grid
- After that we can configure the grid:
    - grid-template-columns lets us specify how many columns and the space they should take.
        - 1 fr means it will take 1 fraction of the available space (equally space columns)
    - grid-gap lets us specify the distance between the rows
*/
const CardGrid = styled.div`
  width: 85vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
`

/*
* This component is responsible for displaying/listing the card components.
* */
export const CardList = ({monsters}) => {
    return (
        <CardGrid>
            {monsters.map(monster =>
                <Card key={monster.id} monster={monster} />
            )}
        </CardGrid>
    );
};
