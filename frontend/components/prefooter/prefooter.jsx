import React from 'react' 

class Prefooter extends React.Component {

  render() {
    return (
      <div className="prefooter">
        <div className="prefooter-content">
          <div className="dev-picture">
            <img src="/dev.jpg" />
          </div>
          <div className="dev-bio">
            <h1>Fion, Software Engineer:</h1>
            <h2>
              I am a highly motivated Software Engineer with a passion for React, Redux, Rails, and Javascript. As a software engineer I like working on problems and coming up with efficient and innovative solutions. I believe in optimal costumer satisfaction and experience while developing code. On top of all this, I love learning and adopting new and upcoming changes in technology along with enhancing my skill set.
            </h2>
          </div>
        </div>
      </div>
    )
  }
}

export default Prefooter;