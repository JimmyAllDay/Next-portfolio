import Image from "next/image";
const jamesPic2 = require("../../public/images/James_Marshall2.jpg");

function About() {
  return (
    <div className="text-dark p-5 max-w-4xl mx-auto" id="about">
      <div className="relative flex flex-col">
        <h2 className="sm:text-5xl text-4xl mb-1 px-2 sm:ml-auto">About me</h2>
        <p className="bg-light text-accent text-xl font-secondary p-2 sm:pl-[250px] sm:text-right border-t border-dark">
          Javascript Developer based in Melbourne, Australia
        </p>
        <div className="sm:pl-[250px] sm:text-right px-2">
          <p>
            Innately curious with a passion for learning and problem solving, I
            have spent my professional life working to improve society as an
            officer of the Australian Public Service. As I look to transition
            into tech, I am motivated by the idea that technology offers a means
            of scaling effort, to orders of magnitude beyond what can be
            achieved with person-power alone. I see tech and tech skills as a
            force for positive change that opens up a multitude of
            opportunities, not only to help individuals but to contribute to
            better societies and, even if only incrementally, a better world.
          </p>
        </div>
        <div className="sm:w-[210px] max-w-[350px] pl-2 sm:absolute about-pic">
          <Image src={jamesPic2} alt="" />
        </div>
      </div>
    </div>
  );
}

export default About;
