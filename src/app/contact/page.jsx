const Contact = () => {
  return (
    <div className="container">
      <div className="w-[643px] mx-auto">
        <div className="font-semibold text-4xl mb-5">Contact Us</div>
        <div className="text-[#696A75]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam. Lorem ipsum <br /> dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut <br /> labore et
          dolore magna aliqua. Ut enim ad minim veniam
        </div>
      </div>
      <div className="flex gap-14 mb-7 w-[643px] mx-auto">
        <div className="border border-[#E8E8EA] w-72 h-32 rounded-xl mt-5">
          <div className="text-2xl font-semibold m-4">Address</div>
          <div className="ml-4 text-[#696A75]">
            1328 Oak Ridge Drive, Saint <br /> Louis, Missouri
          </div>
        </div>
        <div className="border border-[#E8E8EA] w-72 h-32 rounded-xl mt-5">
          <div className="text-2xl font-semibold m-4">Contact</div>
          <div className="ml-4 text-[#696A75]">
            313-332-8662 <br /> info@email.com
          </div>
        </div>
      </div>
      <div className="w-[643px] mx-auto h-[440px] bg-[#F6F6F7] mb-24 rounded-xl">
        <div className="ml-9 items-center">
          <div className="font-semibold text-lg mb-6">Leave a Message</div>
          <div className="flex gap-7 mb-5">
            <input
              className="border border-[#DCDDDF] rounded-md w-56 h-10 px-4"
              type="text"
              placeholder="Your Name"
            />
            <input
              className="border border-[#DCDDDF] rounded-md w-56 h-10 px-4"
              type="text"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-5">
            <input
              className="border border-[#DCDDDF] rounded-md w-[478px] h-[35px] px-4"
              type="text"
              placeholder="Subject"
            />
          </div>
          <div className="mb-8">
            <input
              className="border border-[#DCDDDF] rounded-md w-[478px] h-[134px] px-4 pb-24"
              type="text"
              placeholder="Write a message"
            />
          </div>
          <button>
            <div className="bg-[#4B6BFB] w-fit p-2 text-white rounded-md text-center font-medium">
              Send Message
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
