import React from 'react';
import './ImageLinkForm.css';

function CopyButton({ id, onClickHandler, state }) {

  return (
    <div>
        <button className='button' onClick={() => onClickHandler(id)}>Copy Link {id} to Clipboard</button>
        {state && <p>Link {id} Copied!</p>}
    </div>

  )
}

export default CopyButton;