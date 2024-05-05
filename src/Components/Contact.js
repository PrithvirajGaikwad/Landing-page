import React from "react";

const Contact = () => {
  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">Register Below</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="yourMail@gmail.com" />
      </div>
      <div className="contact-form-container">
        <input type="text" placeholder="Prithvi Gaik" labale="Name" />
      </div>
      <button className="secondary-button">Submit</button>
    </div>
  );
};

export default Contact;
