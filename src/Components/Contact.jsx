import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const ContactMe = () => {
  const labelBaseStyle =
    "absolute top-0 -translate-1/2 text-gray-400 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-1/2  px-2  bg-gray-200";
  return (
    <>
      <form
        action="https://formspree.io/f/xrbkzqkz"
        method="POST"
        className="space-y-5 lg:mx-auto "
      >
        <div className="relative w-full flex items-center justify-between">
          <input
            name="email"
            id="email"
            className=" h-8 w-50 border border-gray-400 outline-gray-500 rounded-2xl p-6"
          />
          <label htmlFor="email" className={`${labelBaseStyle} left-10 `}>
            Email
          </label>
          <Socials />
        </div>
        <div className="relative lg:w-fit">
          <textarea
            id="message"
            name="message"
            className=" h-70 md:h-100 w-full lg:w-150 border outline-xs border-gray-400 outline-gray-500 rounded-2xl  p-6"
            placeholder=" "
          />
          <label htmlFor="message" className={`${labelBaseStyle} left-20 `}>
            Your Message
          </label>
        </div>
        <div className="flex justify-end ">
          <input
            type="submit"
            className="border px-5  border-gray-400 bg-gray-500 active:scale-90 hover:scale-105 transition text-white rounded-2xl cursor-pointer"
          />
        </div>
      </form>
    </>
  );
};

export default ContactMe;

const Socials = () => {
  return (
    <>
      <div className="flex text-3xl gap-5 cursor-pointer ">
        <a href="https://www.facebook.com/mikeuy001" target="_blank">
          <FaFacebook className="hover:scale-105" />
        </a>
        <a href="https://www.instagram.com/uymikael/" target="_blank">
          <FaInstagram className="hover:scale-105" />
        </a>
      </div>
    </>
  );
};
