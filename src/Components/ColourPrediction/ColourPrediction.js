import React from "react";
import "./ColourPrediction.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  // Title,
  // ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJS.register(
  // ArcElement,
  CategoryScale,
  LinearScale,
  // Title,
  Tooltip,
  Legend
);

const ColourPrediction = ({ colour }) => {
  const pieData = {
    labels: colour.colourNames,
    datasets: [
      {
        // data: colour.colourValues.map(x => x*100),
        data: colour.colourValues,
        backgroundColor: colour.colours,
      },
    ],
  };

  let resultDisplayArray = [];
  for (let i = 0; i < colour.numberOfColours; i++) {
    resultDisplayArray[i] = {
      key: i, 
      text1: `${(colour.colourValues[i] * 100).toFixed(2)}%`,
      text2: " of the photo is ",
      text3: colour.colourNames[i]
    };
  }

  const pieOptions = {};

  return (
    <div >
      <div key={1}>
        {colour.colourValues ? (
          <div className="bt bb">
            <p className="f3 b">Colour Detection Results:</p>
            {/* {print(resultDisplayArray.text)} */}
            <div className="pb3">
              {resultDisplayArray.map((item) => (
                <div className="f4 pb1" key={item.key}><b>{item.text1}</b>{item.text2}<b>{item.text3}</b></div>
              ))}
            </div>
            <div id="container" className="pie-container mb3">
              <Pie className="pie" data={pieData} options={pieOptions}></Pie>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

// console.log("facesnumber1", this.state.facesNumber)

// const Information = (facesNumber) => {
//     const Information2 = (
//         () => {
//           if (facesNumber.facesNumber > 0) {
//             return <div className='f3 fw4 ph0 pa2 mh0'>There are <b> {facesNumber.facesNumber}</b> faces in this photo</div>
//           } else if (facesNumber.facesNumber = 0) {
//             return <div className='f3 fw4 ph0 pa2 mh0'>There is <b> {facesNumber.facesNumber}</b> face in this photo</div>
//           } else {
//             return <div className='f3 fw4 ph0 pa2 mh0'>There are <b> {facesNumber.facesNumber}</b> faces in this photo</div>
//           }
//           ;
//         })() ;
//     console.log("facesnumber2", facesNumber.facesNumber)
//     return (
//         <div>
//             Hello
//             {Information2}
//         </div>
//     );
// }

export default ColourPrediction;
