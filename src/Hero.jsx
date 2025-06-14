export const Hero = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center  h-[50vh]  ">
        <h1 className="font-bold text-4xl text-center md:text-6xl mb-6">
          Be the First to Know
          <span className="block md:hidden">
            {" "}
            and Get <span className="text-[#4400c7]">20%</span> Off!
          </span>
          <span className="hidden md:inline">
            <br />
            and Get <span className="text-[#4400c7]">20%</span> Off!
          </span>
        </h1>

        <p className="text-center w-full md:w-1/2 px-6">
          We’re launching soon! Be the first to access courses at Apex Tech
          Online Academy and enjoy an exclusive 20% discount on any course when
          you sign up early.{" "}
        </p>
      </div>
    </section>
  );
};
