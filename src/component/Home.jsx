import Ridwan from "../assets/img/ridwan-rm.png";
import html from "../assets/img/html.svg";
import css from "../assets/img/css.svg";
import react from "../assets/img/react.svg";
import js from "../assets/img/js.svg";
import node from "../assets/img/node.svg";
import tailwind from "../assets/img/tailwind.svg";
import handIcon from "../assets/img/handIcon.png";
import GitHub from "../assets/img/GitHub2.svg";
import linkedln from "../assets/img/LinkedIn2.svg";

const Home = () => {
  return (
    <>
      <section className="bg-slate-100 lg:h-screen w-auto relative flex-col ">
        <div className="my-0 mx-auto max-w-[100rem] py-0 px-16">
          <div className="flex flex-col items-center justify-center h-auto lg:h-[61rem] relative gap-12 lg:gap-20  ">
            <div className="flex flex-col-reverse lg:flex-row justify-center items-center h-auto gap-12 lg:gap-40 text-center relative transition-all duration-700 ease-in-out mt-40 ">
              <div className="flex flex-col justify-start max-w-3xl relative ">
                <h1 className="text-blueblack font-mark text-7xl  sm:text-8xl font-extrabold lg:text-start my-8 ">
                  Full-Stack web Developer
                  <img src={handIcon} className="inline" />
                </h1>
                <p className="text-3xl text-stone-600 lg:text-start mb-10">
                  Hello, I'm Gbadegesin Ridwan. A passionate web developer based
                  in Lagos, Nigeria 📍
                </p>
                <span className="flex justify-center lg:justify-start :flex-row gap-6 my-4">
                  <a
                    href="https://linkedin.com/in/gbadegesin-ridwan-o"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={linkedln}
                      alt="linkedin"
                      className="h-[40px] w-[40px]  cursor-pointer"
                    />
                  </a>
                  <a
                    href="https://github.com/Gesin1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={GitHub}
                      alt="GitHub"
                      className="  h-[40px] w-[40px]  cursor-pointer"
                    />
                  </a>
                </span>
              </div>
              <div
                className="block w-96 h-96  sm:w-[32rem] sm:h-[32rem] bg-cover bg-center m-5 shadow-xl animate-animate transition-all 1s ease-in-out bg-slate-200 border-2 border-blue-200 "
                style={{ backgroundImage: `url(${Ridwan})` }}
              ></div>
            </div>
            <div className="lg:absolute left-0 bottom-0 lg:-bottom-48 flex flex-col justify-center items-center ">
              <div className=" flex flex-col justify-center items-center my-20 lg:flex-row ">
                <h1 className="font-karla font-bold text-2xl capitalize mb-1 lg:mb-0 lg:mr-6">
                  My Tech skill
                </h1>
                <div className="w-36 h-[0.25rem] lg:w-[.25rem] lg:h-8 lg:mr-20  bg-stone-400 mb-6 lg:mb-0"></div>
                <div className="flex gap-6 lg:gap-10 flex-wrap justify-center items-center">
                  <div className="flex gap-2 transition-all duration-300 ease-linear hover:-translate-y-4  cursor-pointer">
                    <img src={html} alt="logo" />
                    <img src={css} alt="logo" />
                  </div>
                  <div className="flex gap-2 transition-all duration-300 ease-linear hover:-translate-y-4  cursor-pointer">
                    <img src={tailwind} alt="logo" />
                    <img src={js} alt="logo" />
                  </div>
                  <div className="flex gap-2 transition-all duration-300 ease-linear hover:-translate-y-4 cursor-pointer">
                    <img src={react} alt="logo" />
                    <img src={node} alt="logo" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

// border-2 border-red-600
