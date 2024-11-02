import CardList from "./Card";
import "./App.css";
import Experience from "./Experience";

function Work() {
  return (
    <div>
      {/* <div>
        <span className="projects-heading animated-text">
          <span>E</span>
          <span>x</span>
          <span>p</span>
          <span>e</span>
          <span>r</span>
          <span>i</span>
          <span>e</span>
          <span>n</span>
          <span>c</span>
          <span>e</span>
        </span>
        <Experience />
      </div> */}
      <div className="projects">
        <span className="projects-heading animated-text">
          <span>P</span>
          <span>r</span>
          <span>o</span>
          <span>j</span>
          <span>e</span>
          <span>c</span>
          <span>t</span>
          <span>s</span>
        </span>
        <CardList />
      </div>
      <div></div>
    </div>
  );
}
export default Work;
