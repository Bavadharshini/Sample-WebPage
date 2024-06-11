import React from "react";
import dailyImg from '../image/Dailyimggg.png'
import './dailyDose.css'

export const DailyDoseComponent = () => {

    const dailyDoseArr = [
        {
            
            name: "Third eye chakra yoga pose",
            image:'DailyDose' ,
            description:
              "Headstand is one of the best yoga poses to open and activate the Third-Eye Chakra. This powerful inversion improves the functioning of the pineal, hypothalamus, and pituitary glands which are beneficial for improved brain function and the sensory organs in the head.",
            directions:[
                "Sit in a comfortable meditative posture with the spine elongated.",
                "Chant mentally the mantra 'Om' slowly with full awareness.",
                "Continue the chanting and concentrate on the chakra.",
                "You can repeat the chanting from 5 minutes to 15 minutes."

            ],
            benefits: [
              "Improves posture and balance",
              "Strengthens thighs, knees, and ankles",
              "Reduces back pain",
              "Relieves stress and improves focus",
            ],
          }
    
];
    return (
      <div className="dd" >
        {dailyDoseArr.map((item, index) => (
          <div key={index}>
            <h2>{item.name}</h2>
            <img src = {dailyImg}  alt={item.name} />
            <p>{item.description}</p>
            <h3>Directions:</h3>
            <ul>
              {item.directions.map((direction, index) => (
                <li key={index}>{direction}</li>
              ))}
            </ul>
            <h3>Benefits:</h3>
            <ul>
              {item.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  };
  
 