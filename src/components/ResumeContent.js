import React from 'react'
import SkillBar from './UI/SkillBar'

const ResumeContent = () => {
  const codingSkillsArray = [
    { name: 'HTML & CSS', percentage: 90 },
    { name: 'JavaScript', percentage: 75 },
    { name: 'Python', percentage: 70 },
  ]

  const generalSkillsArray = [
    { name: 'Microsoft Office', percentage: 100 },
    { name: 'Google Docs', percentage: 100 },
    { name: 'Subtitle Edit', percentage: 100 },
  ]

  return (
    <div className='resume-container'>
      <h1 className='page-header'>Resume</h1>
      <div className='resume-content'>
        <div>
          <h2>Bio</h2>
          <p>
            Hello there! I am a versatile and driven professional with a passion
            for both languages and technology. With a diverse background
            spanning various domains, I have honed my skills as a Translator,
            International Insurance Expert, Data Entry Expert, English
            Transcription and Subtitle Expert. However, my true passion lies in
            the dynamic world of Front-End Development. My experience as an
            international insurance expert has allowed me to excel in
            problem-solving and customer-centric solutions, demonstrating my
            ability to handle complex tasks efficiently and effectively.
            Additionally, my proficiency in data entry has enhanced my attention
            to detail and time management skills, making me adept at handling
            large volumes of information accurately and meeting tight deadlines.
            Recently, my enthusiasm for technology has led me to embark on a
            journey into coding and front-end development. Over the last year, I
            have immersed myself in the world of JavaScript and worked on my
            skills in front-end development using the React library.
          </p>
        </div>

        <div className='resume-experiences'>
          <h2 className='resume-experiences__header'>Experiences</h2>
          <div className='experiences-container'>
            <div className='resume-experience'>
              <h3>Data Entry Expert and English Transcriber</h3>
              <span>Freelance</span>
              <span className='experience-year'>2020 - Present</span>
              <ul>
                <li>
                  Creating and organizing Excel files and Google Spreadsheet.
                </li>
                <li>Researching variety of topics.</li>
                <li>Gathering extra information to ensure better outputs.</li>
                <li>
                  Subtitling different types of videos (Movies, Documentaries,
                  Educational videos and Interviews).
                </li>
                <li>Transcription of videos with and without timestamps.</li>
              </ul>
            </div>
            <div className='resume-experience'>
              <h3>International Insurance Expert and Operator</h3>
              <span>SOS International</span>
              <span className='experience-year'>2014 - 2020</span>
              <ul>
                <li>Submitting claims in the insurance networks.</li>
                <li>Reviewing and handling the insureds' claims.</li>
                <li>
                  Correspondence with assistance companies and insurance
                  companies around the world.
                </li>
                <li>
                  Correspondence with hospitals and medical centers around the
                  world.
                </li>
                <li>Handling emergency situations.</li>
                <li>Translation of medical reports.</li>
              </ul>
            </div>
            <div className='resume-experience' style={{ borderBottom: 'none' }}>
              <h3>English-Persian Translator</h3>
              <span>Freelancer (Translation)</span>
              <span className='experience-year'>2010 - 2014</span>
              <ul>
                <li>Translation of college articles.</li>
                <li>
                  Translation and subtitling of Movies, TV shows and
                  documentaries.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='resume-courses'>
          <h2>Courses</h2>
          <h3>React - The Complete Guide 2023 (Udemy)</h3>
          <p>What I have learned:</p>
          <ul>
            <li>Writing clean code.</li>
            <li>Writing reusable components.</li>
            <li>
              Using different hooks like UseState, UseEffect, UseReducer and
              UseContext.
            </li>
            <li>Rendering data from APIs.</li>
            <li>Creating responsive web pages.</li>
            <li>
              Using external react libraries like React Icons and React Router.
            </li>
          </ul>
        </div>
        <div>
          <h2 className='skills-header'>Skills</h2>

          <div className='resume-skills'>
            <div className='skill-set'>
              {codingSkillsArray.map((skill, index) => {
                return (
                  <SkillBar
                    key={index}
                    name={skill.name}
                    percentage={skill.percentage}
                  />
                )
              })}
            </div>
            <div className='skill-set'>
              {generalSkillsArray.map((skill, index) => {
                return (
                  <SkillBar
                    key={index}
                    name={skill.name}
                    percentage={skill.percentage}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResumeContent
