import { useEffect, useState } from "react";
import { SectionHeader } from "./helper/SectionHeader";
import { SectionSubHead } from "./helper/SectionSubHead";

export function Projects() {
    const [current, setCurrent] = useState('all');

    function handleClick(event) {
        const value = event.target.getAttribute('data-project');
        console.log("Value :", value);
        setCurrent(value);
    }
    return (
        <>
            <section className="pad">
                <div className="container">
                    <SectionHeader heading={"Projects"} />
                    <SectionSubHead subhead={"From innovative concepts to fully realized applications, explore my diverse range of projects across different platforms. Whether it's Android development, web applications, or other creative endeavors, each project showcases my passion and technical expertise."} />
                    {/* <div className="d-flex justify-content-center">
                        <div className="col-lg-1 text-center"><button data-project="all" onClick={handleClick} className={`${current==="all" ? 'active-btn':'deactive-btn text-muted'}`}>All</button></div>
                        <div className="col-lg-1 text-center"><button data-project="android" onClick={handleClick} className={`${current==="android" ? 'active-btn':'deactive-btn text-muted'}`}>Android</button></div>
                        <div className="col-lg-1 text-center"><button data-project="web" onClick={handleClick} className={`${current==="web" ? 'active-btn':'deactive-btn text-muted'}`}>Web</button></div>
                    </div>

                    {
                        current==="all" && <>
                            <h1>This is all</h1>
                        </>
                    }
                    {
                        current==="android" && <>
                            <h1>This is android</h1>
                        </>
                    }
                    {
                        current==="web" && <>
                            <h1>This is web</h1>
                        </>
                    } */}

                    <nav class="d-flex justify-content-center">
                        <div class="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                            <a class="nav-item nav-link active" data-toggle="tab" href="#nav-ML" role="tab"
                                aria-controls="nav-ML" id="nav-ML-tab" aria-selected="true">Machine
                                Learning / Deep Learning</a>
                            <a class="nav-item nav-link" data-toggle="tab" href="#nav-WEB" role="tab"
                                aria-controls="nav-WEB" id="nav-WEB-tab" aria-selected="false">Web Development</a>
                            <a class="nav-item nav-link" data-toggle="tab" href="#nav-OTH" role="tab"
                                aria-controls="nav-OTH" id="nav-OTH-tab" aria-selected="false">Other</a>
                        </div>
                    </nav>
                    <div class="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
                        <div class="tab-pane fade show active" id="nav-ML" role="tabpanel" aria-labelledby="nav-ML-tab">
                            ML
                        </div>

                        <div class="tab-pane fade" id="nav-WEB" role="tabpanel" aria-labelledby="nav-WEB-tab">
                            WEB
                        </div>

                        <div class="tab-pane fade" id="nav-OTH" role="tabpanel" aria-labelledby="nav-OTH-tab">
                            others
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