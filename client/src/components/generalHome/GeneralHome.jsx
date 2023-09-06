import { useState } from "react";
import Nav from "../nav/Nav";
import checkImg from "../../imgs/check.png"
import "./generalHome.css";

function GeneralHome() {
  const [show, setShow] = useState("notShow");
  const series = ([
        {
          "id": 93,
          "serieName": "Naruto",
          "caps": [
            {
              "id": 1994,
              "isCheck": 0,
              "capNum": 1
            },
            {
              "id": 1995,
              "isCheck": 0,
              "capNum": 2
            },
            {
              "id": 1996,
              "isCheck": 0,
              "capNum": 3
            },
            {
              "id": 1997,
              "isCheck": 0,
              "capNum": 4
            },
            {
              "id": 1998,
              "isCheck": 0,
              "capNum": 5
            },
            {
              "id": 1999,
              "isCheck": 0,
              "capNum": 6
            },
            {
              "id": 2000,
              "isCheck": 0,
              "capNum": 7
            },
            {
              "id": 2001,
              "isCheck": 0,
              "capNum": 8
            },
            {
              "id": 2002,
              "isCheck": 0,
              "capNum": 9
            },
            {
              "id": 2003,
              "isCheck": 0,
              "capNum": 10
            },
            {
              "id": 2004,
              "isCheck": 0,
              "capNum": 11
            },
            {
              "id": 2005,
              "isCheck": 0,
              "capNum": 12
            },
            {
              "id": 2006,
              "isCheck": 0,
              "capNum": 13
            },
            {
              "id": 2007,
              "isCheck": 0,
              "capNum": 14
            },
            {
              "id": 2008,
              "isCheck": 0,
              "capNum": 15
            }
          ]
        },
        {
          "id": 94,
          "serieName": "Boruto",
          "caps": [
            {
              "id": 2009,
              "isCheck": 0,
              "capNum": 1
            },
            {
              "id": 2010,
              "isCheck": 0,
              "capNum": 2
            },
            {
              "id": 2011,
              "isCheck": 0,
              "capNum": 3
            },
            {
              "id": 2012,
              "isCheck": 0,
              "capNum": 4
            },
            {
              "id": 2013,
              "isCheck": 0,
              "capNum": 5
            },
            {
              "id": 2014,
              "isCheck": 0,
              "capNum": 6
            },
            {
              "id": 2015,
              "isCheck": 0,
              "capNum": 7
            },
            {
              "id": 2016,
              "isCheck": 0,
              "capNum": 8
            },
            {
              "id": 2017,
              "isCheck": 0,
              "capNum": 9
            },
            {
              "id": 2018,
              "isCheck": 0,
              "capNum": 10
            },
            {
              "id": 2019,
              "isCheck": 0,
              "capNum": 11
            },
            {
              "id": 2020,
              "isCheck": 0,
              "capNum": 12
            },
            {
              "id": 2021,
              "isCheck": 0,
              "capNum": 13
            },
            {
              "id": 2022,
              "isCheck": 0,
              "capNum": 14
            },
            {
              "id": 2023,
              "isCheck": 0,
              "capNum": 15
            },
            {
              "id": 2024,
              "isCheck": 0,
              "capNum": 16
            },
            {
              "id": 2025,
              "isCheck": 0,
              "capNum": 17
            },
            {
              "id": 2026,
              "isCheck": 0,
              "capNum": 18
            },
            {
              "id": 2027,
              "isCheck": 0,
              "capNum": 19
            },
            {
              "id": 2028,
              "isCheck": 0,
              "capNum": 20
            }
          ]
        }
  ])

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
      <div className="newSerieDivContainer p">
      <h2>¡ Hola otra vez usuario !</h2>
        <h3>
          En esta pagina podras agregar las series que vas a ver y checkear los
          capitulos que has visto para tenerlas al dia, tal y como se muestra a continuecion.
        </h3>
        <div className="p">
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
      </div>
      {series.map((serie)=>(
              <div className="serieContainer p" key={serie.id}>
                <div className="serieTittleContainer">
                  <h2>{serie.serieName}</h2>
                  <button className="button">X</button>
                </div>
                <div className="capsContainer">
                  {serie.caps.map((cap)=>(
                    <label className="checkboxLabel m" key={cap.id}>
                      <input type="checkbox" id={cap.id} className="checkInput"/>
                      <div className="customInput">
                        <span className="inputText">Cap</span>
                        <span className="inputText">{cap.capNum}</span>
                        <img className="checkImage" alt="check Image" src={checkImg}/>
                      </div>
                    </label>                    
                  ))}
                </div>
              </div>
      ))}
    </>
  );
}
export default GeneralHome;
