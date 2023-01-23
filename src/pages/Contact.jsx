import {
  FaFacebookF,
  FaRss,
  FaTwitter,
  FaDribbble,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div classNameName="">
      <section className="text-gray-600 body-font relative ">
        <div className="container px-5 py-24 mx-auto ">
          <div className="flex flex-col text-center w-full mb-12 animate-bounce">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Contact Me
            </h1>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2 ">
              <div className="p-2 w-1/2">
                <div className="relative ">
                  <label for="name" className="leading-7 text-sm text-gray-600">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    for="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    for="message"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white  border-0 py-2 px-8 focus:outline-none bg-yellow-300  hover:bg-red-600 rounded text-lg">
                  Send
                </button>
              </div>
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <a className="text-indigo-500">
                  belgaila.mohamed.zakaria@gmail.com
                </a>
                <br />
                <span className="inline-flex">
                  <div className="icons flex justify-center align-center py-12 gap-14  md:gap-14">
                    <a
                      href="https://web.facebook.com/Belgaila.mohamed.zakaria"
                      target="_blank"
                      className="p-2 bg-yellow-300 hover:bg-red-600"
                    >
                      <FaFacebookF color="white" className="text-lg" />
                    </a>

                    <a
                      href="http://"
                      target="_blank"
                      className="p-2 bg-yellow-300 hover:bg-red-600"
                    >
                      <FaLinkedin color="white" className="text-lg" />
                    </a>

                    <a
                      href="https://github.com/BMZ89/"
                      target="_blank"
                      className="p-2 bg-yellow-300 hover:bg-red-600"
                    >
                      <FaGithub color="white" className="text-lg" />
                    </a>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Contact;
