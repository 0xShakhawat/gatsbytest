import React from "react"

import { Container, Title, Button } from "./common"

import "./contact.css"

const Contact = () => {
  return (
    <div id="contact" className="contact-area">
      <Container>
        <Title side="right" title="Contact" />
        <div className="contact">
          <div className="contact-status">
            <p>
              I am interested in working with any company that thinks my skill
              will be helpful for them. If you are looking for someone like me,
              please let me know. Or you can just 'say hi' to me.
            </p>
            <div>
              <Button
                title="Contact Me"
                mt="25px"
                bgColor="#00cf5d"
                color="#fff"
                link="mailto:mail@shakhawat.me"
              />
            </div>
          </div>
          <div className="contact-details">
            <ul>
              <li>
                <h5>Email</h5>
                <p>
                  mail@shakhawat.me <span>(Recommended)</span>
                </p>
              </li>
              <li>
                <h5>Phone</h5>
                <p>
                  +880 1638 616 338 <span>(Always Available)</span>
                </p>
              </li>
              <li>
                <h5>Social</h5>
                <p>
                  Facebook/Twitter - @0xShakhawat <span>(Slow response)</span>
                </p>
              </li>
              <li>
                <h5>Address</h5>
                <p>Pabna 6600, Bangladesh</p>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  )
}

export { Contact }
