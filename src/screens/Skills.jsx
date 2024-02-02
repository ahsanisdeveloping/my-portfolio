import '../styles/skills.css'
import skillsArray from '../data/SkillsData';
const Skills = () => {
    
    return ( 
        <div className="skills">
            <div className="skillsHeadingDiv">
                <h1 className='skillsHeadingText'>Skills</h1>
            </div>
            <div className="tSkillsDiv">
                <p className="tSkillsHead">Technical Skills</p>
                <div className="skillsContainer">
                {
                    skillsArray.map((value)=>(<div className="skill">
                        <label className='skillLabel'>{value.name}</label>
                        <input type="range" className='skillSlider' min="0" max="100" value={value.value} />
                    </div>))
                }
                </div>
            </div>
            <div className="sSkillsDiv">
                <p className="sSkillsHead">Soft Skills</p>
                <p className='sSkillsHeadings'>Communication</p>
                <ul>
                    <li>
                    Excellent verbal and written communication skills.
                    </li>
                    <li>
                    Ability to convey technical concepts to non-technical stakeholders.
                    </li>
                </ul>
                <p className='sSkillsHeadings'>Teamwork</p>
                <ul>
                    <li>Proven ability to work collaboratively in a team.</li>
                    <li>Contributed to successful group projects.</li>
                </ul>
                <p className='sSkillsHeadings'>Adaptability</p>
                <ul>
                    <li>
                    Quick learner, adaptable to new technologies and frameworks.
                    </li>
                    <li>
                    Thrives in dynamic and challenging environments.
                    </li>
                </ul>
                <p className='sSkillsHeadings'>Leadership</p>
                <ul>
                    <li>
                    Demonstrated leadership qualities in group projects or extracurricular activities.
                    </li>
                    <li>Ability to guide and motivate team members.</li>
                </ul>
                <p className='sSkillsHeadings'>Time Management</p>
                <ul>
                    <li>
                    Effective time management and organization skills.
                    </li>
                    <li>
                    Able to meet deadlines and handle multiple tasks simultaneously.
                    </li>
                </ul>
                <p className='sSkillsHeadings'>Continuous Learning</p>
                <ul>
                    <li>
                    Enthusiastic about staying updated on the latest industry trends.
                    </li>
                    <li>
                    Pursuing continuous education through online courses or self-study.
                    </li>
                </ul>
            </div>
        </div>
     );
}
 
export default Skills;