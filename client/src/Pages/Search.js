import React, { Component } from 'react'

// Bootstrap 
import {
    Form,
    Container,
    
} from 'react-bootstrap'


class Search extends Component {
    constructor(props){
        super(props);

        this.state = {
            search : '',
            category : '',
            resultStatus: '',
            show: false,
            disable: false
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event){
        event.preventDefault();
        console.log(event.target.name + " :" + event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event){
        event.preventDefault();
        this.setState({
            resultStatus: this.state.search + " under the category of " + this.state.category
        })
    }


    render(){
        return(
            <div>
                <Container className='mt-2'>
                    <div className=''>
                        <Form>
                            <div className='d-flex'>
                                <div className='col-6 m-1'>
                                    <Form.Control type="text" 
                                        placeholder="Search something..."
                                        name="search"
                                        value={this.state.value}
                                        onChange = {this.handleInputChange} 
                                        disabled={this.state.disable}/>
                                </div>
                                <div className='col-2 m-1'>
                                    <select className="form-select" 
                                        value={this.state.value}
                                        name="category" 
                                        onChange={this.handleInputChange}>
                                        <option defaultValue={{label: 'choose one', value: ''}}>Choose one</option>
										<option value="username">Username</option>
										<option value="email">Email</option>
										<option value="experience">Experience</option>
									</select>
                                </div>
                                <div className='col-2 m-1'>
                                    <button type="submit" onClick={this.handleSubmit} value="Submit" className='btn btn-success'>Submit</button>
                                </div>
                            </div>
                        </Form>
                    </div>
                    <br/>
                    <h4>
                        Showing Results: <p>{this.state.resultStatus}</p>
                    </h4>
                </Container>
            </div>
        )
    }
}

export default Search;