import { useState } from "react";
import Nav from "../nav/Nav";
import "./generalHome.css";

function GeneralHome() {
  const [show, setShow] = useState("notShow");

  function changeDisplay() {
    if (show == "notShow") {
      setShow("show");
    } else {
      setShow("notShow");
    }
  }
  return (
    <>
      <Nav />
      <div className="generalHomeDivCOntainer">
        <h2>¡ Hola otra vez usuario !</h2>
        <h3>Lo que podras hacer en esta pagina es lo siguiente:</h3>
        <h3>
          suponte que estas por ver Naruto (por ejemplo), dale al + para
          agregarlo
        </h3>
        <div>
          <div className="newSerieFormContainer p">
            <div className="newSerieFormTittleContainer">
              <button className="button" onClick={changeDisplay}>
                Nueva Serie
              </button>
            </div>
            <div className={show}>
              <form className="m p" id="newSerieForm">
                <div className="newSerieFormInputs">
                  <div>
                    {"que vas a ver?: "}
                    <input
                      type="text"
                      name="serie"
                      id="serie"
                      className="m"
                      required
                      autoComplete="off"
                    />
                  </div>
                  <div>
                    {"cuantas capitulos tiene?: "}
                    <input
                      type="number"
                      name="capitulos"
                      id="capitulos"
                      className="m"
                      required
                    />
                  </div>
                </div>
                <div className="m">
                  <button className="button">Agregar</button>
                </div>
              </form>
            </div>
          </div>
          <div className="serieContainer p">
            <div className="serieTittleContainer">
              <h2>Naruto</h2>
              <button className="button">X</button>
            </div>
            <div className="capsContainer">
              <label className="checkboxLabel m">
                <input type="checkbox" name="cap1" id="cap1" className="checkInput"/>
                <div className="customInput">
                  <span className="input-text">Cap.</span>
                  <span className="input-text"></span>
                  <img className="checkImage" alt="check Image" />
                </div>
              </label>
              <label className="checkboxLabel m">
                <input type="checkbox" name="cap2" id="cap2" className="checkInput"/>
                <div className="customInput">
                  <span className="input-text">Cap.</span>
                  <span className="input-text"></span>
                  <img className="checkImage" alt="check Image" />
                </div>
              </label>
              <label className="checkboxLabel m">
                <input type="checkbox" name="cap3" id="cap3" className="checkInput"/>
                <div className="customInput">
                  <span className="input-text">Cap.</span>
                  <span className="input-text"></span>
                  <img className="checkImage" alt="check Image" />
                </div>
              </label>
              <label className="checkboxLabel m">
                <input type="checkbox" name="cap4" id="cap4" className="checkInput"/>
                <div className="customInput">
                  <span className="input-text">Cap.</span>
                  <span className="input-text"></span>
                  <img className="checkImage" alt="check Image" />
                </div>
              </label>
              <label className="checkboxLabel m">
                <input type="checkbox" name="cap5" id="cap5" className="checkInput"/>
                <div className="customInput">
                  <span className="input-text">Cap.</span>
                  <span className="input-text"></span>
                  <img className="checkImage" alt="check Image" />
                </div>
              </label>
            </div>
          </div>
          <div className="serieContainer p">
            <div className="serieTittleContainer">
              <h2>One peace</h2>
              <button className="button">X</button>
            </div>
            <div className="capsContainer">
              <label className="checkboxLabel m">
                <input type="checkbox" name="cap1" id="cap1" className="checkInput"/>
                <div className="customInput">
                  <span className="input-text">Cap.</span>
                  <span className="input-text"></span>
                  <img className="checkImage" alt="check Image" />
                </div>
              </label>
              <label className="checkboxLabel m">
                <input type="checkbox" name="cap2" id="cap2" className="checkInput"/>
                <div className="customInput">
                  <span className="input-text">Cap.</span>
                  <span className="input-text"></span>
                  <img className="checkImage" alt="check Image" />
                </div>
              </label>
              <label className="checkboxLabel m">
                <input type="checkbox" name="cap3" id="cap3" className="checkInput"/>
                <div className="customInput">
                  <span className="input-text">Cap.</span>
                  <span className="input-text"></span>
                  <img className="checkImage" alt="check Image" />
                </div>
              </label>
              <label className="checkboxLabel m">
                <input type="checkbox" name="cap4" id="cap4" className="checkInput"/>
                <div className="customInput">
                  <span className="input-text">Cap.</span>
                  <span className="input-text"></span>
                  <img className="checkImage" alt="check Image" />
                </div>
              </label>
              <label className="checkboxLabel m">
                <input type="checkbox" name="cap5" id="cap5" className="checkInput"/>
                <div className="customInput">
                  <span className="input-text">Cap.</span>
                  <span className="input-text"></span>
                  <img className="checkImage" alt="check Image" />
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default GeneralHome;
