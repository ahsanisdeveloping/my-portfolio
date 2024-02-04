import "../styles/contact.css";
import contactArray from '../data/ContactData';

const Contact = () => {
  return (
    <div className="contact">
      <h1 className="contactHeadingText">Contact</h1>
      <div className="contactButtonsDiv">
        {
            contactArray.map((value)=>(
                <button className="contactButton" onClick={()=>{window.open(value.link)}}>< value.icon/><span className="contactButtonAnchor" href={value.link} target='_blank' rel="noreferrer">{value.title}</span></button>
            ))
        } 
      </div>
    </div>
  );
};

export default Contact;
