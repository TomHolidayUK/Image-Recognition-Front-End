// import React from 'react';
import './ImageLinkForm.css';
import React, { useState } from "react";


const ImageLinkForm = ({ onInputChange, onButtonSubmit  }) => {

    const [copied, setCopied] = useState(false);
    const [copied2, setCopied2] = useState(false);
    const [copied3, setCopied3] = useState(false);
    const [copied4, setCopied4] = useState(false);
    const [copied5, setCopied5] = useState(false);
    const [copied6, setCopied6] = useState(false);
  
    const link1 = "https://s3.amazonaws.com/samples.clarifai.com/featured-models/face-crowd-at-concert.jpg?t=1684797475346";
    const link2 = "https://s3.amazonaws.com/samples.clarifai.com/featured-models/face-three-men-sitting-in-van.jpg?t=1684797475346"
    const link3 = 'https://s3.amazonaws.com/samples.clarifai.com/featured-models/face-little-girl-boy-standing-outside.jpg?t=1684797475346'
    const link4 = 'https://s3.amazonaws.com/samples.clarifai.com/featured-models/face-family-with-light-blue-shirts.jpg?t=1684797475346'
    const link5 = 'https://s3.amazonaws.com/samples.clarifai.com/featured-models/face-arfrican-american-man-woman-laughing.jpg?t=1684797475346'
    const link6 = 'https://media.istockphoto.com/id/184276818/photo/red-apple.jpg?s=612x612&w=0&k=20&c=NvO-bLsG0DJ_7Ii8SSVoKLurzjmV0Qi4eGfn6nW3l5w='
    // const link7 = 'https://as1.ftcdn.net/v2/jpg/02/22/85/16/1000_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg'

    const handleCopyClick1 = () => {
        
      // Create a temporary textarea element
      const textArea = document.createElement("textarea");
      textArea.value = link1;
  
      // Append the textarea to the document
      document.body.appendChild(textArea);
  
      // Select the text in the textarea
      textArea.select();
  
      // Copy the selected text to the clipboard
      document.execCommand("copy");
  
      // Remove the textarea
      document.body.removeChild(textArea);
  
      // Set the copied state to true
      setCopied(true);
      setCopied2(false);
      setCopied3(false);
      setCopied4(false);
      setCopied5(false);
      setCopied6(false);

    };

    const handleCopyClick2 = () => {
        const textArea = document.createElement("textarea");
        textArea.value = link2;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
        setCopied(false);
        setCopied2(true);
        setCopied3(false);
        setCopied4(false);
        setCopied5(false);
        setCopied6(false);
      };

    const handleCopyClick3 = () => {
    const textArea = document.createElement("textarea");
    textArea.value = link3;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    setCopied(false);
    setCopied2(false);
    setCopied3(true);
    setCopied4(false);
    setCopied5(false);
    setCopied6(false);
    };

    const handleCopyClick4 = () => {
    const textArea = document.createElement("textarea");
    textArea.value = link4;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    setCopied(false);
    setCopied2(false);
    setCopied3(false);
    setCopied4(true);
    setCopied5(false);
    setCopied6(false);
    };

    const handleCopyClick5 = () => {
    const textArea = document.createElement("textarea");
    textArea.value = link5;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    setCopied(false);
    setCopied2(false);
    setCopied3(false);
    setCopied4(false);
    setCopied5(true);
    setCopied6(false);
    };

    // const handleCopyClick6 = () => {
    // const textArea = document.createElement("textarea");
    // textArea.value = link6;
    // document.body.appendChild(textArea);
    // textArea.select();
    // document.execCommand("copy");
    // document.body.removeChild(textArea);
    // setCopied(false);
    // setCopied2(false);
    // setCopied3(false);
    // setCopied4(false);
    // setCopied5(false);
    // setCopied6(true);
    // };

    return (
        <div className="main2" style={{display: 'flex', flexDirection: 'column',  justifyContent: 'center', alignItems: 'center', width: '100%',}}>
            <p className="display-linebreak f3">Give it a try with one of the following image links or a link of your own:</p>
            <div className="button-container">
                <div className="button-container2">
                    <button onClick={handleCopyClick1}>Copy Link 1 to Clipboard</button>
                    {copied && <p>Link 1 Copied!</p>}
                </div>
                <div className="button-container2">
                    <button onClick={handleCopyClick2}>Copy Link 2 to Clipboard</button>
                    {copied2 && <p>Link 2 Copied!</p>}
                </div>
                <div className="button-container2">
                    <button onClick={handleCopyClick3}>Copy Link 3 to Clipboard</button>
                    {copied3 && <p>Link 3 Copied!</p>}
                </div>
                <div className="button-container2">
                    <button onClick={handleCopyClick4}>Copy Link 4 to Clipboard</button>
                    {copied4 && <p>Link 4 Copied!</p>}
                </div>
                <div className="button-container2">
                    <button onClick={handleCopyClick5}>Copy Link 5 to Clipboard</button>
                    {copied5 && <p>Link 5 Copied!</p>}
                </div>
                {/* <div className="button-container2">
                    <button onClick={handleCopyClick6}>Copy Link 6 to Clipboard</button>
                    {copied6 && <p>Link 6 Copied!</p>}
                </div> */}
            </div>
            <div className='detect-button-container'>
                <input className='' type='text' onChange={onInputChange}/>
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
}


export default ImageLinkForm;