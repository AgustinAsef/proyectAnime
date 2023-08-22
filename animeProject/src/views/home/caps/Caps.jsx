import "./caps.css";
import checkImg from "../../imgs/check.png";
import { useState } from "react";

function Caps(data) {

    const [caps, setCaps] = useState(data.data)
  
    const toggleCheck = (id) => {
      console.log(id);
      setCaps(() => {
          const updateCaps = [...caps];
          console.log(updateCaps, "esto es update");
          updateCaps[id - 1].isCheck = updateCaps[id - 1].isCheck ? false : true;
          return updateCaps; 
      });
    }
    
    return (
        <>
          {caps.map((cap) => (
            <div key={cap.id} id="capsContainer">
              <label className="checkbox-label m">
                <input
                  type="checkbox"
                  className="check-input"
                  id={cap.id}
                  checked={cap.isCheck}
                  onChange={() => toggleCheck(cap.id)}
                />
                <div className="custom-input">
                  <span className="input-text">Cap.</span>
                  <span className="input-text">{cap.number}</span>
                  <img
                    className="check-image"
                    src={checkImg}
                    alt="Check Image"
                  />
                </div>
              </label>
            </div>
          ))}
        </>
      );
}
/*     const [caps, setCaps] = useState(data);
  
    return (
      <>
        {caps.map((cap) => (
          <div key={cap.id} id="capsContainer">
            <label className="checkbox-label m">
              <input
                type="checkbox"
                className="check-input"
                id={cap.id}
                checked={cap.isCheck}
                onChange={() => toggleCheck(cap.id)}
              />
              <div className="custom-input">
                <span className="input-text">Cap.</span>
                <span className="input-text">{cap.number}</span>
                <img
                  className="check-image"
                  src={checkImg}
                  alt="Check Image"
                />
              </div>
            </label>
          </div>
        ))}
      </>
    );
  } */
/* function Caps(data) {
    const [caps, setCaps] = useState(data.data);

    const toggleCheck = (cap) => {
        setCaps((prevState) => {
            const updatedSerie = [...prevState];
            caps[cap.id - 1].isCheck = caps[cap.id - 1].isCheck ? false : true;
            return updatedSerie;
        });
    };
    return (
        <>
            {caps.map((cap) => (
                <div key={cap.id} id="capsContainer">
                    <label className="checkbox-label m">
                        <input
                            type="checkbox"
                            className="check-input"
                            id="checkbox"
                            checked={cap.isCheck}
                            onChange={toggleCheck}
                        />
                        <div className="custom-input">
                            <span className="input-text">Cap.</span>
                            <span className="input-text">{cap.number}</span>
                            <img
                                className="check-image"
                                src={checkImg}
                                alt="Check Image"
                            />
                        </div>
                    </label>
                </div>
            ))}
        </>
    );
} */

export default Caps;
/* caps[cap.id -1].isCheck=caps[cap.id-1].isCheck ? false : true */
/* {caps.map((cap) => (
    <div key={cap.id} id="capsContainer">
        <label className="checkbox-label m">
            <input
                type="checkbox"
                className="check-input"
                id="checkbox"
                checked={cap.isCheck}
                onChange={()=>{setCaps(prevState => {
                    const updatedCap = [...prevState];
                    caps[cap.id -1].isCheck=caps[cap.id-1].isCheck ? false : true;
                    return updatedCap;
                  });}}/>
            <div className="custom-input">
                <span className="input-text">Cap.</span>
                <span className="input-text">{cap.number}</span>
                <img
                    className="check-image"
                    src={checkImg}
                    alt="Check Image"
                />
            </div>
        </label>
    </div>
))} */
