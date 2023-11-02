import React, { Component } from 'react';
import Navigation from './Components/Navigation/Navigation';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';
import Logo from './Components/Logo/Logo';
import Rank from './Components/Rank/Rank';
import SignIn from './Components/SignIn/SignIn';
import Register from './Components/Register/Register';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import ColourPrediction from './Components/ColourPrediction/ColourPrediction';
import ImagePrediction from './Components/ImagePrediction/ImagePrediction';
// import logo from './logo.svg';
import './App.css';
import ParticleConfig from './Components/Particle/ParticleConfig';
import ParticlesBg from 'particles-bg'
// import { motion } from "framer-motion";
// import Clarifai from 'clarifai';


// In this section, we set the user authentication, user and app ID, model details, and the URL of the image we want as an input. 
const returnClarifaiRequestOptions = (imageURL) => {
  // Your PAT (Personal Access Token) can be found in the portal under Authentification
  const PAT = 'e38a81d7237e429d8802e5383856cfb6';
  // Specify the correct user_id/app_id pairings
  // Since you're making inferences outside your app's scope
  const USER_ID = 'e4gw7tjp1umvd';       
  const APP_ID = 'my-first-application';
  // Change these to whatever model and image URL you want to use
  // const MODEL_ID = 'face-detection';
  // URL of image to use. Change this to your image.
  const IMAGE_URL = imageURL;

  // Setup JSON to send to Clarifai
  const raw = JSON.stringify({
    "user_app_id": {
      "user_id": USER_ID,
      "app_id": APP_ID
    },
    "inputs": [
        {
            "data": {
                "image": {
                    "url": IMAGE_URL
                }
            }
        }
    ]
  });

  // Make a request options variable
  const requestOptions = {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Authorization': 'Key ' + PAT
    },
    body: raw
  };
  return requestOptions
  
}


// Create an initial state for when a user signs in 
const initialState = {
  input: '',
  imageURL: '',
  box: {},
  facesNumber: false,
  colour: false,
  imagePrediction: '',
  // route: 'home',
  route: 'signin',
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: ''
  }
}



// Create App class with state 
class App extends Component {
  // We need state so that the app knows the value that a user enters, remembers it and updates it if it's changed 
  constructor() {
    super();
    this.state = initialState;
  }

