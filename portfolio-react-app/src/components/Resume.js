import React, { Component } from 'react';

class Resume extends Component {
  render() {
    var data = {
      "skillmessage": "My skills and Interests",
      "education": [
        {
          "school": "Nirma University",
          "degree": "Bachelor of Technology",
          "graduated": "May 2019",
          "description": ""
        },
        {
          "school": "Divine Buds High School",
          "degree": "12th GSEB",
          "graduated": "March 2015",
          "description": ""
        },
        {
          "school": "Nelson's English School",
          "degree": "10th GSEB",
          "graduated": "March 2013",
          "description": ""
        }
      ],
      "work": [
        {
          "company": "Tata Consultancy Services",
          "title": "Systems Engineer",
          "years": "June 2019 - Present",
          "description": ""
        },
        {
          "company": "CompuBrain",
          "title": "Web Development Intern",
          "years": "May 2016 - July 2016",
          "description": ""
        }
      ],
      "skills": [
        {
          "name": "Git",
          "level": "60%"
        },
        {
          "name": "Illustrator",
          "level": "55%"
        },
        {
          "name": "ReactJs",
          "level": "50%"
        },
        {
          "name": "CSS",
          "level": "90%"
        },
        {
          "name": "HTML5",
          "level": "80%"
        },
        {
          "name": "VueJs",
          "level": "50%"
        },
        {
          "name": "MongoDB",
          "level": "80%"
        }
      ]
    }
    if (data) {
      var skillmessage = data.skillmessage;
      var education = data.education.map(function (education) {
        return <div key={education.school}><h3>{education.school}</h3>
          <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
          <p>{education.description}</p></div>
      })
      var work = data.work.map(function (work) {
        return <div key={work.company}><h3>{work.company}</h3>
          <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
          <p>{work.description}</p>
        </div>
      })
      var skills = data.skills.map(function (skills) {
        var className = 'bar-expand ' + skills.name.toLowerCase();
        return <li key={skills.name}><span style={{ width: skills.level }} className={className}></span><em>{skills.name}</em></li>
      })
    }

    return (
      <section id="resume">



        <div className="row work">

          <div className="three columns header-col">
            <h1><span>Work Experience</span></h1>
          </div>

          <div className="nine columns main-col">
            {work}
          </div>
        </div>

        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                {education}
              </div>
            </div>
          </div>
        </div>


        <div className="row skill">

          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>

          <div className="nine columns main-col">

            <p>{skillmessage}
            </p>

            <div className="bars">
              <ul className="skills">
                {skills}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
