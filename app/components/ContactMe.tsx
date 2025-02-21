"use client";
import React, { useState } from "react";
import Image from "next/image";
// import BorderPic from "../../../public/assets/landing Page/Border-pic.png";
// import ContactPic from "../../../public/assets/contact-Syner.png";
// import Call from "../../../public/assets/landing Page/call.png";
// import Mail from "../../../public/assets/landing Page/mail.png";
// import X from "@/public/assets/X.png";
// import Instagram from "@/public/assets/Instagram.png";
// import Fb from "@/public/assets/Facebook.png";
// import Linkedin from "@/public/assets/Linkedin.png";
import { Facebook, Linkedin, Mail, Phone } from "lucide-react";

function Hireme() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    budget: "",
    des: "",
  });

  const [responseMessage, setResponseMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent redirect

    setLoading(true);
    setResponseMessage("");

    try {
      // --------------------------------------------
      // 1) Replace with your own Web3Forms access key
      // --------------------------------------------
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_API_KEY;

      // --------------------------------------------
      // 2) Send POST request to Web3Forms endpoint
      // --------------------------------------------
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: "New Contact Form Submission",
          // Mapping your existing fields to the Web3Forms request body
          name: formData.name,
          email: formData.email,
          project: formData.project,
          budget: formData.budget,
          des: formData.des,
        }),
      });

      const data = await res.json();

      // Check if the request and response indicate success
      if (res.ok && data.success) {
        setResponseMessage(
          `We have received your Email! We'll be in touch soon.`
        );
        setFormData({ name: "", email: "", project: "", budget: "", des: "" }); // Reset form

        setTimeout(() => {
          setResponseMessage("");
        }, 5000);
      } else {
        setResponseMessage("Error sending message. Try again.");
      }

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setResponseMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mb-32 pt-20 justify-center items-center max-w-7xl mx-auto max-xl:px-6 ">
      
              

      {/* Mobile section below remains exactly as is */}
      <div className="rounded-md">
        <div className="  mb-[-50px]">
          <div className="flex gap-[15px] max-md:flex-col">
            <div className="max-sm:p-6 sm:p-8 lg:pt-2 px-8 stroke-[#0A192F] w-[90%] max-md:w-full rounded-tl-[6px]  rounded-tr-[6px] rounded-bl-[6px] gap-y-6 rounded-br-[6px] flex  flex-col bg-gradient-to-r from-[#141E30] to-[#243B55]" >
              <div className="flex  lg:mt-[24px]  text-blue-400 text-3xl md:text-4xl font-bold">
                <h4>Contact Me</h4>
              </div>
              <div className="flex  justify-center items-start  flex-col sm:pt-3 ">
                <span className="xsm:pb-10 pb-5 max-sm:text-[15px] xl:text-[17px] text-[16px] text-gray-300">Have a project in mind? Let's turn your vision into reality! Get in touch and let's create something amazing together.</span>
                <div className="flex flex-col max-xsm:gap-y-[5px] sm:gap-y-[20px] max-sm:gap-y-[20px] justify-center"> 
                    <div className="flex gap-[18px] xsm:items-center max-xsm:flex-col">
                        <div>
                            {/* <Image src={Call} alt={""} className="w-[36px] h-[36px]" /> */}
                            <div className="sm:p-3 max-xsm:hidden text-white text-24 rounded-full  transition duration-300">
                                <Mail size={20} />
                            </div>
                        </div>
                        <div>
                            {/* <h5 className="text-white text-base sm:text-lg font-normal max-sm:pb-1">
                            Email
                            </h5> */}
                            <a href="mailto:lahirumadhushan80@gmail.com">
                            <h5 className="text-gray-300 text-base max-sm:text-[15px] xl:text-[17px] text-[16px] font-semibold hover:underline">
                            lahirumadhushan80@gmail.com
                            </h5>
                            </a>
                        </div>
                    </div>
                    <div className="flex gap-[18px] xsm:items-center max-xsm:flex-col">
                    
                        <div>
                        <div className="sm:p-3 max-xsm:hidden text-white rounded-full  transition duration-300">
                            <Phone size={20} />
                        </div>
                            {/* <Image src={Mail} alt={""} className="w-[36px] h-[36px]" /> */}
                        </div>
                        <div>
                            {/* <h5 className="text-white text-base sm:text-lg font-normal max-sm:pb-1">
                            Phone
                            </h5> */}
                            <h5 className="text-gray-300 text-base max-sm:text-[15px] xl:text-[17px] text-[16px] font-semibold">
                            0766541631
                            </h5>
                        </div>
                    </div>
                    <div className="flex flex-wrap">
                        <a
                        href="https://www.linkedin.com/in/lahiru-jayarathne-b29676271/"
                        target="_blank"
                        >
                        <div className="p-3 bg-blue-500 text-white rounded-full max-xsm:mt-6 cursor-pointer hover:bg-blue-700 transition duration-300 ">
                                <Linkedin size={24} />
                            </div>
                        </a>
                        <div/>
                    </div>
               
                    {/* <a href="" target="_blank">
                    <Image src={X} alt="" className="w-[68px] h-[68px]" />
                    </a> */}
                    {/* <a
                    href="https://www.facebook.com/share/1HFvoXvaDn/"
                    target="_blank"
                    >
                        <div className="p-3 bg-blue-500 text-white rounded-full cursor-pointer hover:bg-blue-700 transition duration-300">
                            <Facebook size={24} />
                        </div>
                    </a> */}
                </div>
               
                {/* <a
                  href="https://www.instagram.com/synergenicx?igsh=ajVodHZhOHJjazR3"
                  target="_blank"
                >
                  <Image src={Instagram} alt="" className="w-[68px] h-[68px]" />
                </a> */}
               
                
              </div>
            </div>


            <div className="bg-[#141414] rounded-lg p-3 xsm:p-8 w-full lg:w-1/1 space-y-4">
              <h3 className="text-xl font-bold pb-6 ">Send a Message</h3>
              <form className="space-y-4" id="myForm" onSubmit={handleSubmit}>
                <div className="flex flex-col lg:flex-row gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-md focus:border-[#595959] focus:outline-none focus:ring-2 border-[#595959] bg-[#141414] border-solid text-white border-[0.5px]"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-md focus:border-[#595959] focus:outline-none focus:ring-2 border-[#595959] bg-[#141414] border-solid text-white border-[0.5px]"
                  />
                </div>
                {/* <div className="flex flex-col lg:flex-row gap-4">
                  <select
                    name="project"
                    className="w-full p-3 rounded-md focus:border-[#595959] focus:outline-none focus:ring-2 border-[#595959] bg-[#141414] border-solid text-white border-[0.5px]"
                    value={formData.project}
                    onChange={handleChange}
                    required
                  >
                    <option>Web Development</option>
                    <option>Mobile App Development</option>
                    <option>Branding</option>
                  </select>
                  
                </div> */}
                <textarea
                  placeholder="Write a message"
                  name="des"
                  value={formData.des}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-md focus:border-[#595959] focus:outline-none focus:ring-2 border-[#595959] bg-[#141414] border-solid text-white border-[0.5px]"
                  rows={4}
                ></textarea>
               <button
                    type="submit"
                    className={`w-full p-2 rounded-md text-white text-lg font-bold transition duration-300 ${
                        loading
                        ? "bg-blue-700 hover:bg-blue-700"
                        : "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                    }`}
                    >
                    {loading ? "Submitting..." : "Send Message"}
                </button>

              </form>
              <br />

              {responseMessage && (
                <p
                  className={`mt-4 text-center ${
                    responseMessage.includes("Error") ||
                    responseMessage.includes("An error")
                      ? "text-red-500"
                      : "text-green-500"
                  }`}
                >
                  {responseMessage}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hireme;