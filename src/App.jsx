import { useState } from "react";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import ProjectsSidebar from "./components/ProjectsSidebar.jsx";
import SelectedProject from "./components/SelectedProject.jsx";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects : [],
    tasks: []
  });

  function handleAddTasks(text){
    setProjectState(prevState => {
      
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: projectState.selectedProjectId,
        id : taskId
      }

      return {
        ...prevState,
        tasks : [...prevState.tasks,newTask],
      };
    })
  }

  function handleDeleteTasks(id){
    setProjectState(prevState => {
      return {
        ...prevState,
        tasks : prevState.tasks.filter((task) => task.id !== id)
      }
    })
  }

  function handleSelectProject(id){
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: id
      }
    })
  }

  function handleStartAddProject()
  {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null
      }
    })
  }

  function handleCancelAddProject(){
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined
      }
    })
  }

  function handleAddProject(projectData){

    setProjectState(prevState => {
      
      const ProjectId = Math.random();
      const newProject = {
        ...projectData,
        id : ProjectId
      }

      return {
        ...prevState,
        selectedProjectId : undefined,
        projects : [...prevState.projects,newProject],
      };
    })
  }

  function handleDeleteProject(){
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects : prevState.projects.filter((project) => project.id !== prevState.selectedProjectId)
      }
    })
  }

  const selectedProject = projectState.projects.find(project => project.id === projectState.selectedProjectId)
  
  console.log(projectState)

  let content = <SelectedProject project={selectedProject} onDelete={handleDeleteProject} onAddTask={handleAddTasks} onDeleteTask={handleDeleteTasks} tasks={projectState.tasks} />;
  if(projectState.selectedProjectId === null){
    content = <NewProject onCancel={handleCancelAddProject} onAdd={handleAddProject} />
  }else if(projectState.selectedProjectId === undefined){
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onStartAddProject={handleStartAddProject}
        onSelectProject={handleSelectProject}
        projects={projectState.projects}
        selectedProjectId={projectState.selectedProjectId} />
      {content}
    </main>
  );
}

export default App;
