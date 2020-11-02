import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import {signInWithGoogle} from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({[name]: value})
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({
            email: '', password: ''
        })
    }

    render() {
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" name="email" value={this.state.email} handleChange={this.handleChange} label="Email" required/>
                    <FormInput type="password" name="password" value={this.state.password} handleChange={this.handleChange} label="Password" required/>
                    <div className='buttons'>
                    <Button type='submit'>Sign In</Button>
                    <Button onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</Button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;