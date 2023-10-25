import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="DL-Based Fake News Classifier with LSTM"
              description="Spearheaded an unmatched sentiment analysis technique rooted in deep learning, utilizing word embeddings and LSTM, leading to a remarkable surge in accuracy that outperformed established benchmarks."
              ghLink="https://github.com/Eswar-09/DL-Based Fake News Classifier with LSTM"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Footstep Audio Classification: Analyzing Human Gait Sounds"
              description="Devised and executed a notably effective FNN to distinguish individuals and associated phases via human foot audio signals, underscoring its substantial influence on classification efficacy.
              "
              ghLink="https://github.com/Eswar-09/Footstep-Audio-Classification-Analyzing-Human-Gait-Sounds"
            />
          </Col>



          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="sEMG-based Hand Movement Classification"
              description="Launched a precise ML and NN-driven algorithm for classifying hand movements, exceeding prior approaches influenced by impactful EMG-based research literature. Delivered substantial performance enhancement.
              "
              ghLink="https://github.com/Eswar-09/sEMG-based Hand Movement Classification"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Sentiment Analysis using BERT "
              description="Implemented BERT-based Sentiment Analysis achieving 90% accuracy on a 10,000-tweet dataset, effectively categorizing sentiments as positive, negative, or neutral, providing valuable public insights.Enhanced the model's performance through BERT architecture fine-tuning and hyperparameter optimization, resulting in a 5% accuracy improvement over the baseline."
              ghLink="https://github.com/Eswar-09/Sentiment-Analysis-using-BERT"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Automated Tumor Detection in Medical Images Using VHDL"
              description=" Implemented a tumor detection system that converts medical images to binary using thresholding, removing objects smaller than 100 pixels, filling holes, and eliminating border-touching objects, resulting in a 95% accuracy rate in detecting tumors."
              ghLink="https://github.com/Eswar-09/Automated-Tumor-Detection-in-Medical-Images-Using-VHDL"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Hospital Management System"
              description="A comprehensive hospital management system was formulated using C++, leveraging strong object-oriented programming (OOP) principles and careful file handling. This system intricately managed and documented records for doctors, appointments, patients, and staff, culminating in a thorough organizational framework."
              ghLink="https://github.com/Eswar-09/Hospital-Management-System"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
