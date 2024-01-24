'use client';
import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { User, MailIcon, ArrowRightIcon, MessageSquare } from 'lucide-react';

import { StarsCanvas } from "../components/canvas/Stars";
import Footer from "../components/Footer";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Valeria",
          from_email: form.email,
          to_email: "vdolgaliova@gmail.com",
          message: form.message,
        },
        PUBLIC_KEY,
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you! I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Something went wrong. Please try again.");
        }
      );
  };


  return (
    <section id="contact" className="xl:min-h-[content]">

      <div className="container mx-auto">


        <h2 className="section-title mt-24 font-bold text-black xl:mb-16 text-center mx-auto">Contact Me</h2>
        <div className="grid xl:grid-cols-2 pt-4 xl:h-[500px] mb-6 xl:mb-4"> {/* Increase the height here */}
          <div className="flex flex-col justify-start"> {/* Adjust margin and justify-content */}
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              Hello!
            </div>
            <h1 className="h3 max-w-md mb-8">Let&apos;s work together.</h1>
            <p className='subtitle max-w-[400px] mb-6'>I&apos;m currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
            </p>

            <div className="relative flex mb-50 xl:mb-10 text-base xl:text-lg items-center xl:grids-cols-2 gap-x-3">
              
              {/*Github Logo*/}
              <a href="https://github.com/valeriad0l" target="_blank" rel="noopener noreferrer">
              <Image src="/images/githubLogo.svg"
                alt="github logo"
                width={50}
                height={50}
              />
              </a>

              {/*LinkedIn Logo*/}
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Image src="/images/linkedinLogo.svg"
                alt="linkedIn logo"
                width={50}
                height={50}
              />
              </a>

            </div>
          </div>

          <div>

            <form className="flex flex-col gap-y-4" onSubmit={handleSubmit} ref={formRef}>

              {/*Name */}
              <div className="relative flex items-center">
                <Input name="name" type="text" id="name" value={form.name} onChange={handleChange} placeholder="Your Name" required />
                <User className="absolute right-6" size={20} />
              </div>

              {/*Email */}
              <div className="relative flex items-center">
                <Input name="email" type="email" id="email" value={form.email} onChange={handleChange} placeholder="Your Email" required />
                <MailIcon className="absolute right-6" size={20} />
              </div>

              {/*Textarea*/}
              <div className="relative flex items-center">
                <Textarea name="message" id="message" value={form.message} onChange={handleChange} placeholder="Type Your Message Here..." />
                <MessageSquare className="absolute top-4 right-6" size={20} />
              </div>
              <Button type="submit" className="relative flex items-center max-w-[165px] rounded-full gap-x-1 hover:bg-slate-800">
                Let&apos;s Talk
                <ArrowRightIcon size={20} />
                {loading ? "Sending..." : ""}
              </Button>

            </form>

          </div>

        </div>
      </div>
      <div>
        <Footer />
      </div>
    </section>

  );
};

export default Contact;