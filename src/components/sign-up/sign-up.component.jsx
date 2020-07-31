import React from 'react'

import CustomButton from '../custom-button/custom-button.component'
import FormInput from '../form-input/form-input.component'

import {auth, createUserProfileDocument} from '../../firebase/firebase.utils'

import './sign-up.styles.scss'


class SignUp extends React.Component {
    constructor(){
        super();
        this.state = {
            displayName : '', 
            email : '',
            password : '',
            confirmPassword : ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword} = this.state;

        if(password != confirmPassword) {
            alert("passwords don't match")
            return;
        }

        try{
            const { user } = await auth.createUserWithEmailAndPassword(email,password)
            createUserProfileDocument(user, {displayName});

        }catch(error){
            console.error(error)
        }
    }

    handleChange = event =>{
        const {name, value} = event.target;
        this.setState({[name]:value})
    }

    render(){
        const { displayName, email, password, confirmPassword} = this.state;
        return(
            <div className = 'sign-up'>
                <h2>I don't have an account</h2>
                <span>Sign UP with your email and password</span>
                <form className = 'sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput 
                        handleChange={this.handleChange} 
                        type='text'
                        name='displayName'
                        value={displayName}
                        label='Display Name'
                        required
                        >
                    </FormInput>
                    <FormInput 
                        handleChange={this.handleChange} 
                        type='email'
                        name='email'
                        value={email}
                        label='Email'
                        required
                        >
                    </FormInput>
                    <FormInput 
                        handleChange={this.handleChange} 
                        type='password'
                        name='password'
                        value={password}
                        label='Password'
                        required
                        >
                    </FormInput>
                    <FormInput 
                        handleChange={this.handleChange} 
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        label='Confirm Password'
                        required
                        >
                    </FormInput>

                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignUp;
