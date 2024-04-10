import { FaEnvelope, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="container mx-auto mt-10 mb-20 border max-w-5xl rounded-md p-4">
      <div className="text-center ">
        <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center">
          Contact Us
        </h2>
        <p className="text-lg lg:text-xl leading-relaxed mb-2">
          Have a question or want to discuss a project?
        </p>
        <p className="text-lg lg:text-xl leading-relaxed mb-2">
          Feel free to reach out to us via email or connect with us on social
          media.
        </p>

        <div className="flex items-center justify-center  mb-4">
          <a
            href="mailto:your.email@example.com"
            className="flex items-center text-lg text-center lg:text-xl mr-6"
          >
            <FaEnvelope className="mr-2" />
            techsyntx@gmail.com
          </a>
        </div>
        <div className="flex items-center justify-center ">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-600 transition duration-300 mr-4"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-400 transition duration-300 mr-4"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900 transition duration-300"
          >
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
