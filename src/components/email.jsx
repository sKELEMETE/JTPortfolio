import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null);
  const [showMessage, setShowMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_btg9rq2",
        "template_yqhgshq",
        formData,
        "-0M3QQPaKVM8BANNZ"
      )
      .then(
        () => {
          setStatus("success");
          setShowMessage(true);
          setFormData({ name: "", email: "", message: "" });
          setTimeout(() => setShowMessage(false), 3000);
        },
        () => {
          setStatus("error");
          setShowMessage(true);
          setTimeout(() => setShowMessage(false), 4000);
        }
      );
  };

  return (
    <div className="relative w-full flex flex-col items-center">
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col items-center"
      >
        <h1 className="mb-2 w-[88%] text-left font-[Poppins] text-[28px] font-light text-white sm:w-[80%] sm:text-[35px]">
          Get in Touch
        </h1>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="mb-3 w-[88%] rounded-md border border-[#00ADB5] p-3 font-extralight text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00ADB5] sm:w-[80%]"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="mb-3 w-[88%] rounded-md border border-[#00ADB5] p-3 font-extralight text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00ADB5] sm:w-[80%]"
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="mb-3 w-[88%] rounded-md border border-[#00ADB5] p-3 font-extralight text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00ADB5] sm:w-[80%]"
          required
        />

        <div className="flex w-[88%] justify-end sm:w-[80%]">
          <button
            type="submit"
            className="w-full rounded-md bg-[#00ADB5] px-5 text-[22px] font-semibold text-white transition duration-300 hover:scale-105 hover:bg-[#008b99] sm:w-[45%] sm:text-[30px]"
          >
            SEND
          </button>
        </div>
      </form>

      {/* Toast Message */}
      {showMessage && (
        <div
          className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-10 py-5 rounded-lg text-white font-[Poppins] font-semibold text-[2rem] transition-all duration-300 ${
            status === "success" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {status === "success"
            ? "Message sent successfully!"
            : "Failed to send message."}
        </div>
      )}
    </div>
  );
}
