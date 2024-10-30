import Image from "next/image";

export const TrendingCard = ({ image, tag, title }) => {
  return (
    <article className="relative w-full h-80 rounded-xl overflow-hidden">
      <Image
        className="absolute w-full h-full object-cover"
        src={image}
        width={289}
        height={320}
        alt={title}
      />
      <div className="relative w-full h-full flex flex-col justify-end bg-[#141624]/40 p-7">
        <div className="bg-[#4B6BFB] py-1 px-3 inline text-white text-xs rounded-md font-medium w-fit">
          {tag}
        </div>
        <div className="text-white font-semibold text-lg">{title}</div>
      </div>
    </article>
  );
};
