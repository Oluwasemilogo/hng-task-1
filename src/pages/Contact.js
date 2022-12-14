import React from 'react'
import Footer from '../components/Footer';
import { useState } from 'react';
import '../App.css'

function Contact() {
     const [isAgreed, setIsAgreed] = useState(false);
  return (
    <>
      <div className="contact_container">
        <div className="content">
          <header className="contact_content_text">Contact Me</header>
          <h5 className="contact_helper_text">
            Hi there, contact me to ask about anything you have in mind.
          </h5>

          <form onSubmit={(e) => e.preventDefault()}>
            <div className="contact_input_container">
              <div className="input_con">
                <label htmlFor="first_name" className="small_input">
                  First Name
                </label>
                <input
                  type={"text"}
                  name="first_name"
                  id="first_name"
                  placeholder="Enter your first name"
                />
              </div>
              <div className="input_con">
                <label htmlFor="last_name" className="small_input">
                  Last Name
                </label>
                <input
                  type={"text"}
                  id="last_name"
                  name="last_name"
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            <div className="input_con">
              <label htmlFor="email" className="small_input">
                Email
              </label>
              <input
                type={"email"}
                name="email"
                id="email"
                placeholder="yourname@email.com"
              />
            </div>
            <div className="input_con">
              <label htmlFor="message" className="small_input">
                Message
              </label>
              <textarea
                type={"text"}
                name="message"
                id="message"
                placeholder="Send a message and I'll reply you as soon as possible..."
              />
            </div>

            <div className="">
              <input
                onClick={() => setIsAgreed(!isAgreed)}
                type={"checkbox"}
                name="check"
                id="check"
                checked={isAgreed ? true : false}
                placeholder="Send a message and I'll reply you as soon as possible..."
              />
              <label htmlFor="check" className="small_input check">
                You agree to providing your data to Oluwasemilogo who may contact you.
              </label>
            </div>

            <button
              id="btn__submit"
              className={`${isAgreed ? "" : "disabled"} `}
            >
              Send message
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;