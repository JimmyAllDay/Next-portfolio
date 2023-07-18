export default function Overview() {
  return (
    <div className="max-w-5xl mx-auto">
      <div
        className="inline-flex pl-5 pr-2 pt-[0.1em] pb-[0.25em]"
        id="overview"
      >
        <h3 className="text-2xl font-secondary text-accent">Overview</h3>
      </div>
      <div className="px-5 py-2">
        <p>
          I am currently transitioning to a career in web development.
          Prospective employers will see from my{' '}
          <a
            href="https://github.com/JimmyAllDay?tab=repositories"
            className="hover:cursor-pointer text-accent"
          >
            GitHub
          </a>{' '}
          repository that I have foundational Javascript programming skills,
          including in the use of vanilla Javascript, HTML, CSS, Sass,
          Bootstrap, Tailwind, React, Node, Next.js, Jest and React Testing
          Library. In May of 2021, I completed a{' '}
          <i>Front End Developer Nano-Degree</i> certificate through Udacity. In
          November 2021, I completed a further nano-degree certificate in React,
          which included training in Redux. <br /> <br />I am attracted to roles
          where I will help realise an entrepreneurial vision, such as roles
          within innovative or start-up companies. Sustained by a sincere
          passion for tech and web development, I often work on projects late
          into the night. Employers will maximise my value by placing me in
          roles where I can harness this work ethic, while learning from more
          experienced developers.
        </p>
      </div>
    </div>
  );
}
