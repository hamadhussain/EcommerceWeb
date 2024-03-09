"use client";
import React, { useState } from "react";
import { CiLocationOn } from "react-icons/ci";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission here, e.g. send data to backend
    console.log({ name, email, message });

    //   // const handlesubmit = async (e) => {
    //   //     e.preventDefault();
    try {
      const response = await fetch("/Api/Contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          discription: message,
        }),
        // cache: "no-cache",
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
      } else {
        throw new Error("Failed to submit data");
      }
    } catch (error) {
      console.error("Error submitting data:", error);
    }
    //   //   };
    // Reset form fields after submission
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      {" "}
      <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="max-w-md mx-auto formcontact flex flex-col justify-around">
        <center>
          {" "}
          <h1 className=" text-2xl">If Any Problem Happening Than Contact With Below Form</h1>
        </center>
        <div>
          {" "}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border rounded py-2 px-3"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border rounded py-2 px-3"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1">
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full border rounded py-2 px-3"
                rows="4"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <center>
        <h1 className="font-extrabold">
          Check Our Location
          <CiLocationOn className=" text-red-700" />
        </h1>
        <br />
        <iframe
          className=" p-6 flex justify-center w-screen items-center"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7233.150707208442!2d67.05656169786987!3d24.980558465332496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb340e584b891c3%3A0x29b2cbc198ba2dbd!2sAptech%20Computer%20Education%20North%20Karachi%20Center!5e0!3m2!1sen!2s!4v1709797697666!5m2!1sen!2s"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </center>
    </>
  );
};

export default ContactForm;
