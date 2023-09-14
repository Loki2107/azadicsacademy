import React from "react";
import Card from "react-bootstrap/Card";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
           
            <b><span className="purple" style={{ fontSize: "1.5em"}}> WELCOME TO AZAD ICS ACADEMY</span></b>
            <br />
            <br></br>
            <p style={{ textAlign: "justify" , fontSize: "0.8em"}}>
            Civil Services Examination is the most coveted Examination in the country, which gives you the golden opportunity in the country to be a part of the team which driving the nation. Civil services examination expects you to be precise and focused on issues; to be analytical in a balanced way and to be capable of prompt and objective decisions in testing situations.During various stages of the Examination, whether it be preliminary, main or interview, you are assessed for these qualities, your academic qualification take a back seat in the scheme of the Examination.A level playing field is offered for all irrespective of your Qualifications. The Union public service commission through Civil Services Examination offers beautiful experience, which is not felt in any other examination of the country
            <br />
            <br />
          </p>
          <p style={{ textAlign: "center" }}>
          
            
            <b><span className="purple" style={{ fontSize: "1.5em"}}> ABOUT IAS</span></b>
            <br />
            </p>
            <p style={{ textAlign: "justify" , fontSize: "0.8em"}}>
            Civil Services Exam is considered as the top most exam in india and the candidates selected in the civil services exam enjoys the prestige & gets best perks in the whole Indian society. The UPSC conducts the civil services examination each year in order to fulfill the requirement of all over the india as well as the central civil services. The UPSC publishes the official notification in the month of February each year with all the necessary details related to the civil service exam.
            <br />
            <br />
          </p>
         

          
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
