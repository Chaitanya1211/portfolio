import { useEffect, useState } from "react";
import js from "../../assets/images/techlogo/javascript.png";
import flutter from "../../assets/images/techlogo/flutter.png";
import mongodb from "../../assets/images/techlogo/mongo-db.png";
import mysql from "../../assets/images/techlogo/mysql.png";
import nodejs from "../../assets/images/techlogo/nodejs.png";
import php from "../../assets/images/techlogo/php.png";
import react from "../../assets/images/techlogo/react.png";
import cpp from "../../assets/images/techlogo/c++.png";

export function SkillBox({ currSkill }) {

    const [skill, setSkill] = useState('');
    const [logo, setLogo] = useState('');
    const [percent, setPercent] = useState(0);
    const [color, setColor] = useState('yellow');

    useEffect(() => {
        switch (currSkill) {
            case "javascript":
                setSkill("Javascript");
                setLogo(js);
                setPercent(80);
                setColor('#ffc107');
                break;

            case "flutter":
                setSkill("Flutter");
                setLogo(flutter);
                setPercent(75);
                setColor('#ffc107');
                break;

            case "mongodb":
                setSkill("Mongo DB");
                setLogo(mongodb);
                setPercent(80);
                setColor('#215732');
                break;

            case "mysql":
                setSkill("My SQL");
                setLogo(mysql);
                setPercent(70);
                setColor('#ffc107');
                break;

            case "nodejs":
                setSkill("Node JS");
                setLogo(nodejs);
                setPercent(90);
                setColor('#6cc24a');
                break;

            case "php":
                setSkill("PHP");
                setLogo(php);
                setPercent(80);
                setColor('#6244C5');
                break;

            case "react":
                setSkill("React JS");
                setLogo(react);
                setPercent(85);
                setColor('#0dcaf0');
                break;

            case "cpp":
                setSkill("C++");
                setLogo(cpp);
                setPercent(80);
                setColor('#ffc107');
                break;

            default:
                break;

        }
    }, [currSkill])

    return (
        <>
            <div className="d-flex py-2">
                <img src={logo} alt="" width="50px" height="50px" />
                <div className="w-100 ps-3 d-flex flex-column justify-content-center">
                    <div className="d-flex justify-content-between font-weight-bold">
                        <p className="mb-1">{skill}</p>
                        <span>{percent}%</span>
                    </div>
                    <div class="progress" style={{ "height": "6px" }}>
                        <div class="progress-bar" role="progressbar" style={{ "width": `${percent}%`, "background-color": color }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </div>
        </>
    );
}