import { SectionHeader } from "./helper/SectionHeader";
import { SectionSubHead } from "./helper/SectionSubHead";

export function Education() {
    return (
        <>
            <section className="pad">
                <div className="container">
                    <SectionHeader heading={"Education"} />
                    <SectionSubHead subhead={"Building a strong foundation through continuous learning, my educational journey has equipped me with the knowledge and skills needed to excel. Explore the academic milestones and experiences that have shaped my path in technology and development."}/>
                    <p className="my-4 text-muted"></p>
                    <section>
                        <div className="d-flex justify-content-center p-4">
                            <div className="col-lg-8">
                                <ul class="timeline-with-icons">
                                    <li class="timeline-item mb-4">
                                        <span class="timeline-icon">
                                            <i class="fa-solid fa-user-graduate"></i>
                                        </span>
                                        <h5 class="fw-bold">B. Tech Computer Engineering <span className="float-end">9 CGPA</span></h5>
                                        <p class="text-muted mb-2 fw-bold">June 2024</p>
                                        <p class="text-muted">
                                            Vishwakarma Institue Of Technology, Pune
                                        </p>
                                    </li>

                                    <li class="timeline-item mb-4">
                                        <span class="timeline-icon">
                                        <i class="fa-solid fa-scroll"></i>
                                        </span>
                                        <h5 class="fw-bold">Higher Secondary School Certificate (HSSC) <span className="float-end">91.8 %</span></h5>
                                        <p class="text-muted mb-2 fw-bold">February 2020</p>
                                        <p class="text-muted">
                                            S.T Paul Junior College, Nagpur
                                        </p>
                                    </li>

                                    <li class="timeline-item mb-4">
                                        <span class="timeline-icon">
                                        <i class="fa-solid fa-scroll"></i>
                                        </span>
                                        <h5 class="fw-bold">Secondary School Certificate (SSC)<span className="float-end">96.20 %</span></h5>
                                        <p class="text-muted mb-2 fw-bold">March 2018</p>
                                        <p class="text-muted">
                                           T.B.R.A.N's Mundle Enflish Medium School, Nagpur
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </section>
                </div>
            </section>
        </>
    )
}