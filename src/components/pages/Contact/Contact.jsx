import "./Contact.css"
import React from "react";
import Swal from 'sweetalert2';

const Contact = () => {
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const onFieldBlur = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value.trim();

    if (!fieldValue) {
      Swal.fire({
        title: "Required Field",
        text: `${event.target.placeholder} is required.`,
        icon: "warning",
      });
    } else if (fieldName === "email" && !validateEmail(fieldValue)) {
      Swal.fire({
        title: "Invalid Email",
        text: "Please enter a valid email address.",
        icon: "error",
      });
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(event.target);

    formData.append("access_key", "ba5b73f8-48a0-47b5-b112-f171eae9ea08");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Thank You!",
        text: "Message has been sent!",
        icon: "success"
      });
      form.reset(); //reset the form fields after successful submissions
    }
  };

  return (
    <>
      <div className="contact">
        <form onSubmit={onSubmit}>
          <h2>Contact Me!</h2>
          <div className="input-box">
            <label>Name: </label>
            <input
              type="text"
              className="field"
              placeholder="Enter Your Name"
              name="name"
              onBlur={onFieldBlur}
              required
            />
          </div>
          <div className="input-box">
            <label>Email: </label>
            <input
              type="text"
              className="field"
              placeholder="Enter your email"
              name="email"
              onBlur={onFieldBlur}
              required
            />
          </div>
          <div className="input-box">
            <label>Message: </label>
            <textarea
              name="message"
              className="field message"
              placeholder="Write a Message"
              onBlur={onFieldBlur}
              required
            ></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </>
  );
};

export default Contact
