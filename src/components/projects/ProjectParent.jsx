import { Projectdata } from "../../constants/Projcetdatas.js"
import ProjectChild from "./ProjectChild"

function ProjectParent() {
  return (
    <>
    <h1 className="pt-20 text-center font-bold uppercase text-green-400">My Projects</h1>
    <div className="grid sm:grid-cols-3 gap-6 text-center m-5" >
        {
            Projectdata.map((proj)=>(
                <ProjectChild
                key={proj.id}
                image={proj.image}
                title={proj.title}
                description={proj.description}
                url={proj.url}
                button={proj.button}

                
                />

            ))
        }
    </div>
    </>

  )
}

export default ProjectParent