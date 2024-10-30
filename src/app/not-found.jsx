const NotFoundPage = () => {
  return (
    <div className="container flex gap-20 justify-center items-center h-[40vh]">
      <div className="text-7xl ">404</div>
      <p className="border"></p>
      <div className="object-cover">
        <div className="font-semibold text-2xl">Page not found</div>
        <div className="text-[#696A75] mb-7 ">
          We are sorry, This page is unknown or does <br /> not exist the page
          you are looking for
        </div>
        <div className="bg-[#4B6BFB] w-fit p-2 text-white rounded-md text-center font-medium text-sm">
          Back To Home
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
