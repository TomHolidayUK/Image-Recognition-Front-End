import React, { useState, useRef  } from "react";
import './ImageLinkForm.css';
import CopyButton from './CopyButton';

// SIMPLE VERSION
// const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {


//     const link1 = "https://s3.amazonaws.com/samples.clarifai.com/featured-models/face-crowd-at-concert.jpg?t=1684797475346";
//     const link2 = "https://s3.amazonaws.com/samples.clarifai.com/featured-models/face-three-men-sitting-in-van.jpg?t=1684797475346"
//     const link3 = 'https://s3.amazonaws.com/samples.clarifai.com/featured-models/face-little-girl-boy-standing-outside.jpg?t=1684797475346'
//     const link4 = 'https://s3.amazonaws.com/samples.clarifai.com/featured-models/face-family-with-light-blue-shirts.jpg?t=1684797475346'
//     const link5 = 'https://s3.amazonaws.com/samples.clarifai.com/featured-models/face-arfrican-american-man-woman-laughing.jpg?t=1684797475346'
//     const link6 = 'https://as1.ftcdn.net/v2/jpg/02/22/85/16/1000_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg'
//      // const link7 = 'https://media.istockphoto.com/id/184276818/photo/red-apple.jpg?s=612x612&w=0&k=20&c=NvO-bLsG0DJ_7Ii8SSVoKLurzjmV0Qi4eGfn6nW3l5w='

//     const linkArray = [link1, link2, link3, link4, link5, link6];



//     const [state1, setState1] = useState(false);
//   const [state2, setState2] = useState(false);
//   const [state3, setState3] = useState(false);
//   const [state4, setState4] = useState(false);
//   const [state5, setState5] = useState(false);
//   const [state6, setState6] = useState(false);



//   const handleButtonClick = (id) => {
//     const textArea = document.createElement("textarea");
//     textArea.value = linkArray[id - 1];
//     document.body.appendChild(textArea);
//     textArea.select();
//     document.execCommand("copy");
//     document.body.removeChild(textArea);

//     setState1(id === 1);
//     setState2(id === 2);
//     setState3(id === 3);
//     setState4(id === 4);
//     setState5(id === 5);
//     setState6(id === 6);
//   };



//     return (
//         <div className="main2" style={{display: 'flex', flexDirection: 'column',  justifyContent: 'center', alignItems: 'center', width: '100%',}}>
//             <p className="display-linebreak f3">Give it a try with one of the following image links or a link of your own:</p>
//             <div className="button-container">
//                 <CopyButton id={1} onClickHandler={handleButtonClick} state={state1}/>
//                 <CopyButton id={2} onClickHandler={handleButtonClick} state={state2}/>
//                 <CopyButton id={3} onClickHandler={handleButtonClick} state={state3}/>
//                 <CopyButton id={4} onClickHandler={handleButtonClick} state={state4}/>
//                 <CopyButton id={5} onClickHandler={handleButtonClick} state={state5}/>
//                 <CopyButton id={6} onClickHandler={handleButtonClick} state={state6}/>
//             </div>
//             <div className='detect-button-container'>
//                 <input className='' type='text' onChange={onInputChange}/>
//                 <div className='detect-button-container2'>
//                     <button 
//                         className=''
//                         onClick={onButtonSubmit}
//                         >Detect
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }


// export default ImageLinkForm;


const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    
    const inputRef = useRef();

    const link1 = "https://s3.amazonaws.com/samples.clarifai.com/featured-models/face-crowd-at-concert.jpg?t=1684797475346";
    const link2 = "https://s3.amazonaws.com/samples.clarifai.com/featured-models/face-three-men-sitting-in-van.jpg?t=1684797475346"
    const link3 = 'https://s3.amazonaws.com/samples.clarifai.com/featured-models/face-little-girl-boy-standing-outside.jpg?t=1684797475346'
    const link4 = 'https://s3.amazonaws.com/samples.clarifai.com/featured-models/face-family-with-light-blue-shirts.jpg?t=1684797475346'
    const link5 = 'https://s3.amazonaws.com/samples.clarifai.com/featured-models/face-arfrican-american-man-woman-laughing.jpg?t=1684797475346'
    const link6 = 'https://as1.ftcdn.net/v2/jpg/02/22/85/16/1000_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg'
     // const link7 = 'https://media.istockphoto.com/id/184276818/photo/red-apple.jpg?s=612x612&w=0&k=20&c=NvO-bLsG0DJ_7Ii8SSVoKLurzjmV0Qi4eGfn6nW3l5w='

    const linkArray = [link1, link2, link3, link4, link5, link6];
  
    // Set all states as false by mapping over linkArray
    const [buttonStates, setButtonStates] = useState(linkArray.map(() => false));
  
    const handleButtonClick = (selectedState) => {
      const textArea = document.createElement("textarea");
      textArea.value = linkArray[selectedState - 1];
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
    // Clear the text input using ref
      inputRef.current.value = '';
    // This checks if the button's index is equal to the selectedState, if it is it will be true and setButtonStates will turn that button state to true 
      setButtonStates((prevState) =>
        prevState.map((_, index) => index === selectedState - 1)
      );
    };
  
    return (
      <div className="main2" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
        <p className="display-linebreak f3">Give it a try with one of the following image links or a link of your own:</p>
        <div className="button-container">
        {/* This creates different buttons with unique id's by mapping over linkArray */}
          {linkArray.map((link, index) => (
            <CopyButton key={index} id={index + 1} onClickHandler={handleButtonClick} state={buttonStates[index]} />
          ))}
        </div>
        <p className="f3" >Input your link here:</p>
        <div className='detect-button-container'>
          <input ref={inputRef} className='' type='text' onChange={onInputChange} />
          <div className='detect-button-container2'>
            <button
              className=''
              onClick={onButtonSubmit}
            >Detect
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default ImageLinkForm;