export const Home = () => {
  return (
    <section>
      <nav>
        <div className="flex md:justify-between justify-center items-center mx-auto px-12 ">
          <div className="items-center">
            <img src="/lms logo.png" alt="logo" className="w-56" />
          </div>

          <div className="hidden md:flex bg-[#4400c7] rounded-lg py-2 px-6 text-white cursor-pointer border-2 border-transparent hover:bg-transparent hover:text-[#4400c7] hover:border-2 hover:border-[#4400c7] transition-all duration-500 ease-in-out ">
            <a href="#">Join Waitlist</a>
          </div>
        </div>
      </nav>

      
    </section>
  );
};
