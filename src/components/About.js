import React from "react"

import { Container, Title, Button } from "./common"

import profile from "../assets/image/profile.jpg"

import "./about.css"

const About = () => {
  return (
    <div id="about" className="about-area">
      <Container>
        <Title side="right" title="About Me" />
        <div className="about">
          <div className="about-details">
            <p>
              Hello! I'm Shakhawat Hossain, …and I work for Cyber Security Research. A passionate Security Researcher, Creator, and Technology Enthusiast.<br/>People find me enthusiastic and friendly. Sharing knowledge is my passion. My biggest strength is – I am a quick self-learner. Computer technology is my play ground. I’m a programmer and content creator. I am compassionate, I can put myself in others’ shoes. Having this ability gave me a whole new perspective to look at things.
            </p>
            <div className="about-action">
              <Button
                link="https://blog.shakhawat.me"
                target="_blank"
                bgColor="#00cf5d"
                title="Blog"
              />
              <Button clickEvent link="#skill" ml="15px" title="My Skills" />
            </div>
          </div>
          <div className="about-image">
            <div className="image">
              <img alt="profile" src={profile} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export { About }
