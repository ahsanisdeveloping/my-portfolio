import "../styles/projects.css";
import projectsArray from "../data/ProjectsData";
const Projects = () => {
  return (
    <div className="projects">
      <div className="projectsMain">
        <h1 className="projectsHeading">Projects</h1>
        <div className="projectsDiv">
          {projectsArray.map((value) => (
            <div class="e-card playing project">
              <div class="image"></div>
              <div class="wave"></div>
              <div class="wave"></div>
              <div class="wave"></div>
              <div className="meriDiv">
              <div className="projectTitleDiv">
                <h1 className="projectTitleText">{value.title}</h1>
              </div>
              <div className="projectDescriptionDiv">
                <p className="projectDescriptionText">{value.description}</p>
              </div>
              <div className="projectButtonsDiv">
                <button className="projectGithubButton" onClick={()=>{window.open(value.githubLink)}}>
                  <span href={value.githubLink} className="projectGithubButtonAnchor" target='_blank' rel="noreferrer">
                    Github
                  </span>
                </button>
                {value.hostingLink!=="" && <button className="projectHostingButton" onClick={()=>{window.open(value.hostingLink)}}>
                  <span href={value.hostingLink} className="projectHostingButtonAnchor" target='_blank' rel="noreferrer">
                    Hosting
                  </span>
                </button>}
              </div>
              <div className="languagesDiv">
              {value.languages.map((arrayValue)=>(
                    <span className="language">{arrayValue}</span>
                ))}
                </div>
              
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
