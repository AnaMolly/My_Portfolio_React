import React from 'react';
//import { validateEmail } from '../../utils/helpers';

// CONTACT PAGE

function Contact() {

  //CONTACT FORM:
  // const [fullName, setFullName] = useState('');
  // const [email, setEmail] = useState('');
  // const [message, setMessage] = useState('');
  // const [errorMessage, setErrorMessage] = useState('');

  // const handleInputChange = (e) => {
   
  //   const { target } = e;
  //   const inputType = target.name;
  //   const inputValue = target.value;

  //   if (inputType === 'email') {

  //     setEmail(inputValue);

  //     if (!validateEmail(inputValue)) {
  //       setErrorMessage('Invalid email address.');
  //       return
      
  //     } else {
  //       setErrorMessage('');
  //     }
  

  //   } else if (inputType === 'message') {

  //     setMessage(inputValue) 

  //     if (!inputValue.length) {

  //       setErrorMessage('You must include a message.')
  //       return
  //       } else {
  //         setErrorMessage('')
  //       }

  //   } else if (inputType === "fullName"){

  //     setFullName (inputValue)

  //     if (!inputValue.length) {

  //       setErrorMessage('You must include a name.')
  //       return
  
  //       } else {
  //         setErrorMessage('')
  //       }
  //   }
  // }

    


  // const handleFormSubmit = (e) => {
  //   e.preventDefault(); 

  //   if (!validateEmail(email)) {
  //     setErrorMessage('Invalid email address.');
  //     return
    
  //   } else {
  //     setErrorMessage('');
  //   }
    
  //   if (!fullName.length) {

  //     setErrorMessage('You must include a name.')
  //     return

  //   } else {
  //       setErrorMessage('')
  //   }
  //   if (!message.length) {

  //     setErrorMessage('You must include a message.')
  //     return

  //   } else {
  //       setErrorMessage('')
  //   }

   
    
  //   setFullName('');
  //   setEmail('');
  //   setMessage('')
  //   setErrorMessage('')
  // };

  return (
    <div>
       <section className="contactme2">
       <h2>CONTACT INFORMATION:</h2>
       <p style={{color:"black", fontSize:'30px', padding:'50px', textAlign:'center', lineHeight:'1.5'}}>Hi there! Please feel free to contact me via phone number, email or Linkedin. I look forward to connecting!</p>
            
            <div class="contactcon"> 
            <p className="contactme2p"> 647-779-0749</p>
            <a className="contactme2a" href="mailto:analia.mohamdally@gmail.com">analia.mohamdally@gmail.com</a>
           
            <a className="contactme2a" href="https://www.linkedin.com/in/analia-mohamdally-1a7438179/">Linkedin</a>
            <a className="contactme2a" href="https://github.com/AnaMolly">GitHub</a>
            </div>
        </section> 


      {/* CONTACT FORM: */}
      {/* <form className="form-group">
      <h2> Hi there, please fill out the fields below and I will get back to you as soon as possible!</h2>
        <label className="form-label">Name:</label>
        <input
          className="form-control"
          value={fullName}
          name="fullName"
          onChange={handleInputChange}
          type="name"
          placeholder="Enter your name..."
        />
        <label className="form-label">Email address:</label>
        <input
          className="form-control"
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Enter your email..."
        />
        <label className="form-label">Message:</label>
        <textarea
          className="form-control"
          value={message}
          name="message"
          onChange={handleInputChange}
          type="message"
          placeholder="Enter your message..."
        />
        <div>
        <button type="button" onClick={handleFormSubmit}>Submit</button>
        </div>
        
        <br/>
        {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
      </form> */}
      
    </div>
  );
}


export default Contact