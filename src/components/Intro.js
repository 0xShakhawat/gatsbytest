import React from "react"

import { Container, Title, Button } from "./common"

import "./intro.css"

const Intro = () => {
  return (
    <div className="intro-area">
      <Title title="Follow Me" social height="320px" />
      <Container>
        <div className="intro">
          <div className="intro-text">
            <p>Hello! I am</p>
            <h1>Shakhawat Hossain</h1>
            <h3>Cyber Security Researcher</h3>
            <ul>
              <li>WebApp Pentester</li>
              <li>Programmer</li>
              <li>Content Creator</li>
            </ul>
            <div className="action">
              <Button
                link="https://blog.shakhawat.me"
                target="__blank"
                bgColor="#00cf5d"
                title="My Blog"
              />
              <Button clickEvent link="#about" ml="15px" title="About Me" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export { Intro }
