import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards1.js";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about1.jpg";
import laptopImg1 from "../../Assets/owner.jpeg";
import why from "../../Assets/why.jpeg";
import msg1 from "../../Assets/msg1.jpg";
import msg2 from "../../Assets/msg2.jpg";
import Card from "react-bootstrap/Card";
import azadLogo from "../../Assets/azadLogo.png";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Row className="mb-4">
        <Col md={12} className="d-flex align-items-center">
            <img src={azadLogo} alt="Azad ICS Academy Logo" style={{ width: '80px', height: '80px' }} />
            <h2 className="ml-2">Azad ICS Academy</h2>
        </Col>
    </Row>
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
        <h1 style={{ fontSize: "2.1em", paddingBottom: "20px"}}>
              ABOUT <strong className="purple">US</strong>
            </h1>
            <p style={{ textAlign: "center",fontSize:"1.5em" }}>
            <span className="purple">Civil Services Examination  </span> is the most coveted Examination in the country.
            <br></br><br></br></p>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            
            
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid"style={{ width: '90%', height: 'auto'}}/>
            <img src={laptopImg1} alt="about" style={{ width: '60%', height: 'auto' , marginTop: '100px'}} />

          </Col>
        </Row>
        <hr></hr>
        <h1 className="project-heading">
        Founders message<strong className="purple"></strong>
        </h1>
        <Card className="quote-card-view">
        <Card.Body>
        <p style={{ textAlign: "justify" , fontSize: "1.0em"}}><strong className="purple">AZAD ICS ACADEMY </strong>not only training Students to achieve their goals in the civil services Examination but it also makes the students confident, energetic and ethically motivated to play their roles efficient even after they got into civil services.
            <br />
            <br />
          </p>
          <img src={msg1} alt="about" style={{ width: '40%', height: 'auto'}} />
          </Card.Body>
          </Card>
       
          <Card className="quote-card-view">
        <Card.Body>
          <p style={{ textAlign: "justify" , fontSize: "1.0em"}}><strong className="purple"> ‘AZAD ICS ACADEMY’ </strong>providing coaching for IAS and other Karnataka State Services Examinations in small batches with personalized attention and we aim at reducing the Students work load and we cover the syllabus with the minimum possible price. Our aim is to make people of India and Karnataka synonymous to IAS/KAS and other civil Services in India & Karnataka State. We, at the ‘AZAD ICS ACADEMY’ aim to provide the best coaching for civil services and ensure students to realize their aim or target.
            <br />
            <br />
          </p>
         
          </Card.Body>
          </Card>
          <img src={msg2} alt="about" style={{ width: '20%', height: 'auto'}} />
            
        <hr></hr>
        <h1 className="project-heading">
        Why ?<strong className="purple">W‘AZAD ICS ACADEMY’?</strong>
        </h1>
        <Card className="quote-card-view">
        <Card.Body>
        <p style={{ textAlign: "justify" , fontSize: "1.0em"}}><strong className="purple">AZAD ICS ACADEMY </strong>not only training Students to achieve their goals in the civil services Examination but it also makes the students confident, energetic and ethically motivated to play their roles efficient even after they got into civil services.
            <br />
            <br />
          </p>
          <img src={why} alt="about" style={{ width: '60%', height: 'auto'}} />
          </Card.Body>
          </Card>
          <br></br>
            <hr></hr>
        <h1 className="project-heading">
          Our strategy to crack the <strong className="purple">IAS Exam </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card" >
            <ProjectCard
              
              
              title={  <strong className="purple"> Strategy for prelims US </strong>}
              description={
                <ul>
                  <li>Comprehensive understanding of UPSC pattern.</li>
                  <li>Teaching from basic to High level.</li>
                  <li>Focusing on NCERT and other Standard books.</li>
                  <li>Objective analysis of current events.</li>
                  <li>Regular class tests.</li>
                  <li>Test series with discussion.</li>
                  <li>One on one feedback.</li>
                </ul>
              }
            />
          </Col>

          <Col md={4} className="project-card" >
            <ProjectCard
              
              
              title={  <strong className="purple"> Strategy for mains </strong>}
              description={
                <ul>
                  <li>Focus on core competencies.</li>
                  <li>Comprehensive understanding and simplifying the complexity of core subjects.</li>
                  <li>Practical understandability.</li>
                  <li>Integration of current events.</li>
                  <li>Regular test series.</li>
                  <li> One on one feedback.</li>
                  <li>Classroom discussions on contemporary issues.</li>
                  <li>Imparting answer writing techniques.</li>
                </ul>
               
              }
            />
          </Col>

          <Col md={4} className="project-card" >
            <ProjectCard
              
              
              title={  <strong className="purple"> Strategy for Interview </strong>}
              description={
                <ul>
                  <li>Our mock interview sessions will help the aspirants to face the interview.</li>
                  <li>We focus on.</li>
                  <ul>  
                  <li>Communication Skills and interpersonal skills.</li>
                  <li>Personality development</li>
                  <li>Behavioral Skills.</li>
                  </ul>
                  
                  </ul>
                
               
              }
              
            />
          </Col>
          <hr></hr>          <h1 className="project-heading">
         Teaching Methodology <strong className="purple"></strong>
        </h1>
        <Card className="quote-card-view">
        <Card.Body>
        <p style={{ textAlign: "justify" , fontSize: "1.0em"}}>Azad ICS academy has evolved to provide a comprehensive student centric learning approach consisting of several stages, designed to add significant value to the learners’ understanding in an integrated manner.
            <br />
            <br />
          </p>
          </Card.Body>
          </Card>

        <Col md={4} className="project-card" >
            <ProjectCard
              
              
              title={  <strong className="purple"> Classroom instruction :</strong>}
              description="One third of the class time is devoted to lecturer and remaining is assigned for class notes for all time development which leads to prelims, mains & interview of civil services. Regular, weekend tests are conduct to evaluate the preparation progress of Students. Repeated exposure to rigors of civil services model exams would solidify the confidence levels of students to crack the IAS Exams."
            />
          </Col>

          <Col md={4} className="project-card" >
            <ProjectCard
              
              
              title={  <strong className="purple"> Guidance from external experts:</strong>}
              description="Periodical guest lecturers of eminent faculty of the respective subjects are organized. Achievers from different walks of life. IAS and other civil services officers also provide motivational guidance to students. Students are also taught by expert faculties.Students are encouraged to attend work shops and also for seminars on different topics.

              "
            />
          </Col>

          <Col md={4} className="project-card" >
            <ProjectCard
              
              
              title={  <strong className="purple"> 
              Soft skill training:</strong>}
              description="Special emphasis is given to impart soft skills to meet the needs of an aspirant of civil services and also the needs of a civil servant. This is an activity based endeavor to empower the students with effective communication skills to present himself well to others. The various activities give the Student different skills such as interpersonal relations, problem solving, decision making, leadership, team work, analytical abilities, logical reasoning etc… the soft skills training is a powerful tool to develop a strong character and a successful personality.

              "
            />
          </Col>
          <Col md={10} className="project-card" >
            <ProjectCard
              
              
              title={  <strong className="purple"> 
              Evaluation:</strong>}
              description="Student performance will be assessed by means of continuous evaluation. A panel of experts assesses the physical, psychological and emotional development of the students and counsels the students accordingly.Student performance will be assessed by means of continuous evaluation. A panel of experts assesses the physical, psychological and emotional development of the students and counsels the students accordingly.

              "
            />
          </Col>
          <hr></hr>
          <Col md={6} className="project-card" >
            <ProjectCard
              
              
              title={  <strong className="purple" style={{ textDecoration: 'underline', fontSize: '1.2em' }}>
             Unique features of ‘AZAD ICS ACADEMY’
            </strong>
              }
              description={
                <ul>
                  <li>Module based classes modeled on New pattern UPSC.</li>
                  <li>Spacious class rooms.</li>
                  <li>Discussion with eminent personalities through virtual classrooms.</li>
                  <li>A spacious cubical library.</li>
                  <li>Motivating education system and continuous monitoring.</li>
                  <li> Efficient and well trained staff.</li>
                  <li> Group interactions and feedback sessions.</li>
                  <li>Special focus on non - maths & Rural back ground Students.</li>
                  <li>Time bound completion of syllabus.</li>
                  <li>Weekly text (Sunday) followed by detailed discussion.</li>
                  <li>Lectures on topics of current relevance by expert faculties.</li>
                </ul>
                
               
              }
            />
          </Col>
          <Col md={6} className="project-card" >
            <ProjectCard
              
              
              title={  <strong className="purple" style={{ textDecoration: 'underline', fontSize: '1.2em' }}>
              Study room facility
            </strong>
              }
              description={
                <ul>
                  <li>Timings 6 AM to 11 PM.</li>
                  <li>Free news paper + wifi.</li>
                  <li>Scientifically designed ambient environment created for studying.</li>
                  <li>Separate cubical with ergonomically designed for longer hours of studies.</li>
                  <li>Individual surface light for each cubical.</li>
                  <li> Sweat proof, specially designed ergonomic chairs for long hours studies.</li>
                  <li> CCTV surveillance.</li>
                  
                </ul>
                
                
               
              }
            />
          </Col>
          
        </Row>
      

      </Container>
    </Container>
  );
}

export default About;