  // Have a function to load user data, this will include props for id, name etc...
  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    }})
  }

  // Calculate face location(s) by using Clarifai data
  calculateFaceLocation = (data) => {
    // const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const numberOfFaces = data.outputs[0].data.regions.length;
    // console.log(numberOfFaces)
    this.setState({facesNumber: numberOfFaces});
    let clarifaiFaces = [];
    let i = 0;
    let leftCols = [];
    let topRows = [];
    let rightCols = [];
    let bottomRows = [];
    while (i < numberOfFaces) {
      clarifaiFaces[i] = data.outputs[0].data.regions[i].region_info.bounding_box;
      // Now we need to do some DOM manipulation to grab the input image ('inputimage' is it's id in the FaceRecognition DOM)
      const image = document.getElementById('inputimage');
      const width = Number(image.width);
      const height = Number(image.height);
      leftCols[i] = (clarifaiFaces[i].left_col * width);
      topRows[i] = (clarifaiFaces[i].top_row * height);
      rightCols[i] = (width - (clarifaiFaces[i].right_col * width));
      bottomRows[i] = (height - (clarifaiFaces[i].bottom_row * height));
      i++;
    }

    return {
      leftCol: leftCols[0],
      topRow: topRows[0],
      rightCol: rightCols[0],
      bottomRow: bottomRows[0],
      leftCol2: leftCols[1],
      topRow2: topRows[1],
      rightCol2: rightCols[1],
      bottomRow2: bottomRows[1],
      leftCol3: leftCols[2],
      topRow3: topRows[2],
      rightCol3: rightCols[2],
      bottomRow3: bottomRows[2],
      leftCol4: leftCols[3],
      topRow4: topRows[3],
      rightCol4: rightCols[3],
      bottomRow4: bottomRows[3],
      leftCol5: leftCols[4],
      topRow5: topRows[4],
      rightCol5: rightCols[4],
      bottomRow5: bottomRows[4],
      leftCol6: leftCols[5],
      topRow6: topRows[5],
      rightCol6: rightCols[5],
      bottomRow6: bottomRows[5],
      leftCol7: leftCols[6],
      topRow7: topRows[6],
      rightCol7: rightCols[6],
      bottomRow7: bottomRows[6],
      leftCol8: leftCols[7],
      topRow8: topRows[7],
      rightCol8: rightCols[7],
      bottomRow8: bottomRows[7],
      leftCol9: leftCols[8],
      topRow9: topRows[8],
      rightCol9: rightCols[8],
      bottomRow9: bottomRows[8],
      leftCol10: leftCols[9],
      topRow10: topRows[9],
      rightCol10: rightCols[9],
      bottomRow10: bottomRows[9],
      numberOfFaces
  }
}

  calculateColour = (data) => {
    const numberOfColours = data.outputs[0].data.colors.length;
    const colours = [];
    const colourValues = [];
    const colourNames = [];
    let i = 0;
    while (i < numberOfColours) {
      colours[i] = data.outputs[0].data.colors[i].raw_hex;
      colourValues[i] = data.outputs[0].data.colors[i].value;
      colourNames[i] = data.outputs[0].data.colors[i].w3c.name;
      i++;
    }
    return {
    colours,
    colourValues,
    colourNames,
    numberOfColours
    }
  }

  predictImage = (data) => {
    const allPredictions = [];
    const allValues = [];
    let i = 0;
    while (i < 6) {
      allPredictions[i] = data.outputs[0].data.concepts[i].name;
      allValues[i] = data.outputs[0].data.concepts[i].value;
      i++
    }
    return {
      allPredictions,
      allValues,
      i
    }
  }

  displayImagePrediction = (imagePrediction) => {
    this.setState({imagePrediction: imagePrediction});
  }

  displayColour = (colour) => {
    this.setState({colour: colour});
  }

  // Display the face boxes on the image. This receives the return value from calculateFaceLocation
  displayFaceBox = (box) => {
    this.setState({box: box});
  }



  // This gives the FINAL output from the input box (the final link) which is what we want, we don't want all the individual key inputs
  onInputChange = (event) => {
    // console.log(event.target.value);
    this.setState({input: event.target.value});
  }


  // The main code that is run when a user presses the button to detect a face, for this we need to fetch the Clarifai API to use their capability
  onButtonSubmit = () => {
    this.setState({imageURL: this.state.input});
    // Fetch request to Clarifai.com
    fetch(`https://api.clarifai.com/v2/models/face-detection/versions/6dc7e46bc9124c5c8824be4822abe105/outputs`, returnClarifaiRequestOptions(this.state.input))
      // First run .json() so we can read it
      .then(response => response.json()) 
      // Now calculate face locations and display face boxes
      .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
      .catch(console.log);

    // Fetch colour data
    fetch(`https://api.clarifai.com/v2/models/color-recognition/versions/dd9458324b4b45c2be1a7ba84d27cd04/outputs`, returnClarifaiRequestOptions(this.state.input))
    .then(response => response.json())
    .then(response => this.displayColour(this.calculateColour(response))) 
    .catch(console.log);

    //Fetch image recognition data
    fetch(`https://api.clarifai.com/v2/models/general-image-recognition/versions/aa7f35c01e0642fda5cf400f543e7c40/outputs`, returnClarifaiRequestOptions(this.state.input))
    .then(response => response.json())
    .then(response => this.displayImagePrediction(this.predictImage(response)))
    // .then(response => console.log("prediction", response))
    .catch(error => console.log('error', error));

    // Now run a seperate fetch request to update the user profile (specifically entry count). This goes to the database
    // fetch('https://quiet-badlands-19276.herokuapp.com/image', {
    fetch('https://image-recognition-api-2b20815df362.herokuapp.com/image', {
    // fetch('http://localhost:3000/image', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        id: this.state.user.id
      })
    })
      .then(response => response.json())
      .then(count => {
        // Object.asign is used to assign a new entry count value to a specific user
        this.setState(Object.assign(this.state.user, { entries: count}))
      })
      .catch(console.log);
    // .catch(err => console.log(err));
  }


  // Control sign in and sign out state
  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({isSignedIn: false})
    }
    else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }


  // Render the App components
  render() {
    return (
      <div className="App">
        <ParticlesBg type="custom" config={ParticleConfig} bg={true} />
        <Navigation className="navigation" isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange}/>
        {/* We want to only show SignIn until the user has signed in. Therefore the following ternary operator is used */}
        { this.state.route === 'home' 
          ? <div className='main'>
            <Logo/>
            <Rank 
            name={this.state.user.name} 
            entries={this.state.user.entries}/>
            <ImageLinkForm 
              onInputChange={this.onInputChange} 
              onButtonSubmit={this.onButtonSubmit}
            />
            <div className="pa3">
              <FaceRecognition className="pa3" facesNumber={this.state.facesNumber} box={this.state.box} imageURL={this.state.imageURL} />
              <ColourPrediction className="pa3" imagePrediction={this.state.imagePrediction} facesNumber={this.state.facesNumber} colour={this.state.colour}/>
              <ImagePrediction imagePrediction={this.state.imagePrediction}/>
            </div>
            <p className='f6' >***This website uses a Clarifai API model for the Facial Recognition functionality. Sometimes the Clarifai Model can be down or not working as they are constantly getting updated. If not working, check the model is online at: "https://www.clarifai.com/models/face-detection"</p>
            </div>
          : (
            this.state.route === 'signin' || this.state.route === 'signout'
            ?
            <div className="signin">
              <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
            </div>
            : <div className="register">
                <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
              </div>
            ) 
      }
      </div>
    );
  }
}


export default App;

// --------  Legacy Code   -----------

// Detect user input changes
// onInputChange = (event) => {
// console.log(event.target.value);
// this.setState({input: event.target.value});
// }

//You must add your own API key here from Clarifai.
// const app = new Clarifai.App({
//   apiKey: '9b862b7fd75741b1bc802d8e070cb4de'
//  });

// NOTE: MODEL_VERSION_ID is optional, you can also call prediction with the MODEL_ID only
// https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/outputs
// this will default to the latest version_id

// The following code is to test communication with the back-end (within the App class)
// componentDidMount() {
//   fetch('http://localhost:3000/')
//     .then(response => response.json())
//     .then(console.log)
// }