function ProjectChild(props) {
  return (
    <div>
        <div className="border border-gray-300 m-4 p-4">
            <img src={props.image} alt={props.title} />
            <h1 className="text-green-700 font-semibold text-xl">{props.title}</h1>
            <p className="text-gray-800 text-sm leading-6">{props.description}</p>
            <a href={props.url} target="_blank">
                <button className="bg-green-500 px-6 py-2 text-white font-semibold m-2">{props.button}</button>
            </a>
        </div>

    </div>
  )
}

export default ProjectChild


//props are used to pass data from one react component to another usually from a parent component to a child component.

