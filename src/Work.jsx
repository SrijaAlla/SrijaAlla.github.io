import CardList from "./Card";
import "./App.css";

function Work() {
  return (
    <div>
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
