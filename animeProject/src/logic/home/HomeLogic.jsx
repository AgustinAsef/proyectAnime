/* import { useEffect, useState } from "react";
import axios from "axios"
 */ import Home from "../../views/home/Home";
import Nav from "../../views/nav/Nav";

function HomeLogic() {
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
    const data = [
        {
            id: 1,
            userName: "agustin",
            userMail: "agustin@gmail.com",
            userPasword: "1234",
            series: [
                {
                    id: 1,
                    serieName: "Neon Genesis Evangelion",
                    caps: [
                        { id: 1, number: 1, isCheck: true },
                        {
                            id: 2,
                            number: 2,
                            isCheck: true,
                        },
                        {
                            id: 3,
                            number: 3,
                            isCheck: true,
                        },
                        {
                            id: 4,
                            number: 4,
                            isCheck: false,
                        },
                        {
                            id: 5,
                            number: 5,
                            isCheck: false,
                        },
                        {
                            id: 6,
                            number: 6,
                            isCheck: false,
                        },
                        {
                            id: 7,
                            number: 7,
                            isCheck: false,
                        },
                    ],
                },
                {
                    id: 2,
                    serieName: "Nanatsu no Taizai",
                    caps: [
                        { id: 1, number: 1, isCheck: true },
                        {
                            id: 2,
                            number: 2,
                            isCheck: true,
                        },
                        {
                            id: 3,
                            number: 3,
                            isCheck: true,
                        },
                        {
                            id: 4,
                            number: 4,
                            isCheck: true,
                        },
                        {
                            id: 5,
                            number: 5,
                            isCheck: true,
                        },
                        {
                            id: 6,
                            number: 6,
                            isCheck: true,
                        },
                        {
                            id: 7,
                            number: 7,
                            isCheck: true,
                        },
                        {
                            id: 8,
                            number: 8,
                            isCheck: true,
                        },
                        {
                            id: 9,
                            number: 9,
                            isCheck: true,
                        },
                        {
                            id: 10,
                            number: 10,
                            isCheck: true,
                        },
                        {
                            id: 11,
                            number: 11,
                            isCheck: true,
                        },
                    ],
                },
            ],
        },
    ];

    if (!data) {
        return (
            <>
                <h1>chupate mansa</h1>
            </>
        );
    } else {
        return (
            <>
                <Nav />
                <Home data={data} />
            </>
        );
    }
}

export default HomeLogic;
