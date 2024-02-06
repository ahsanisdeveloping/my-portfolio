import '../styles/home.css'
const Home = () => {
    return ( 
        <div className="homeStyle">
            <div className='main'>
            <p className="greeting">
                    <span className="greetingFirst">
                        Greetings!
                    </span>
                    <span className='greetingSecond'>
                        I am
                    </span>
                    <span className='greetingThird'>
                        Ahsan Usman
                    </span>
                </p>
                <div className="avatarDiv"></div>
                <div className="designationDiv">
                    <span className='designationHeading'>A Full Stack Web Developer.</span>
                    <p className='designationText'>Passionate full-stack web developer specializing in React, creating dynamic and user-centric applications with a keen eye for design and a commitment to delivering seamless digital experiences.</p>
                </div>
                
                
            </div>
        </div>
     );
}
 
export default Home;
