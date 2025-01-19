import '../styles/about.css'
const About = () => {
    return ( 
        <div className="aboutUs">
            <div className="aboutHeadingDiv">
                <h1 className='aboutHeadingText'>About</h1>
            </div>
            <div className="aboutDiv">
                <p className='aboutText'>
                I'm <span className='aboutHighlightedTextDark'>Ahsan Usman</span>, a dedicated <span className='aboutHighlightedText'>Computer Science</span> student maintaining a <span className='aboutHighlightedText'>3.6 CGPA</span> (currently in 8th Semester). 
                </p>
                <p className='aboutHeadings'>
                    Here's a glimpse of my journey:
                    </p>
                <ul>
                    <li>
                    Completed Intermediate at Superior Group of Colleges with a commendable 74%.
                    </li>
                    <li>
                    Tech enthusiast, driven by a passion for exploring diverse technologies.
                    </li>
                    <li>
                    Eager to acquire proficiency in new programming languages and frameworks.
                    </li>
                    <li>
                    Nimble adaptation to the ever-evolving technological landscape.
                    </li>
                </ul>
                <p className='aboutHeadings'>Professional qualities:</p>
                <ul>
                    <li>
                    Proven excellence as a team player in collaborative environments.
                    </li>
                    <li>
                    Demonstrated leadership skills in guiding and inspiring others.
                    </li>
                    <li>
                    Approach challenges with confidence and a positive mindset.
                    </li>
                    <li>
                    Strong verbal and written communication skills.
                    </li>
                </ul>
                <p className='aboutHeadings'>
                Tech portfolio highlights:
                </p>
                <ul>
                    <li>
                    Compilation showcasing diverse projects and technical prowess.
                    </li>
                    <li>
                    Mastery in various programming languages and frameworks.
                    </li>
                    <li>
                    Practical application of sharp problem-solving skills.
                    </li>
                </ul>
            </div>
        </div>
     );
}
 
export default About;
