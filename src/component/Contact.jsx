import link from "../assets/img/link.svg";
import mail from "../assets/img/mail.svg";
import github from "../assets/img/github.svg";

const Contact = () => {
  return (
    <>
      <section id="contact" className="bg-white py-32 lg:pt-28 lg:py-64">
        <div className="my-0 mx-auto max-w-[107rem] py-0 px-16 ">
          <div className="text-center lg:text-start ">
            <h1 className="text-6xl text-blue-500 underline underline-offset-4 font-mark font-bold mb-10 text-center ">
              Contact ME
            </h1>
            <p className="sm:text-5xl text-4xl font-bold text-blueblack text-center mb-16">
              You have project! Don't be shy and Hit me up👇
            </p>
          </div>
          <div className=" grid lg:grid-cols-3 gap-8">
            <a
              href="https://linkedin.com/in/gbadegesin-ridwan-o"
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex flex-row border border-stone-500 rounded-xl shadow-lg py-10 pl-14 bg-stone-100 items-center transition-all duration-700 ease-in-out  hover:shadow-3xl hover:shadow-black hover:bg-white cursor-pointer">
                <img src={link} alt="linkedln" className="w-[55px] h-[55px]" />
                <div className="flex flex-col ml-8">
                  <h1 className="ms:text-5xl text-4xl text-blueblack font-bold ">
                    Linkedln
                  </h1>
                  <p className="text-2xl text-stone-500 font-semibold">
                    Connect with me.
                  </p>
                </div>
              </div>
            </a>
            <a
              href="https://gbadegesinridwan611@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex flex-row border border-stone-500 rounded-xl shadow-lg py-10 pl-14 bg-stone-100 items-center transition-all duration-700 ease-in-out  hover:shadow-3xl hover:shadow-black hover:bg-white cursor-pointer">
                <img src={mail} alt="Email" className="w-[55px] h-[55px]" />
                <div className="flex flex-col ml-8">
                  <h1 className="ms:text-5xl text-4xl text-blueblack font-bold ">
                    Email
                  </h1>
                  <p className="text-2xl text-stone-500 font-semibold">
                    Let's get in touch.
                  </p>
                </div>
              </div>{" "}
            </a>
            <a
              href="https://github.com/Gesin1"
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex flex-row border border-stone-500 rounded-xl shadow-lg py-10 pl-14 bg-stone-100 items-center transition-all duration-700 ease-in-out  hover:shadow-3xl hover:shadow-black hover:bg-white cursor-pointer">
                <img src={github} alt="gitHub" className="w-[55px] h-[55px]" />
                <div className="flex flex-col ml-8">
                  <h1 className="ms:text-5xl text-4xl text-blueblack font-bold ">
                    GitHub
                  </h1>
                  <p className="text-2xl text-stone-500 font-semibold">
                    Check out my work.
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
