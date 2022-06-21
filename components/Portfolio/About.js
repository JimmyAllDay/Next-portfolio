import Image from "next/image";
const jamesPic2 = require("../../public/images/James_Marshall2.jpg");

function About() {
  return (
    <div className="p-5 my-5 about-me" id="about">
      <h2 className="section__title section__title--about">About me</h2>
      <p className="section__subtitle section__subtitle--about">
        Developer based in Melbourne, Australia
      </p>

      <div className="about-me__body">
        <p>
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
      </div>

      <Image
        priority
        src={jamesPic2}
        className="inline-block h-16 w-12"
        height={200}
        width={144}
        alt=""
      />
    </div>
  );
}

export default About;
