import { ExpAndEdu } from "./helper/ExpAndEdu";
import { SectionHeader } from "./helper/SectionHeader";
import { SectionSubHead } from "./helper/SectionSubHead";
import { SkillBox } from "./helper/SkillBox";

export function Skills() {
    return (
        <>
            <section className="pad">
                <div className="container">
                    <div className="row">
                        <SectionHeader heading={"Skills & Experience"} />
                        <SectionSubHead subhead={"With a versatile skill set honed through hands-on experience and continuous learning, I'm equipped to tackle a wide range of challenges in technology and development. My expertise spans various domains, allowing me to craft solutions that are both innovative and effective. Here are some of the key skills that enable me to deliver exceptional results"} />
                        <div className="col-lg-6 mt-4">
                            <div className="row">
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
                        <div className="col-lg-6 mt-4">
                            <ExpAndEdu />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}