import React from 'react';
// import ReactDOM from 'react-dom';
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';
import './Logo.css';

const text1 = "This programme uses AI to:"
const text2 = "1 - Detect Faces in your Image"
const text3 = "2 - Detect Colour in your Image"
const text4 = "3 - Predict the subject of your image"
const fulltext = `${text2} \n ${text3} \n ${text4}`;

const Logo = () => {
    return (
        <div>
            <p className="f3 display-linebreak pa0">{text1}</p>
            <p className="f3 display-linebreak pa0"><b>{fulltext}</b></p>
            <Tilt>
                <div>
                    <h1 className="Tilt-inner">
                        <img style={{paddingTop: '1px'}} alt='logo' src={brain} />
                    </h1>
                </div>
            </Tilt>
        </div>
    );
}

// ReactDOM.render(<Logo />, document.getElementById('root'));

export default Logo;