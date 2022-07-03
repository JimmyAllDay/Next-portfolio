import Image from "next/image";
const jamesPic2 = require("../../public/images/James_Marshall2.jpg");

function About() {
  return (
    <div className="text-dark p-6">
      <div className="relative">
        <h2 className="sm:text-5xl text-4xl mb-1 px-2">About me</h2>
        <p className="bg-accent text-xl font-secondary p-2 sm:pr-[260px] mb-1">
          Javascript Developer based in Melbourne, Australia
        </p>
        <p className="mb-2 px-2 sm:pr-[250px]">
          Innately curious with a passion for learning and problem solving, I
          have spent my professional life working to improve society as an
          officer of the Australian Public Service. As I look to transition into
          tech, I am motivated by the idea that technology offers a means of
          scaling effort, to orders of magnitude beyond what can be achieved
          with person-power alone. I see tech and tech skills as a force for
          positive change that opens up a multitude of opportunities, not only
          to help individuals but to contribute to better societies and, even if
          only incrementally, a better world.
        </p>
        <div className="sm:w-[210px] max-w-[350px] ml-auto pl-2 sm:absolute sm:mr-5 about-pic">
          <Image src={jamesPic2} alt="" />
        </div>
      </div>
    </div>
  );
}

export default About;
