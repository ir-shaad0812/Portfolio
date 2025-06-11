import styles from './ProjectsStyles.module.css';
import invoice from '../../assets/invoice.png';
import freshBurger from '../../assets/fresh-burger.png';
import sundown from '../../assets/sundown.png';
// import fitLift from '../../assets/fitlift.png';
import Blood_Don from '../../assets/Blood_Don.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={Blood_Don}
          link="https://github.com/ir-shaad0812/Blood_Donation"
          h3="Blood_Donation"
          p="Blood Donation "
        />

          <ProjectCard
          src={sundown}
          link="https://github.com/ir-shaad0812/SundownStudio_c"
          h3="SnowdownClone"
          p="Snowdown Clone"
        />

        <ProjectCard
          src={invoice}
          link="https://github.com/ir-shaad0812/BRJ_Invoice_Python"
          h3="BRJ Invoice generater" 
          p="Invoice Generater"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/ir-shaad0812/GUI_Java"
          h3="GUI 0f Store Management"
          p="Store Management"
        />
      
       
      </div>
    </section>
  );
}

export default Projects;
