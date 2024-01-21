import CardList from "./Card";
import "./App.css";

function Work() {
  return (
    <div>
      {/* <div className="code-block">
        <div className="code">
          <div className="first-block">
            <span className="def">def</span>{" "}
            <span className="myJourney">srija</span>
            <span className="brackets">{"():"}</span>{" "}
            <span className="arrow">{"->"}</span>{" "}
            <span className="str">str</span>
          </div>
          <div className="second-block">
            <span className="return">return</span>{" "}
            <span className="text">"Long way to go"</span>
          </div>
          <div>
            <p class="typing"># Seeking Summer Internship Oppurtunities</p>
          </div>
        </div>
      </div> */}
      {/* <div>
        <span className="projects-heading animated-text">
          <span>S</span>
          <span>k</span>
          <span>i</span>
          <span>l</span>
          <span>l</span>
          <span>s</span>
        </span>
        <div className="skills">
          <div>
            <div>Front-end technologies</div>
            <Tooltip title="HTML">
              <IconButton aria-label="HTML">
                <img src={html}></img>
              </IconButton>
            </Tooltip>
            <Tooltip title="CSS">
              <IconButton aria-label="CSS">
                <img src={css}></img>
              </IconButton>
            </Tooltip>
            <Tooltip title="Java Script">
              <IconButton aria-label="JavaScript">
                <img src={js}></img>
              </IconButton>
            </Tooltip>
            <Tooltip title="React">
              <IconButton aria-label="React">
                <img src={reacticon}></img>
              </IconButton>
            </Tooltip>
            <Tooltip title="Bootstrap">
              <IconButton aria-label="Bootstrap">
                <img src={bs}></img>
              </IconButton>
            </Tooltip>
          </div>
          <div>
            Backend Technologies
            <div>
              <Tooltip title="Python">
                <IconButton aria-label="Python">
                  <img src={python}></img>
                </IconButton>
              </Tooltip>
            </div>
          </div>
          <div>Other Tools & Technology</div>
        </div>
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
