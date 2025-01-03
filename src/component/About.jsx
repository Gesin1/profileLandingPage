import Gbadegesin from "../assets/img/Gbadegesin.png";

const About = () => {
  return (
    <>
      <section id="about" className="bg-white py-32">
        <div className="my-0 mx-auto max-w-[107rem] py-0 px-16 ">
          <div className="text-center">
            <h1 className="font-mark text-6xl font-bold text-blue-500 underline underline-offset-8 mb-10">
              About me
            </h1>
          </div>
          <div className=" grid grid-cols-1 lg:grid-cols-2 justify-center items-center text-center lg:text-start place-items-center lg:place-items-start ">
            <img
              src={
                "https://images.unsplash.com/photo-1612653030120-4acd623d351a?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                My name is Ridwan, I am a talented entrepreneur and a full stack
                developer. I have work in many field of life. I found myself
                following my dad to site as an electrician which make me a
                professional in that field and I went on to read electrical and
                computer engineering in University. I have passion in building
                something that is working so I started a tech company which make
                me learn many skill like product management, sale, uiux and
                leadership skill.
                <br />
                <br />I initially started coding when my company filed due to
                lack of my expertise in frontend and backend field and since I
                have little or no money to employ good one. It's a big decision
                for me to change my career to developer, but I love it because
                it make me help lot of business.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
