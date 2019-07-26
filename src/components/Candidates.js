import React, { Component } from 'react'
import Box from '@material-ui/core/Box';
import CandidateItem from './CandidateItem'
import Grid from '@material-ui/core/Grid'


export class Candidates extends Component {
    render() {
        console.log(this.props.candidates)
        return this.props.candidates.map((candidate) => (
            // <h3>{candidate.Name}</h3>
            <Grid container spacing={3} >
            <CandidateItem candidate={candidate}/>
            </Grid>
        ));
        // this.props.candidates.map((todo)=>(
        //     <h3>{todo.name}</h3>
        
    }
}

export default Candidates


// Candidates.propTypes = {
//     candidates: PropType.array.isRequired,
// }