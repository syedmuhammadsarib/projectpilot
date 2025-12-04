import { useEffect, useState } from 'react';
import { projectAPI } from './projectAPI';
import ProjectList from './ProjectList';
import { MOCK_PROJECTS } from './MockProjects';

function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    projectAPI
      .get(1)
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((e) => {
        if (e.message.includes('404')) {
          setProjects(MOCK_PROJECTS);
        } else {
          setError(e.message);
        }
        setLoading(false);
      });
  }, []);

  const saveProject = (project) => {
    let updatedProjects;
    if (project.id) {
      updatedProjects = projects.map((p) => {
        return p.id === project.id ? project : p;
      });
    } else {
      const newProject = {
        ...project,
        id: Math.max(...projects.map((p) => p.id), 0) + 1,
      };
      updatedProjects = [...projects, newProject];
    }
    setProjects(updatedProjects);
  };

  return (
    <>
      <h1>Projects</h1>

      {loading && (
        <div className="center-page">
          <span className="spinner primary"></span>
          <p>Loading...</p>
        </div>
      )}

      {error && (
        <div className="row">
          <div className="card large error">
            <section>
              <p>
                <span className="icon-alert inverse "></span> {error}
              </p>
            </section>
          </div>
        </div>
      )}

      {!loading && !error && (
        <ProjectList projects={projects} onSave={saveProject} />
      )}
    </>
  );
}

export default ProjectsPage;