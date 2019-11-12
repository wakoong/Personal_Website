import React from "react"

import image from "../../assets/images/cp-service-process.jpg"

class CP extends React.Component {
  render() {
    return (
      <div className="project-background">
        <div className="description-cp">
          <img src={image} alt="cp service process" />
          <p>
            A basketball playboard that helps coaches - mainly at youth or
            junior level - to share plays with their players. The goal of this
            app is to enhance team and individual performance by providing
            players to review plays that are otherwise only available during
            practices.
          </p>
          <br />
          <p>
            I came up with this idea for my final project for the IOS
            development course I took at U.C. Berkeley. The duration of the
            project was for five weeks and my tech specs were swift and
            firebase. After the course was over, I wanted to expand my project
            using tech specs that I was more familiar with - React.
          </p>
          <br />
          <p>
            There were many challenges even starting this project because I had
            to cover everything from UI/UX design to frontend to backend.
            Therefore, I decided to make this one a long-term project and slowly
            but surely gather all the knowledge I need to publish a functional
            production.
          </p>
          <br />
          <p>
            In the meantime, I collaborated with a UI/UX designer, Nayeon Koong,
            to brainstorm on the functionalities and service flows of the
            application. You can check out the blueprint for this application at
            her{" "}
            <a href="https://nakoong.com/Coach-Player" target="_blank">
              website
            </a>. Stay tuned for updates!
          </p>
        </div>
      </div>
    )
  }
}

export default CP
