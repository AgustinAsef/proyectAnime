/* import { useEffect, useState } from "react";
import axios from "axios"
 */ import Home from "../../views/home/Home";
import Nav from "../../views/nav/Nav";

function HomeLogic(data) {
    /*     const [data, setData] = useState()

    useEffect(()=>{
        const fechData = async ()=>{
            try {
                const dataDB = await axios.get(`http://localhost:3030/`)
                setData(dataDB.data)
            } catch (error) {
                return(error)
            }
        }
        fechData()
    },[data]) */

    if (!data) {
        return (
            <>
                <h1>debes ingresar a tu cuenta</h1>
            </>
        );
    } else {
        return (
            <>
                <Nav />
                <Home data={data.data} />
            </>
        );
    }
}

export default HomeLogic;
