import React from 'react';

const Contact = () => {

  return (
    <>
      <h1>Contact Page</h1>
      <p>Please fill out the form below to get in touch with us.</p>
    
      <form className="contact">
         <label for="name">Name:</label>
         <input type="text" id="name" name="name" required />
        
         <label for="email">Email:</label>
         <input type="email" id="email" name="email" required />
        
         <label for="subject">Subject:</label>
         <input type="text" id="subject" name="subject" required />
        
         <label for="message">Message:</label>
         <textarea id="message" name="message" rows="4" required></textarea>
        
        <button type="submit">Submit</button>
      </form>

    </>
  )

}

export default Contact;