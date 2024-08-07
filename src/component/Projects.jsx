import { useEffect, useState } from "react";
import { SectionHeader } from "./helper/SectionHeader";
import { SectionSubHead } from "./helper/SectionSubHead";
import { ProjectCard } from "./helper/ProjectCard";
import flutter from "../assets/data/androidProject.json";
import web from "../assets/data/webProjects.json";
import oth from "../assets/data/otherProjects.json";
export function Projects() {
    return (
        <>
            <section className="pad">
                <div className="container">
                    <SectionHeader heading={"Projects"} />
                    <SectionSubHead subhead={"From innovative concepts to fully realized applications, explore my diverse range of projects across different platforms. Whether it's Android development, web applications, or other creative endeavors, each project showcases my passion and technical expertise."} />

                    <nav class="d-flex justify-content-center my-4">
                        <div class="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                            <a class="nav-item nav-link active mx-3" data-toggle="tab" href="#nav-AND" role="tab"
                                aria-controls="nav-AND" id="nav-AND-tab" aria-selected="true">Android</a>
                            <a class="nav-item nav-link mx-3" data-toggle="tab" href="#nav-WEB" role="tab"
                                aria-controls="nav-WEB" id="nav-WEB-tab" aria-selected="false">Web Development</a>
                            <a class="nav-item nav-link mx-3" data-toggle="tab" href="#nav-OTH" role="tab"
                                aria-controls="nav-OTH" id="nav-OTH-tab" aria-selected="false">Other</a>
                        </div>
                    </nav>
                    <div class="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
                        <div class="tab-pane fade show active" id="nav-AND" role="tabpanel" aria-labelledby="nav-AND-tab">
                            <div className="d-flex flex-wrap justify-content-center">
                                {flutter && flutter.map((project) => {
                                    return (
                                        <ProjectCard project={project} />
                                    )
                                })}

                            </div>
                        </div>

                        <div class="tab-pane fade" id="nav-WEB" role="tabpanel" aria-labelledby="nav-WEB-tab">
                            <div className="d-flex flex-wrap justify-content-center">
                                {web && web.map((project) => {
                                    return (
                                        <ProjectCard project={project} />
                                    )
                                })}
                            </div>
                        </div>

                        <div class="tab-pane fade" id="nav-OTH" role="tabpanel" aria-labelledby="nav-OTH-tab">
                        <div className="d-flex flex-wrap justify-content-center">
                                {oth && oth.map((project) => {
                                    return (
                                        <ProjectCard project={project} />
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </>
    );
}