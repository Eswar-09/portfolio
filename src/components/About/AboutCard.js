import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Geeta Sai Eswar </span>
            from <span className="purple"> Visakhapatnam, India.</span>
            <br />I currently pursuing BTech Computer Science at IIIT Sricity.
            <br />
            <br />
            I have a strong foundation in Machine Learning and
            Natural Language Processing. Throughout my studies, I
            have gained experience with a variety of
            programming languages and frameworks, including
            PyTorch, Tensorflow and Scikitlearn. In
            addition to my technical skills, I am a quick learner
            and highly motivated to succeed.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
