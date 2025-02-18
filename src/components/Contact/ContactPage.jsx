import React from "react";
import './Contact.css';
import Swal from 'sweetalert2';

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
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
        }
    };

    return (
        <>
            <div className="contact">
                <form onSubmit={onSubmit}>
                    <h2>Contact Me!</h2>
                    <div className="input-box">
                        <label>Name: </label>
                        <input type="text" className="field" placeholder="Enter Your Name" name="name" required />
                    </div>
                    <div className="input-box">
                        <label>Email: </label>
                        <input type="text" className="field" placeholder="Enter your email" name="email" required />
                    </div>
                    <div className="input-box">
                        <label>Message: </label>
                        <textarea name="message" className="field message" placeholder="Write a Message" required></textarea>
                    </div>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </>
    );
};

export default Contact