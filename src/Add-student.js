import React, { Component } from 'react'
import { connect } from 'react-redux'

class AddStudent extends Component {
    state = {
        name: '',
        score: ''
    }

    onChangeData = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    onSubmitStudentForm = (data, event) => {
        event.preventDefault();
        const newData = {
            id: new Date().getTime().toString(),
            name: data.name,
            score: data.score
        }
        this.props.addStudentAtStore(newData);
    }
    render() {
        return (
            <div className='row mt-3 mb-5 ms-5 me-5'>
                <div className='card col-12 col-sm-8 col-lg-6 mx-auto'></div>
                <div className='card-body'>
                    <form onSubmit={this.onSubmitStudentForm.bind(this, this.state)}>
                        <div className='block-4 text-center'>
                            <img 
                                className='img img-thumbnail mt-5 mb-3' 
                                src="https://picsum.photos/id/237/200/300"
                                alt="โลโก้"
                            />
                        </div>
                        <div className='form-group'>
                            <label>Name</label>
                            <input 
                                type="text"
                                className='form-control'
                                name="name"
                                value={this.state.name}
                                onChange={this.onChangeData}
                            />
                        </div>
                        <div className='form-group'>
                            <label>Score</label>
                            <input 
                                type="text"
                                className='form-control'
                                name="score"
                                onChange={this.onChangeData}
                            />
                        </div>
                        <div className='form-group text-center pt-3'>
                            <button
                                onClick={()=>this.props.history.push('/')}
                                className="btn btn-sm btn-outline-success mx-1"
                            >
                                ยกเลิก
                            </button>
                            <button
                                type="submit"
                                className='btn btn-sm btn-primary mx-1'
                            >
                                เพิ่ม
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addStudentAtStore: (newStudentData) => {
            return dispatch({ type: 'ADD_STUDENT', payload: newStudentData })
        }
    }
}
export default connect(null, mapDispatchToProps)(AddStudent);