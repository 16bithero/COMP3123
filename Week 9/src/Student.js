import React, {Fragment} from 'react'

class Student extends React.Component {

    constructor(props)
    {
        super(props)
    }

    state = {
        student_name : "Renzzi Adorador",
        student_id : 101277841
    }

    render()
    {
        return (
        <>
        <h3>{this.state.student_id}</h3>
        <h4>{this.state.student_name}</h4>
        </>
        
        );
    }
}

export default Student;
