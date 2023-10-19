import React from 'react';
import './ImageLinkForm.css';

const link1 = 'https://s3.amazonaws.com/samples.clarifai.com/featured-models/face-crowd-at-concert.jpg?t=1684797475346'
const link2 = 'https://s3.amazonaws.com/samples.clarifai.com/featured-models/face-three-men-sitting-in-van.jpg?t=1684797475346'
const link3 = 'https://s3.amazonaws.com/samples.clarifai.com/featured-models/face-little-girl-boy-standing-outside.jpg?t=1684797475346'
const link4 = 'https://s3.amazonaws.com/samples.clarifai.com/featured-models/face-family-with-light-blue-shirts.jpg?t=1684797475346'
const link5 = 'https://s3.amazonaws.com/samples.clarifai.com/featured-models/face-arfrican-american-man-woman-laughing.jpg?t=1684797475346'
// const link6 = 'https://as1.ftcdn.net/v2/jpg/02/22/85/16/1000_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg'
const link7 = 'https://media.istockphoto.com/id/184276818/photo/red-apple.jpg?s=612x612&w=0&k=20&c=NvO-bLsG0DJ_7Ii8SSVoKLurzjmV0Qi4eGfn6nW3l5w='

const text = `${link1} \n ${link2} \n ${link3} \n ${link4} \n ${link5} \n ${link7}`;
const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div>
            <p className="display-linebreak f3">Give it a try with one of the following image links:</p>
            <p className="display-linebreak">{text}</p>
            <div className='center button-container'>
                <div className='form center pa4 br3 shadow-5'>
                    <input className='f4 pa2 w-70 center' type='tex' onChange={onInputChange}/>
                    <button 
                        className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
                        onClick={onButtonSubmit}
                        >Detect
                    </button>
                </div>
            </div>
        </div>
    );
}


export default ImageLinkForm;