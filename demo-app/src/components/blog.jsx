import React from "react";
import tada from '../image/tadasanaaa.jpg'

function Blog() {
  const yogaPoses = [
    {
      name: "Mountain Pose (Tadasana)",
      image: tada,
      description:
        "Stand tall with feet together, arms at sides, and shoulders relaxed. Engage thigh muscles and draw tailbone down to lengthen spine.",
      benefits: [
        "Improves posture and balance",
        "Strengthens thighs, knees, and ankles",
        "Reduces back pain",
        "Relieves stress and improves focus",
      ],
    },
    {
      name: "Downward-Facing Dog (Adho Mukha Svanasana)",
      image:tada,
      description:
        "Start on hands and knees, then lift hips up and back, forming an inverted V shape. Press palms into the mat and reach heels toward the ground.",
      benefits: [
        "Stretches shoulders, hamstrings, calves, and hands",
        "Strengthens arms and legs",
        "Improves digestion and relieves headaches",
        "Calms the mind and relieves mild depression",
      ],
    },
    {
      name: "Warrior I (Virabhadrasana I)",
      image: tada,
      description:
        "Step one foot back and bend front knee, keeping knee over ankle. Extend arms overhead, palms facing each other, and gaze forward.",
      benefits: [
        "Stretches chest, lungs, shoulders, neck, belly, and groins",
        "Strengthens shoulders, arms, legs, ankles, and back",
        "Improves focus, balance, and stability",
        "Energizes the entire body",
      ],
    },
    {
        name: "Child's Pose (Balasana)",
        image:tada,
        description:
          "Sit on heels with knees wide apart, then fold forward, extending arms in front and resting forehead on the mat.",
        benefits: [
          "Stretches hips, thighs, and ankles",
          "Calms the brain and relieves stress",
          "Helps relieve back and neck pain",
          "Promotes relaxation and restfulness",
        ],
      },
      {
        name: "Tree Pose (Vrksasana)",
        image: tada,
        description:
          "Shift weight onto one leg, then place opposite foot on inner thigh or calf. Bring hands to heart center or extend them overhead.",
        benefits: [
          "Improves balance and stability",
          "Strengthens thighs, calves, ankles, and spine",
          "Opens hips and stretches inner thighs",
          "Increases focus and concentration",
        ],
      },
      {
        name: "Bridge Pose (Setu Bandhasana)",
        image:tada,
        description:
          "Lie on back with knees bent and feet flat on the floor. Press into feet to lift hips toward the ceiling, keeping thighs parallel to the floor.",
        benefits: [
          "Strengthens back, glutes, and hamstrings",
          "Stretches chest, neck, and spine",
          "Improves digestion and stimulates abdominal organs",
          "Calms the brain and reduces anxiety",
        ],
      },
      {
        name: "Corpse Pose (Savasana)",
        image: tada,
        description:
          "Lie on back with arms and legs extended, palms facing up. Relax entire body, allowing muscles to soften and release tension.",
        benefits: [
          "Promotes deep relaxation and stress relief",
          "Improves sleep quality",
          "Reduces fatigue and rejuvenates the body",
          "Enhances self-awareness and mindfulness",
        ],
      },
      {
        name: "Cobra Pose (Bhujangasana)",
        image: tada,
        description:
          "Lie on belly with hands under shoulders. Press into hands to lift chest off the mat, keeping elbows close to sides and shoulders relaxed.",
        benefits: [
          "Strengthens spine, arms, and shoulders",
          "Stretches chest, lungs, shoulders, and abdomen",
          "Improves posture and opens the heart",
          "Elevates mood and reduces stress",
        ],
      },
  ];

  return (
    <div>
      <h2 style={{color: "black",textShadow:"2px 2px 4px rgba(0, 0, 0, 0.3)"}}>Yoga Blog</h2>
      {yogaPoses.map((pose, index) => (
        <div key={index} className="blog-post">
          <h3 style={{color: "green",textShadow:"2px 2px 4px rgba(0, 0, 0, 0.3)"}}>{pose.name}</h3>
          <img src={pose.image} alt={pose.name} />
          <h3>Directions:</h3>
          <p>{pose.description}</p>
          <h3>Benefits:</h3>
          <ul>
            {pose.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Blog;
