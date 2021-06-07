import React from 'react';
import {AvForm, AvField} from 'availity-reactstrap-validation';
import {connect} from 'react-redux';
import {login} from '../redux/actions/LoginAction';

const Login = (props) => {
    return (
        <div className='container'> 
            <div className="row vh-100 justify-content-center align-items-center">
                <div className="col-4">
                    <div className="card">
                        <div className="card-body">
                            <AvForm onSubmit={props.login}>
                                <AvField type='text' name='phoneNumber' label="Your phone number" required errorMessage="Malumotni to'ldiring!" />

                                <AvField type='password' name='password' label='Your password' required errorMessage="Malumotni to'ldiring!" />

                                <button type='submit' className="btn btn-success btn-block">Sign in</button>
                            </AvForm>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default connect(null, {login})(Login);
