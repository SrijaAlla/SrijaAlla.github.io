import srija from "./assets/mobilepage.jpeg";
import frog from "./assets/nobgfrog.png";
import hand from "./assets/hand.png";

function Profile() {
  return (
    <div className="Home">
      <div className="main-div">
        <div>
          <img src={srija}></img>
        </div>
        <div className="description">
          <span className="emo">
            <span class="hi animated-text">
              <span>H</span>
              <span>i</span>
              <span>!</span>
            </span>
            <span class="animated-img">
              <img src={frog}></img>
            </span>
          </span>
          <span className="intro">
            I am Srija, pursuing Masters in Computer Science from University at
            Buffalo.
          </span>
          <span className="about">
            I'm passionate about software development, machine learning, and
            making a positive impact through technology. With hands-on
            experience as a Software Engineer, and a track record of driving
            growth and efficiency in various roles, I'm dedicated to creating
            user-friendly solutions and pushing the boundaries of what's
            possible. When I'm not working you'll find me binge watching or
            painting.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Profile;
