import Gbadegesin from "../assets/img/Gbadegesin.png";

const About = () => {
  return (
    <>
      <section className="bg-white py-32">
        <div className="my-0 mx-auto max-w-[107rem] py-0 px-16 ">
          <div className="text-center">
            <h1 className="font-mark text-6xl font-bold text-blue-500 underline underline-offset-8 mb-10">
              About me
            </h1>
          </div>
          <div className=" grid grid-cols-1 lg:grid-cols-2 justify-center items-center text-center lg:text-start place-items-center lg:place-items-start ">
            <img
              src={
                "https://www.stefantopalovic.com/static/media/about-img.62b47e7f183d4b4e9feb.webp"
              }
              alt="Gbadegsein"
              className="h-[35rem] w-[41rem] mt-12 rounded-3xl"
            />
            <div className="pr-6 max-w-[54rem] my-0 mx-auto">
              <h4 className="text-4xl font-extrabold text-blueblack mt-12 mb-6">
                Full-stack web developer
                <br />
                based in Lagos, Nigeria📍
              </h4>
              <p className="text-3xl font-karla  ">
                My name is Raul and I am a talented barber and full stack
                developer. I have been working in the barbering industry for
                three decades and have developed a keen eye for details. In my
                free time, I enjoy listening to music and drawing, I have always
                had a love for music and find that it helps to relax and inspire
                me in my work.
                <br />
                <br />I initially started coding as a hobby, but quickly
                realized that it was something I was truly passionate about and
                decided to pursue a career change. It was a big decision, but I
                am excited to be able to do what I love and help others in the
                process
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
