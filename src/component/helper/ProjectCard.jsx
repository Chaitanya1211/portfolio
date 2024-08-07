import githubImg from "../../assets/images/techlogo/github-logo.png"
export function ProjectCard({ project }) {
    return (
        <>
            <div className="col-lg-3 mx-3">
                <div className="blog-wrapper">
                    <div className="blog-img">
                        <img src={project.coverImage} className="img-fluid" />
                        <a href={project.github} target="blank">
                            <div className="githubIcon py-1 px-0">
                                <img src={githubImg} alt="" className="mx-1" width="35px" height="35px" />
                            </div>
                        </a>
                    </div>
                    <div className="p-3">
                        <h5 className="mb-2"><strong>{project.title}</strong></h5>
                        <h6 className="text-muted project-desc border-bottom">{project.description}</h6>
                        {/* <h6 className="m-0"><strong>Technologies</strong></h6> */}
                        <div className="d-flex align-items-center pt-1">
                            {
                                project.techStack && project.techStack.map((icon) => {
                                    return (
                                        <img src={icon} alt="" className="mx-1" width="35px" height="35px" />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}