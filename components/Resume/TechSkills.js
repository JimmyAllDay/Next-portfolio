import Link from "next/link";

import { Icon } from "@iconify/react";

export default function TechSkills() {
  return (
    <div className="resume__comp" id="techSkills">
      <div className="resume__comp-header-bg">
        <div className="resume__comp-header-margin"></div>
        <h3 className="resume__comp-title">Tech Skills</h3>
      </div>
      <div className="row resume__comp-body">
        <p>I use the following technologies:</p>
        <div className="col">
          <i className="d-flex justify-content-center mt-2">
            <h1>
              <Icon icon="ion:logo-javascript" style={{ color: "#f0db4f" }} />
            </h1>
          </i>
        </div>

        <div className="col">
          <i className="d-flex justify-content-center mt-2">
            <h1>
              <Icon icon="akar-icons:react-fill" style={{ color: "#61DBFB" }} />
            </h1>
          </i>
        </div>

        <div className="col">
          <i className="d-flex justify-content-center mt-2">
            <h1>
              <Icon icon="akar-icons:node-fill" style={{ color: "#3c873a" }} />
            </h1>
          </i>
        </div>

        <div className="col">
          <i className="d-flex justify-content-center mt-2">
            <h1>
              <Icon icon="mdi:language-html5" style={{ color: "#e34f26" }} />
            </h1>
          </i>
        </div>

        <div className="col">
          <i className="d-flex justify-content-center mt-2">
            <h1>
              <Icon icon="ion:logo-css3" style={{ color: "#2965f1" }} />
            </h1>
          </i>
        </div>

        <div className="col">
          <i className="d-flex justify-content-center mt-2">
            <h1>
              <Icon
                icon="akar-icons:bootstrap-fill"
                style={{ color: "#563d7c" }}
              />
            </h1>
          </i>
        </div>

        <div className="col">
          <i className="d-flex justify-content-center mt-2">
            <h1>
              <Icon icon="fontisto:sass" style={{ color: "#CD6D93" }} />
            </h1>
          </i>
        </div>
        <p className="mt-5">
          My portfolio, demonstrating my use of these skills, is{" "}
          {/* <Link to="/#work" className="print-hide">
            here
          </Link> */}
          <a href="https://jimmyallday.github.io/react-portfolio/">here</a>.
        </p>
      </div>
    </div>
  );
}
