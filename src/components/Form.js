import React, { Component } from "react";

import axios from "axios";

class Form extends Component {
    constructor(props) {
        super(props);
            this.state = {
            fname: '',
            lname: '',
            email: '',
            phone: '',
            location: '',
            interes: '',
            isSending: false,
            isError: false
        };
  
        this.handleChange = this.handleChange.bind(this);
        // this.handleOptionChange = this.handleOptionChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(e) {
      this.setState({
        [e.target.name]: e.target.value
      });
    }
  
    // handleOptionChange(e) {
    //   this.setState({
    //     tags: e.target.value
    //   });
    // }
  
    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            isSending: true
        });
  
        // console.log(this.state);
  
        axios
            .post(
                'https://agrovialfernandez.com/backend/api',
                this.state
            )
            .then((response) => {
                console.log(response);
                this.setState({
                    isSending: false,
                });
                if (response.status === 200) {
                    this.setState({
                        fname: '',
                        lname: '',
                        email: '',
                        phone: '',
                        location: '',
                        interes: '',
                        isError: false
                    });
                    window.location.assign(process.env.PUBLIC_URL + '/gracias');
                }
                if (response.status === 400) {
                }
            })
            .catch((error) => {
                console.log(error);
                this.setState({
                    isError: true
                });
            });
    }
  
    render() {
      const isSending = this.state.isSending;
      return (
            <div>
                <form id="form_send_lead" onSubmit={this.handleSubmit}>
                    <div className='card'>
                        <div className='card-body'>
                            <h5>Completa tus datos aquí</h5>
                            <div className='form-group'>
                                <label htmlFor=''>Nombre</label>
                                <input
                                    type='text'
                                    name='fname'
                                    className='form-control'
                                    onChange={this.handleChange}
                                    required
                                />
                            </div>
                            <div className='form-group'>
                                <label htmlFor=''>Apellido</label>
                                <input
                                    type='text'
                                    name='lname'
                                    className='form-control'
                                    onChange={this.handleChange}
                                    required
                                />
                            </div>
                            <div className='form-group'>
                                <label htmlFor=''>Teléfono</label>
                                <input
                                    type='tel'
                                    name='phone'
                                    className='form-control'
                                    onChange={this.handleChange}
                                    required
                                />
                            </div>
                            <div className='form-group'>
                                <label htmlFor=''>Email</label>
                                <input
                                    type='email'
                                    name='email'
                                    className='form-control'
                                    onChange={this.handleChange}
                                    required
                                />
                            </div>
                            <div className='form-group mb-2'>
                                <label htmlFor=''>Localidad</label>
                                <input
                                    type='text'
                                    name='location'
                                    className='form-control'
                                    onChange={this.handleChange}
                                    required
                                />
                            </div>
                            <label className="mb-3 mt-3">¿Cuál es tu tema de interés?</label>
                            <div>
                                <div className="form-check-inline mb-2">
                                    <label className="form-check-label">
                                    <input type="radio" className="form-check-input" 
                                        name="interes" 
                                        value="autoelevadores"
                                        onChange={this.handleChange} 
                                    />Autoelevadores
                                    </label>
                                </div>
                                <div className="form-check-inline mb-2">
                                    <label className="form-check-label">
                                            <input type="radio" className="form-check-input" 
                                            name="interes" 
                                            value="servicios"
                                            onChange={this.handleChange} 
                                    />Nuestros servicios
                                    </label>
                                </div>
                            </div>

                            <button
                                id="btn_send_form"
                                className='btn btn-primary btn-lg btn-block'
                                type='submit'
                                disabled={isSending}
                                >
                                {isSending ? 'ENVIANDO ...' : '¡CONTACTARME!'}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
  }
  
  export default Form;