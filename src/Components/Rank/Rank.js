import React from 'react';
// import './Rank.css';

const Rank = ({ name, entries }) => {
    return (
        <div>
            <div className='black f4 pa2'>(By using this model you help train the model. Add more images to increase your entry count and train the model!)</div>
            <div className="ba">
                <div className='black f3'>
                {`${name}, your current entry count is...`}
                </div>
                <div className='black f1'>
                    {entries}
                </div>
            </div>
        </div>
    );
}


export default Rank;