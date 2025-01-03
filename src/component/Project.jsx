import hosthouse from "../assets/img/hosthouse.webp";
import profileproject from "../assets/img/3dportfolio.webp";
import comingsoon from "../assets/img/comingsoon.webp";

const Project = () => {
  return (
    <>
      <section className="bg-slate-100 py-32 lg:py-40">
        <div className="my-0 mx-auto max-w-[107rem] py-0 px-16 ">
          <div className="text-center">
            <h1 className="font-mark text-6xl font-bold text-blueblack underline underline-offset-8 mb-20">
              Project💻 I have work on
            </h1>
          </div>
          <div className=" grid lg:grid-cols-3 gap-8">
            <div className="flex flex-col justify-center border border-stone-500 rounded-xl shadow-lg px-10 py-10 bg-stone-100 items-center transition-all duration-700 ease-in-out  hover:shadow-3xl hover:shadow-black hover:bg-white ">
              <img
                src={hosthouse}
                alt="house Porject"
                className="object-cover rounded-xl mb-4 h-[300px] w-[300px]"
              />
              <div className="flex flex-col items-center ">
                <h1 className="ms:text-5xl text-4xl text-blueblack font-bold ">
                  Host your house
                </h1>
                <p className="text-2xl text-stone-500 font-semibold">
                  Host-House is a property listing platform where users can rent
                  or buy properties. Built with cutting-edge technologies like
                  Next.js 14, Prisma, Supabase, Tailwind CSS, and Clerk for
                  secure authentication, it offers a seamless and modern user
                  experience.
                </p>
                <div className="flex justify-between items-center mt-4 w-full">
                  <a
                    href="https://host-house.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-500 font-bold text-lg"
                  >
                    <button className="border p-3 rounded-md border-blue-500 hover:bg-blue-500 hover:text-white">
                      View Project
                    </button>
                  </a>
                  <a
                    href="https://github.com/Gesin1/Host-House"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-500 font-bold text-lg"
                  >
                    <button className="border py-3 px-10 rounded-md border-blue-500 hover:bg-blue-500 hover:text-white">
                      Github
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center border border-stone-500 rounded-xl shadow-lg px-10 py-10 bg-stone-100 items-center transition-all duration-700 ease-in-out  hover:shadow-3xl hover:shadow-black hover:bg-white ">
              <img
                src={profileproject}
                alt="3d Portfolio"
                className="object-cover rounded-xl mb-4 h-[300px] w-[300px]"
              />
              <div className="flex flex-col items-center ">
                <h1 className="ms:text-5xl text-4xl text-blueblack font-bold ">
                  3D Portfolio
                </h1>
                <p className="text-2xl text-stone-500 font-semibold">
                  A modern, interactive portfolio built with Tailwind CSS,
                  Three.js, TypeScript, and Three-Globe.
                  <br /> It highlights my skills and projects using responsive
                  design and 3D visualizations, creating an engaging
                  experience.Technologies Used: Tailwind CSS, Three.js,
                  TypeScript....
                </p>
                <div className="flex justify-between items-center mt-4 w-full">
                  <a
                    href="https://gbadegesinprofile.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-500 font-bold text-lg"
                  >
                    <button className="border p-3 rounded-md border-blue-500 hover:bg-blue-500 hover:text-white">
                      View Project
                    </button>
                  </a>
                  <a
                    href="https://github.com/Gesin1/LandingPageProfile"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-500 font-bold text-lg"
                  >
                    <button className="border py-3 px-10 rounded-md border-blue-500 hover:bg-blue-500 hover:text-white">
                      Github
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center border border-stone-500 rounded-xl shadow-lg px-10 py-10 bg-stone-100 items-center transition-all duration-700 ease-in-out  hover:shadow-3xl hover:shadow-black hover:bg-white ">
              <img
                src={comingsoon}
                alt="3d Portfolio"
                className="object-cover rounded-xl mb-4 h-[300px] w-[300px]"
              />
              <div className="flex flex-col items-center ">
                <h1 className="ms:text-5xl text-4xl text-blueblack font-bold ">
                  More project coming soon 💻😎
                </h1>
                <p className="text-2xl text-stone-500 font-semibold">
                  Exciting updates are on the way! Stay tuned for more
                  innovative projects that showcase my skills in modern web
                  development and design. From 3D visualizations to dynamic
                  interfaces, there's much more to explore in the near future.
                </p>
                {/* <div className="flex justify-between items-center mt-4 w-full">
                  <a
                    href="https://gbadegesinprofile.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-500 font-bold text-lg"
                  >
                    <button className="border p-3 rounded-md border-blue-500 hover:bg-blue-500 hover:text-white">
                      View Project
                    </button>
                  </a>
                  <a
                    href="https://github.com/Gesin1/LandingPageProfile"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-500 font-bold text-lg"
                  >
                    <button className="border py-3 px-10 rounded-md border-blue-500 hover:bg-blue-500 hover:text-white">
                      Github
                    </button>
                  </a>
                </div> */}
              </div>
            </div>
          </div>
          {/* <h2 className="text-blueblack text-4xl font-karla font-bold text-center mt-6">
            More project coming soon 💻😎
          </h2> */}
        </div>
      </section>
    </>
  );
};

export default Project;
