import React, { Component } from 'react'
import Student from './Student';
import { connect } from 'react-redux';

class StudentLists extends Component {
    render() {
        const allStudents = this.props.studentFromStore;
        return (
            <div className='row'>
                {
                    allStudents.map(item => {
                        return <div className='coll-12 col-sm-6 col-lg-4 mt-3' key={item.id}>
                            <Student data={item} />
                        </div>
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        studentFromStore: state.students
    }

}
export default connect(mapStateToProps)(StudentLists);
