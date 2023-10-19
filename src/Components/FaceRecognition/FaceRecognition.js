import React from 'react';
import './FaceRecognition.css';


const FaceRecognition = ({ facesNumber, imageURL, box }) => {
    return (
        <div class="">
            <div className='f3 fw4 ph0 pa2 mh0'>{facesNumber && <div className='b'>Facial Detection Results:</div>}</div>
            <div className='center na'>
                <div className='relative nt2'>
                    <img id='inputimage' alt='' src={imageURL} width='450px' height='auto'/>
                    <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
                    <div className='bounding-box' style={{top: box.topRow2, right: box.rightCol2, bottom: box.bottomRow2, left: box.leftCol2}}></div>
                    <div className='bounding-box' style={{top: box.topRow3, right: box.rightCol3, bottom: box.bottomRow3, left: box.leftCol3}}></div>
                    <div className='bounding-box' style={{top: box.topRow4, right: box.rightCol4, bottom: box.bottomRow4, left: box.leftCol4}}></div>
                    <div className='bounding-box' style={{top: box.topRow5, right: box.rightCol5, bottom: box.bottomRow5, left: box.leftCol5}}></div>
                    <div className='bounding-box' style={{top: box.topRow6, right: box.rightCol6, bottom: box.bottomRow6, left: box.leftCol6}}></div>
                    <div className='bounding-box' style={{top: box.topRow7, right: box.rightCol7, bottom: box.bottomRow7, left: box.leftCol7}}></div>
                    <div className='bounding-box' style={{top: box.topRow8, right: box.rightCol8, bottom: box.bottomRow8, left: box.leftCol8}}></div>
                    <div className='bounding-box' style={{top: box.topRow9, right: box.rightCol9, bottom: box.bottomRow9, left: box.leftCol9}}></div>
                    <div className='bounding-box' style={{top: box.topRow10, right: box.rightCol10, bottom: box.bottomRow10, left: box.leftCol10}}></div>
                </div>
            </div>
            <div className='f3 fw4 ph0 pa2 mh0'>
                {(facesNumber > 1) && <div>There are <b> {facesNumber}</b> faces in this photo</div>}
                {(facesNumber === 1) && <div>There is <b> {facesNumber}</b> face in this photo</div>}
                {(facesNumber === 0) && <div>There are no recognisable faces in this photo</div>}
                {(facesNumber === false) && <div>You have not yet entered a valid picture. Paste the address for a picture in the input box above ^^^</div>}
            </div>
        </div>
    );
}


export default FaceRecognition;

