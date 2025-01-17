import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-blueblack py-20 w-full">
        <div className="mx-auto max-w-[107rem] py-0 px-16">
          <div className="flex flex-col gap-10 md:flex-row justify-between items-center">
            <h3 className="text-white text-4xl font-mark font-bold text-center">
              All rights are reserved Copyright &#169; 2024
            </h3>
            <div
              className=" flex flex-row gap-10 items-center
            "
            >
              <a
                href="https://linkedin.com/in/gbadegesin-ridwan-o"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <FaLinkedinIn className="text-4xl text-white cursor-pointer hover:scale-110" />
              </a>
              <a
                href="https://github.com/Gesin1"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="text-3xl text-white cursor-pointer hover:scale-110" />{" "}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
