import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="bg-[#F6F6F7] flex flex-col py-16 gap-6">
      <div className="flex justify-between container">
        <div>
          <div className="text-[#181A2A] font-semibold font-xl mb-3">About</div>
          <div className="text-[#696A75] mb-6">
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit, sed
            do <br />
            eiusmod tempor incididunt ut labore <br /> et dolore magna aliqua.
            Ut enim ad <br />
            minim veniam
          </div>
          <div>
            <div className="flex gap-1">
              <p className="font-semibold">Email :</p>
              <p className="text-[#3B3C4A]">info@jstemplate.net</p>
            </div>
            <div className="flex gap-1">
              <p className="font-semibold">Phone :</p>
              <p className="text-[#3B3C4A]">880 123 456 789</p>
            </div>
          </div>
        </div>
        <div className="text-[#3B3C4A]">
          <div>Home</div>
          <div>Blog</div>
          <div>Contact</div>
        </div>
        <div className="flex h-4 gap-6">
          <Image src="/Negative.png" width={16} height={16} alt="" />
          <Image src="/Vector.png" width={16} height={16} alt="" />
          <Image src="/Instagram.png" width={16} height={16} alt="" />
          <Image src="/Link.png" width={16} height={16} alt="" />
        </div>
      </div>

      <div className="flex justify-center gap-80 border-t-2 border-[#DCDDDF] pt-5">
        <Link href="/">
          <Image src="/LogoFooter.png" width={231} height={54} alt="" />
        </Link>
        <div className="flex items-center">
          <div className="text-[#3B3C4A] border-r-2 border-[#E8E8EA] pr-4 pl-48">
            Terms of use
          </div>
          <div className="text-[#3B3C4A] border-r-2 border-[#E8E8EA] pr-4 pl-4">
            Privacy Policy
          </div>
          <div className="text-[#3B3C4A] border-r-2 border-[#E8E8EA] pr-4 pl-4">
            Cookie Policy
          </div>
        </div>
      </div>
    </div>
  );
};
