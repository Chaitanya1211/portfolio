import { useState } from "react";

export function ExpAndEdu() {
    const [fulltime, setFulltime] = useState(true);
    const [partTime, setParttime] = useState(false);

    function handleFulltime() {
        setParttime(false);
        setFulltime(true);
    }

    function handleParttime() {
        setFulltime(false)
        setParttime(true);
    }
    return (
        <>
            <div className="parent px-4">
                <div className="d-flex flex-wrap borders">
                    <div className="col-lg-6 p-0">
                        <button className={`w-100 py-3 btn ${fulltime ? 'btn-dark' : 'btn-light'}`} onClick={handleFulltime}>Fulltime</button>
                    </div>
                    <div className="col-lg-6 p-0">
                        <button className={`w-100 py-3 btn ${partTime ? 'btn-dark' : 'btn-light'}`} onClick={handleParttime}>Part time</button>
                    </div>
                </div>

                {/* Full time */}
                {fulltime && <>
                    <div className="pt-4">
                        <div class=" mb-4">
                            <div class="exp">Technology graduate Developer </div>
                            <div class="line"></div>
                            <div className="d-flex justify-content-between">
                                <div class="company">Barclays</div>
                                <span class="year">July 2024 - Current</span>
                            </div>
                            {/* <p className="exp-desc">Developed a comprehensive system using the MERN stack that monitors employee attendance with face recognition and tracks project-specific bugs, allowing employees to update bug statuses.</p> */}
                        </div>
                    </div>
                </>}

                {/* Part time */}
                {partTime && <>
                    <div className="pt-4">
                        <div class="mb-4">
                            <div class="exp">Web Development Intern</div>
                            <div class="line"></div>
                            <div className="d-flex flex-wrap justify-content-between">
                                <div class="company col-lg-9">CodebergIT - Technology Works ( Hiring & Tech Partner )</div>
                                <span class="year col-lg-3">Jan 2024 - Jun 2024</span>
                            </div>
                            <p className="exp-desc">Developed a comprehensive system using the MERN stack that monitors employee attendance with face recognition and tracks project-specific bugs, allowing employees to update bug statuses.</p>
                        </div>
                        <div>
                            <div class="exp">Summer Intern</div>
                            <div class="line"></div>
                            <div className="d-flex flex-wrap justify-content-between">
                                <div class="company col-lg-9">Barclays</div>
                                <span class="year col-lg-3">Jun 2023 - Aug 2023</span>
                            </div>
                            <p className="exp-desc m-0">Developed an automation tool using the MERN (MongoDB, Express.js, React, Node.js) stack, designed to streamline and optimize workflow for various internal teams.</p>
                        </div>
                    </div>
                </>}
            </div>
        </>
    );

}