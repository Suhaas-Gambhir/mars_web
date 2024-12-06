"use client";
import { Github, Mail, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { useState } from "react";

const socials = [
  {
    icon: <Instagram size={20} />,
    href: "https://www.instagram.com/mq_rover/",
    label: "Instagram",
    handle: "@mq_rover",
  },
  {
    icon: <Github size={20} />,
    href: "https://github.com/Macquarie-Aerospace-Rover-Society",
    label: "Github",
    handle: "MARS",
  },
  {
    icon: <Linkedin size={20} />,
    href: "https://www.linkedin.com/company/macquarie-aerospace-rover-society/",
    label: "LinkedIn",
    handle: "Macquarie Aerospace Rover Society",
  },
];

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true); // Set loading to true when submitting

    // Prepare FormData for submission
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("message", formData.message);

    // Submit the form to Formsubmit
    try {
      const response = await fetch("https://formsubmit.co/rover.mq@gmail.com", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        setFormSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error(error);
      alert("There was an issue submitting the form. Please try again.");
    } finally {
      setIsLoading(false); // Set loading to false when done
    }
  };

  return (
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <div className="container flex flex-col items-center justify-center min-h-screen px-4 mx-auto pt-20 pb-16">
        {/* Main Cards */}
        <div className="grid w-full grid-cols-1 gap-8 mx-auto sm:grid-cols-3 lg:gap-16">
          {socials.map((s) => (
            <Card key={s.label}>
              <Link
                href={s.href}
                target="_blank"
                className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24 lg:pb-48 md:p-16"
              >
                <span
                  className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                  aria-hidden="true"
                />
                <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                  {s.icon}
                </span>
                <div className="z-10 flex flex-col items-center">
                  <span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
                    {s.handle}
                  </span>
                  <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                    {s.label}
                  </span>
                </div>
              </Link>
            </Card>
          ))}
        </div>

        {/* Separator */}
        <div className="w-full my-12 border-t border-zinc-700"></div>

        {/* Contact Us Card */}
        <Card>
          <div className="p-8 md:p-16 flex flex-col gap-8">
            {formSubmitted ? (
              <div className="text-center">
                <h2 className="text-2xl font-bold text-green-400">
                  Thank you for contacting us!
                </h2>
                <p className="text-zinc-400">We'll get back to you shortly.</p>
              </div>
            ) : (
              <>
                <div className="flex flex-col items-center gap-4">
                  <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                    <Mail size={20} />
                  </span>
                  <span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
                    Contact Us
                  </span>
                </div>
                <p className="text-center text-zinc-400">
                  You can reach us via email at{" "}
                  <a
                    href="mailto:rover.mq@gmail.com"
                    className="text-blue-600 hover:underline"
                  >
                    rover.mq@gmail.com
                  </a>{" "}
                  or fill out the form below.
                </p>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-zinc-400"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="block w-full px-4 py-2 mt-2 text-zinc-200 bg-zinc-800 border border-zinc-700 rounded-lg focus:ring focus:ring-blue-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-zinc-400"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="block w-full px-4 py-2 mt-2 text-zinc-200 bg-zinc-800 border border-zinc-700 rounded-lg focus:ring focus:ring-blue-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-zinc-400"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="block w-full px-4 py-2 mt-2 text-zinc-200 bg-zinc-800 border border-zinc-700 rounded-lg focus:ring focus:ring-blue-400 focus:outline-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="block w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring focus:ring-blue-400 focus:outline-none"
                    disabled={isLoading} // Disable button while loading
                  >
                    {isLoading ? (
                      <div className="flex justify-center">
                        <div className="w-6 h-6 border-t-2 border-white border-solid rounded-full animate-spin"></div>
                      </div>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}
