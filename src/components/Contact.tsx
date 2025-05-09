import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    
    // const formData = new FormData(e.currentTarget);
    // const name = formData.get("name")?.toString().trim();
    // const email = formData.get("email")?.toString().trim();
    // const subject = formData.get("subject")?.toString().trim();
    // const message = formData.get("message")?.toString().trim();

    // if (!name || !email || !subject || !message) {
    //   alert("Please fill in all fields before submitting.");
    //   return;
    // }
    // For Netlify Forms, the form will be handled automatically when the site is deployed
    // This code is just for the redirect and success message
    const encode = (data: Record<string, string>) => {
      return Object.keys(data)
      .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
    };

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...Object.fromEntries(Array.from(new FormData(e.currentTarget) as FormData).map(([key, value]) => [key, value.toString()])) }),
    })
      .then(() => setSubmitted(true))
      .catch((error) => console.error(error));

    e.preventDefault();
  };

  const cvuri = "/M. Modupe - Resume 2025.pdf";
  return (
    <>
      <section id="contact" className="py-24 bg-black relative">
        <div className="absolute inset-0 overflow-hidden opacity-5">
          <div className="absolute right-1/4 top-1/3 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
          <div className="absolute left-1/3 bottom-1/3 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-3xl font-bold mb-4 text-center">Get In Touch</h2>
          <p className="text-zinc-400 text-center mb-12 max-w-2xl mx-auto">
            Interested in working together? Feel free to reach out through any
            of the methods below or fill out the contact form.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Contact Info */}
            <div className="md:col-span-2 bg-zinc-900/70 backdrop-blur-sm p-8 rounded-lg shadow-xl border border-zinc-800">
              <h3 className="text-2xl font-semibold mb-6 text-blue-500">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-medium mb-2 text-zinc-200">
                    Email
                  </h4>
                  <a
                    href="mailto:kayveengee@gmail.com"
                    className="text-zinc-400 hover:text-blue-500 transition-colors flex items-center gap-2"
                  >
                    <Mail size={18} />
                    kayveengee@gmail.com
                  </a>
                </div>

                <div>
                  <h4 className="text-lg font-medium mb-2 text-zinc-200">
                    Connect
                  </h4>
                  <div className="flex flex-col space-y-3">
                    <a
                      href="https://github.com/Marvie-03"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-blue-500 transition-colors flex items-center gap-2"
                    >
                      <Github size={18} />
                      GitHub
                    </a>
                    <a
                      href="https://www.linkedin.com/in/kayveengee"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-blue-500 transition-colors flex items-center gap-2"
                    >
                      <Linkedin size={18} />
                      LinkedIn
                    </a>
                    <a
                      href="https://x.com/kayveengee"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-blue-500 transition-colors flex items-center gap-2"
                    >
                      <Twitter size={18} />
                      Twitter
                    </a>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-medium mb-2 text-zinc-200">
                    Resume
                  </h4>
                  <a
                    href={cvuri}
                    download
                    className="inline-flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 px-4 py-2 rounded-md transition-colors"
                  >
                    Download CV
                  </a>
                </div>
              </div>

              <div className="mt-12">
                <h4 className="text-lg font-medium mb-4 text-zinc-200">
                  Testimonial
                </h4>
                <div className="bg-zinc-800/50 p-4 rounded border border-zinc-700">
                  <p className="text-zinc-400 italic text-sm">
                    "Marvellous is an exceptional developer with an eye for
                    clean, minimalist design. His technical skills combined with
                    his understanding of user experience made our project a
                    great success."
                  </p>
                  <p className="text-zinc-300 mt-2 text-sm font-medium">
                    — Omar, TVG Corporation
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-3 bg-zinc-900/70 backdrop-blur-sm p-8 rounded-lg shadow-xl border border-zinc-800">
              {submitted ? (
                <div className="success-message">
                  <h3>Thank you for your message!</h3>
                  <p>I'll get back to you soon.</p>
                  <button
                    className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors font-medium"
                    onClick={() => setSubmitted(false)}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-semibold mb-6 text-blue-500">
                    Send a Message
                  </h3>

                  <form
                    className="space-y-6"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    name="contact"
                    onSubmit={handleSubmit}
                  >
                    {/* This hidden input is required for Netlify forms */}
                    <input type="hidden" name="form-name" value="contact" />

                    {/* Honeypot field to prevent spam */}
                    <p className="hidden">
                      <label>
                        Don't fill this out if you're human:{" "}
                        <input name="bot-field" />
                      </label>
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-zinc-300 mb-1"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          id="name"
                          className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-zinc-200"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-zinc-300 mb-1"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          id="email"
                          className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-zinc-200"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-zinc-300 mb-1"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        id="subject"
                        className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-zinc-200"
                        placeholder="What is this regarding?"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-zinc-300 mb-1"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-zinc-200"
                        placeholder="Your message here..."
                      ></textarea>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors font-medium"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
