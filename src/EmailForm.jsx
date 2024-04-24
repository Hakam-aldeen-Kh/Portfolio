import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
// import "./EmailForm.css";

export const EmailForm = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_388s43d", "template_2hwl7ov", form.current, "0xF8VQGwM-H1P-NVr")
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent!");
        },
        (error) => {
          console.log(error.text);
          console.log("error sending message, try again!");
        }
      );
  };
  return (
    <div className="m-auto px-4 mt-4 mb-8" id="connectMe">
      <h1 className="text-2xl font-semibold">Send Email</h1>
      <form ref={form} onSubmit={sendEmail} className="mt-10">
        <div className="container mx-auto px-4 justify-center text-center">
          <input
            name="user_email"
            type="email"
            placeholder="Email"
            required
            className="w-full sm:w-[60%]    bg-[#000000] py-3 px-4 rounded-md mb-4 border-2"
          />
          <textarea
            name="user_message"
            placeholder="Write message..."
            required
            className="w-full sm:w-[60%]   bg-[#000000] py-3 px-4 rounded-md mb-4 border-2 h-[200px]"
          ></textarea>
          <button
            type="submit"
            className=" w-full sm:w-[60%]  items-start bg-gradient-to-t from-blue-500 to-cyan-500 hover:from-blue-700 hover:to-cyan-700 text-white py-3 rounded-full"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};
