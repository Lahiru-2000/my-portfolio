import Image from "next/image";
import { Facebook, Linkedin, Mail, Phone } from "lucide-react";

const AboutMe = () => {
  return (
    <section className="bg-gradient-to-r from-[#141E30] to-[#243B55] text-white py-16 px-8 md:px-20 min-h-[91.2vh]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Profile Image */}
        <div className="relative w-[290px] h-[290px] md:w-[400px] md:h-[300px] max-xsm:w-[250px] max-xsm:h-[250px] xl:hidden lg:w-[350px] lg:h-[250px]">
          <Image
            src="/assets/lahiru3.jpeg" 
            alt="Lahiru Jayarathne"
            layout="fill"
            objectFit="cover"
            className="rounded-full border-4 border-blue-500 shadow-lg "
            priority
          />
        </div>

        {/* About Text */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className=' tracking-wide text-blue-400'>About Me</span>

          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            A passionate Software Engineer skilled in Full Stack Development. 
            I specialize in React, Next.js, Angular, .NET Core and Spring Boot to build 
            modern, scalable web and software solutions.
          </p>
          <p className="text-lg text-gray-300 mt-2">
          Beyond development, I’m continuously expanding my knowledge of emerging technologies 
            and best practices to stay ahead in the fast-paced tech industry. I believe in 
            collaboration, efficiency, and building products that make a difference.

          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start mt-6 space-x-4">
            <a href="https://www.facebook.com/share/18bpRP5xzs/" target="_blank" rel="noopener noreferrer">
              <Facebook className="w-8 h-8 p-2 rounded-full bg-white text-blue-600 hover:text-white hover:bg-blue-600 transition" />
            </a>
            <a href="https://www.linkedin.com/in/lahiru-jayarathne-b29676271/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-8 h-8 p-2 rounded-full bg-white text-blue-500 hover:text-white hover:bg-blue-500 transition" />
            </a>
            <a href="mailto:lahirumadhushan80@gmail.com">
              <Mail className="w-8 h-8 p-2 rounded-full bg-white text-gray-600 hover:text-white hover:bg-gray-600 transition" />
            </a>
            <a href="tel:+94766541631">
              <Phone className="w-8 h-8 p-2 rounded-full bg-white text-green-500 hover:text-white hover:bg-green-500 transition" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
