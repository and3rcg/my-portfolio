"use client";

import React, { FormEvent, useState } from "react"

import { useToast } from "@/hooks/use-toast"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";


const Contact = () => {
  const { toast } = useToast()

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);


  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    
    const data = {
      first_name: firstName,
      last_name: lastName,
      email,
      company,
      message,
    };

    // Send the htmlForm data to your server
    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      }
    });

    if (!response.ok) {
      toast({
        title: "Uhhh something went wrong 💀",
        description: "There was a problem sending a contact message. Pardon my dust!",
        className: "bg-primary-900"
      });
      setError(true);
      setLoading(false);
      return
    }

    toast({
      title: "Message sent successfully!",
      description: "Thanks for reaching out! I'll be in touch soon.",
      className: "bg-primary-900",
    });

    setLoading(false);
  }

  return (
    <div>
      <div className="flex flex-col gap-8 max-w-full">
        <div className="flex justify-center">
          <h1 className="text-3xl lg:text-5xl text-accent-300 mb-8">Contact me</h1>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-10">
          <div className="bg-primary-800 border-2 border-accent-500 p-8 rounded-xl">
            <form onSubmit={handleSubmit}>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label htmlFor="first_name" className="block mb-2 text-sm font-medium">First name</label>
                        <input 
                          type="text"
                          id="first_name"
                          className="bg-primary-900 border border-accent-400 text-sm rounded-lg block w-full p-2.5"
                          placeholder="First name"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          required
                          />
                    </div>
                    <div>
                        <label htmlFor="last_name" className="block mb-2 text-sm font-medium">Last name</label>
                        <input 
                          type="text"
                          id="last_name"
                          className="bg-primary-900 border border-accent-400 text-sm rounded-lg block w-full p-2.5"
                          placeholder="Last name"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          required
                          />
                    </div>
                    <div>
                        <label htmlFor="company" className="block mb-2 text-sm font-medium">Company</label>
                        <input 
                          type="text"
                          id="company"
                          className="bg-primary-900 border border-accent-400 text-sm rounded-lg block w-full p-2.5"
                          placeholder="Company name"
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          required
                          />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium">Email address</label>
                        <input 
                          type="email"
                          id="email"
                          className="bg-primary-900 border border-accent-400 text-sm rounded-lg block w-full p-2.5"
                          placeholder="E-mail address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          />
                    </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block mb-2 text-sm font-medium">Your message</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="block p-2.5 w-full text-sm bg-primary-900 rounded-lg border border-accent-400" 
                    placeholder="Enter your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>
                <div className="flex justify-center">
                  <button 
                    type="submit" 
                    className={
                      error ?
                      "px-5 py-2.5 rounded-lg text-sm text-center text-white bg-red-700 font-medium w-full sm:w-auto"
                      :
                      "px-5 py-2.5 rounded-lg text-sm text-center text-white bg-primary-950 border-2 border-accent-500 hover:bg-accent-500 hover:scale-125 ease-in-out duration-300 font-medium w-full sm:w-auto disabled:animate-bounce"
                    }
                    disabled={loading || error}
                  >
                    {error ? "Failed to send" : loading? "Sending..." : "Send Message"}
                  </button>
                </div>
            </form>
          </div>
          <div className="flex flex-col gap-8 items-center place-content-center">
              <div className="flex">
                <FontAwesomeIcon icon={faEnvelope} className="text-5xl text-accent-400" width={150}/><span className="my-auto text-xl">geo.anders1@gmail.com</span>
              </div>
              <div className="flex">
                <FontAwesomeIcon icon={faPhone} className="text-5xl text-accent-400" width={150}/><span className="my-auto text-xl">+55 85 99108-9419</span>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Contact