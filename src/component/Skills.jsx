import { ExpAndEdu } from "./helper/ExpAndEdu";
import { SkillBox } from "./helper/SkillBox";

export function Skills() {
    return (
        <>
            <section className="pad">
                <div className="container">
                    <div className="row">
                        {/* Skills */}
                        <h1 className="m-0"> <strong>Skills & Experience</strong></h1>
                        <div className="col-lg-6">
                            <div className="row">
                                <h5 className="my-4">Equipped with a diverse toolkit to tackle any challenge, here are my key skills</h5>
                                <div className="col-lg-6">
                                    <SkillBox currSkill={"cpp"} />
                                    <SkillBox currSkill={"php"} />
                                    <SkillBox currSkill={"mysql"} />
                                    <SkillBox currSkill={"flutter"} />
                                </div>
                                <div className="col-lg-6">
                                    <SkillBox currSkill={"javascript"} />
                                    <SkillBox currSkill={"nodejs"} />
                                    <SkillBox currSkill={"mongodb"} />
                                    <SkillBox currSkill={"react"} />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <ExpAndEdu />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}