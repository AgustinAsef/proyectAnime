import { useState } from "react";
import checkimg from "../../../imgs/check.png";
import "./caps.css";
import axios from "axios";

function Caps(caps) {
    
    let reorderCaps = caps.caps.sort((a, b) => {
        if (a.capNum < b.capNum) {
            return -1;
        }
        if (a.capNum > b.capNum) {
            return 1;
        }
        return 0;
    });

    const [allCaps, setAllCaps] = useState(reorderCaps);
    const toggleCheck = (id) => {
        setAllCaps((changeCap) =>
            changeCap.map((cap) =>
                cap.id === id ? { ...cap, isCheck: cap.isCheck === 1 ? 0 : 1 } : cap
            )
        );
    };

    async function changeCaps(id, state) {
        try {
            await axios({
                method: "patch",
                url: `http://localhost:3030/series/:${id}/:${state}`,
            });
        } catch (error) {
            alert(error);
        }
    }
    return (
        <>
            {allCaps.map((cap) => (
                <div key={cap.id} id="capsContainer">
                    <label className="checkboxLabel m">
                        <input
                            type="checkbox"
                            className="checkInput"
                            id={cap.id}
                            checked={cap.isCheck}
                            onChange={() => {
                                toggleCheck(cap.id);
                                changeCaps(cap.id, cap.isCheck);
                            }}
                        />
                        <div className="customInput">
                            <span className="inputText">Cap.</span>
                            <span className="inputText">{cap.capNum}</span>
                            <img
                                className="checkImage"
                                src={checkimg}
                                alt="Check Image"
                            />
                        </div>
                    </label>
                </div>
            ))}
        </>
    );
}
export default Caps;
