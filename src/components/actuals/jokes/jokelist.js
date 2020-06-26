import React from 'react';
import Data from './jokesData'
import Joke from './joke';
import Grid from '@material-ui/core/Grid';


function jokeList(props){
    const jokeData = Data.map(d =>
        <Joke key={d.id} d={{ d }}>
        </Joke>
    )

    return (
        <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="flex-start">
            {jokeData}
       </Grid>
    );
}

export default jokeList;