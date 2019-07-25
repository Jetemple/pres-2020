import React, { Component } from 'react'
import Box from '@material-ui/core/Box';
import CandidateItem from './CandidateItem'


export class Candidates extends Component {
    render() {
        console.log(this.props.candidates)
        return this.props.candidates.map((candidate) => (
            // <h3>{candidate.Name}</h3>
            <CandidateItem candidate={candidate}/>
        ));
        // this.props.candidates.map((todo)=>(
        //     <h3>{todo.name}</h3>
        
    }
}

export default Candidates


// Candidates.propTypes = {
//     candidates: PropType.array.isRequired,
// }