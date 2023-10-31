import React from 'react';
import { motion } from "framer-motion";
import './SignIn.css';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signInEmail: '',
            signInPassword: '',
            passwordState: 'true'
        }
    }

    onEmailChange = (event) => {
        this.setState({signInEmail: event.target.value})
    }

    onPasswordChange = (event) => {
        // console.log(this.state.signInPassword)
        this.setState({signInPassword: event.target.value})
    }

    // If the user presses enter when signing in
    handleKeyPress = (event) => {
        if (event.key === "Enter") {
        this.onSubmitSignIn()};
    };
    
    onSubmitSignIn = () => {
        // fetch('https://quiet-badlands-19276.herokuapp.com/signin', {
        fetch('https://image-recognition-api-2b20815df362.herokuapp.com/signin', {
        // fetch('http://localhost:3000/signin', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
            })
        })
            .then(response => response.json())
            .then(user => {
                if(user.id){ 
                    // Does the user exist? Did we receive a user with a property of id?
                    this.props.loadUser(user)
                    this.props.onRouteChange('home');
                    this.setState({passwordState: true})
                }
                else {
                    // If you get the password incorrect
                    this.setState({passwordState: false})
                }
            })
    }

    render() {
        return (
            <div className="flexbox">
            <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <main className="ph4 pv2 black-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                <input 
                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="email" 
                                name="email-address"  
                                id="email-address" 
                                onChange={this.onEmailChange}
                                onKeyDown={this.handleKeyPress}
                                />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                {/* <input 
                                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="password" 
                                name="password"  
                                id="password" 
                                onChange={this.onPasswordChange}
                                /> */}
                                <form >
                                    <input 
                                        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                        type="text"
                                        name="username"
                                        id="username"
                                        style={{ display: 'none' }} 
                                        autoComplete="new-password"
                                    />
                                    <input
                                        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                        type="password"
                                        name="password"
                                        id="password"
                                        onChange={this.onPasswordChange}
                                        onKeyDown={this.handleKeyPress}
                                        autoComplete="new-password"
                                    />
                                </form>
                            </div>
                        </fieldset>
                        <div className="">
                            <input 
                            onClick={this.onSubmitSignIn}
                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                            type="submit" 
                            value="Sign in" 
                            />
                        </div>
                        <div className="lh-copy mt3">
                            <p onClick={() => this.props.onRouteChange('register')} className="f6 link dim black db clickable-element">Register</p>
                        </div>
                        {/* If Password is incorrect, show error message */}
                        {(this.state.passwordState === false)? 
                            <motion.p className="b ph3" animate={{ y: 5, scale: 1}} initial={{ scale:0}}>You have entered the incorrect details, please try again</motion.p>
                            :
                            null
                        }
                    </div>
                </main>
            </article>
            <p className="f4 fw5 ph0 mh0">Welcome to this Facial Recognition Website Developed by Tom Holiday. Sign in to your account or if you don't have one, register with us!</p>
            </div>
        );
    }    
}


export default SignIn;


// const express = require('express');
// const bodyParser = require('body-parser');
// const bcrypt = require('bcrypt-nodejs');
// const cors = require('cors');


// const knex = require('knex')
// const db = knex({
//     client: 'pg',
//     connection: {
//       connectionString: process.env.DATABASE_URL,
//       ssl: {
//         rejectUnauthorized: false
//       }
//     }
//   });


// const app = express();

// app.use(bodyParser.json());
// app.use(cors());

// app.get('/', (req, res)=> {
//     res.send('slag')
// })

// app.post('/signin', (req, res) => {
//     const { email, password } = req.body;
//     // Validation - check that the user doesn't leave empty spaces
//     if (!email || !password) {
//         return res.status(400).json('Incorrect Form Submission');
//     }
//     db.select('email', 'hash').from('login')
//         .where('email', '=', email)
//         .then(data => {
//             // Check password is correct
//             const isValid = bcrypt.compareSync(password, data[0].hash);
//             if (isValid) {
//                 return db.select('*').from('users')
//                 .where('email', '=', email)
//                 .then(user => {
//                     res.json(user[0])
//                 })
//                 .catch(err => res.status(400).json('Unable to Get User'))
//             } else {
//                 res.status(400).json('Wrong Credentials')
//                 console.log("Wrong Password")
//             }
//         })
//         .catch(err => res.status(400).json('Wrong Credentials'))
// })

// app.post('/register', (req, res) => {
//     const { email, name, password } = req.body;
//     // Validation - check that the user doesn't leave empty spaces
//     if (!email || !name || !password) {
//         return res.status(400).json('Incorrect Form Submission');
//     }
//     const hash = bcrypt.hashSync(password);
//         // First we need to update 'login' via a transaction (so it is the same as 'users')
//         db.transaction(trx => {
//             trx.insert({
//                 hash: hash,
//                 email: email
//             })
//             .into('login')
//             .returning('email')
//             .then(loginEmail => {
//                 return trx('users')
//                     .returning('*')
//                     .insert({
//                         email: loginEmail[0].email,
//                         name: name,
//                         joined: new Date()
//                     })
//                     .then(user => {
//                         res.json(user[0]);
//                 })
//             })
//             .then(trx.commit)
//             .catch(trx.rollback)
//         })
//     .catch(err => res.status(400).json('Unable to Register'))
// })

// app.get('/profile/:id', (req, res) => {
//     const { id } = req.params;
//     let found = false;
//     db.select('*').from('users').where({
//         id: id
//     })
//         .then(user => {
//             if (user.length)
//                 res.json(user[0])
//             else
//                 res.status(400).json('User not Found')
//     })
//     .catch(err => res.status(400).json('Error Getting User'))
// })

// app.put('/image', (req, res) => {
//     const { id } = req.body;
//     db('users').where('id', '=', id)
//     .increment('entries', 1)
//     .returning('entries')
//     .then(entries => {
//         // res.json(entries[0]);
//         res.json(entries[0].entries);
//     })
//     .catch(err => res.status(400).json('Unable to get entries'))
// })


// // app.listen(process.env.PORT || 3000, ()=> {
// //     console.log(`app is running on port ${process.env.PORT}`); 
// // })

// app.listen(3000, ()=> {
//     console.log('app is running on port 3000'); 
// })





// // git add .
// // git commit -m "updating database"
// // git push heroku main

// // heroku logs --tail