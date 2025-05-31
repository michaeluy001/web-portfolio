const ContactMe = () => {
  const labelBaseStyle =
    "absolute top-0  -translate-1/2 text-gray-400 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-1/2  px-2  bg-gray-300";
  return (
    <>
      <form
        action="https://formspree.io/f/xrbkzqkz"
        method="POST"
        className="space-y-5 lg:mx-auto"
      >
        <p className="text-xl my-10 text-gray-500 text-center">Let's Collaborate!</p>
        <div className="relative w-fit">
          <input
            name="email"
            id="email"
            className=" h-8 w-50 border border-gray-400 outline-gray-500 rounded-2xl p-6"
          />
          <label htmlFor="email" className={`${labelBaseStyle} left-10 `}>
            Email
          </label>
        </div>
        <div className="relative lg:w-fit">
          <textarea
            id="message"
            name="message"
            className=" h-100 w-full lg:w-150 border outline-xs border-gray-400 outline-gray-500 rounded-2xl  p-6"
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
