import { useState } from "react";
import checkimg from "../../../imgs/linkedin.png";
import "./caps.css";

function Caps(caps) {
    const [allCaps, setAllCaps] = useState(caps.caps);
    const toggleCheck = (id) => {
        setAllCaps(changeCap => 
          changeCap.map(cap => 
            cap.id === id ? { ...cap, isCheck: cap.isCheck === 1 ? 0 : 1 } : cap
          )
        ); 
    };
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
                            }}
                        />
                        <div className="customInput">
                            <span className="inputText">Cap.</span>
                            <span className="inputText">{cap.id}</span>
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
