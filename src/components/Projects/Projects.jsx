/* eslint-disable react/jsx-no-target-blank */
import s from "./Projects.module.css";

import Project from "./Project/Project";

const Projects = (props) => {
  let projectElements = props.projectsState.map((s) => (
    <Project
      title={s.title}
      key={s.id}
      discription={s.discription}
      img={s.img}
      href={s.href}
    />
  ));

  return (
    <section className={s.project} id="projects">
      <div className="container">
        <h2 className={s.project__title}>Мои Работы</h2>
      </div>
      <div className="container">
        <div className={s.project__inner}>{projectElements}</div>
      </div>
    </section>
  );
};

export default Projects;
