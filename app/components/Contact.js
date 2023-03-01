import React from "react";

// import contact data
import { contact } from "../data";

const Contact = () => {
  return (
    <section className="section bg-primary" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title relative">Contact me</h2>
          <p className="subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga veniam
            labore nisium illum cupiditate reiciendis a numquam
          </p>
        </div>
        <div className="flex flex-col lg:gap-x-8 lg:flex-row">
          <div className="flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2">
            {contact.map((item, index) => {
              const { icon, title, subtitle, description } = item;
              return (
                <div className="flex flex-col lg:flex-row gap-x-4" key={index}>
                  <div className="text-accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl">
                    {icon}
                  </div>
                  <div>
                    <h4 className="font-body text-xl mb-1">{title}</h4>
                    <p className="mb-1 text-paragraph">{subtitle}</p>
                    <p className="text-accent font-normal ">{description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <form
            action="https://formsubmit.co/dwood4surf1@gmail.com"
            method="POST"
            className="space-y-8 w-full max-w-[780px]"
          >
            <div className="flex gap-8">
              <input
                name="name"
                className="input"
                type="text"
                placeholder="Your name"
              />
              <input
                name="email"
                className="input"
                type="email"
                placeholder="Your email"
              />
            </div>
            <input
              name="subject"
              className="input"
              type="text"
              placeholder="Subject"
            />
            <textarea
              name="message"
              className="textarea"
              placeholder="Your message"
            ></textarea>
            <button
              type="submit"
              className="btn btn-lg bg-accent hover:bg-secondary-hover"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
