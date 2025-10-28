import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date=" june 2022 - nov 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title"> Software Engineer </h3>
            <h4 className="vertical-timeline-element-subtitle"> Accubits inc</h4>
            <p>
             Completed a rigorous training program, acquiring deep knowledge
              and hands-on experience in Python, React.js, and JavaScript.
              Nominated for the esteemed "AccuStar" award, reflecting
              exemplary performance and dedication to the role.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date=" Feb 2024- June 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title"> Python Developer</h3>
            <h4 className="vertical-timeline-element-subtitle"> Best Automation,Pune</h4>
            <p>
             Proactively self-taught Python and key libraries like OpenCV,
              TensorFlow, and PyQt, contributing to projects like Jaguar's Latch
              Detection Machine, Visual Inspection systems, and Drishti Demo for
              visually impaired support, earning "Best Employee of the Quarter."
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date=" July 2024 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">  Mammoth Streetwears, Pune</h3>
            <h4 className="vertical-timeline-element-subtitle"> Full Stack Developer</h4>
            <p>
              Proactively self-taught MERN stack technologies, including React,
              Node.js, Express, and MongoDB. Led key projects like Mammoth
              Streetwears, Clone It Like, Urban Homz, and Eishavaram Associates,
              delivering robust and scalable web applications. Developed a React
              Native app for Mammoth Streetwears, extending the platform to
              mobile users. Demonstrated expertise in Shopify development and
              ensured seamless e-commerce experiences
            </p>
          </VerticalTimelineElement>
          {/* <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2020"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Full Stack Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Tokyo, Japan</h4>
            <p>
              Automation, Data Governance, Statistical Analysis
            </p>
          </VerticalTimelineElement> */}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;