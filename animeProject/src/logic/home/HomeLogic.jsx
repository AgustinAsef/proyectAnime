import Home from "../../views/home/Home";
import Nav from "../../views/nav/Nav";

function HomeLogic() {
    const data = [
        {
            id: 1,
            userName: "agustin",
            userMail: "agustin@gmail.com",
            userPasword: "1234",
            series: [
                {
                    id: "NeonGenesisEvangelion",
                    serieName: "Neon Genesis Evangelion",
                    seasons: [
                        {
                            seasonName: "Neon Genesis Evangelion",
                            caps:[
                                { id: 1,
                                    number: 1,
                                    isCheck: true
                                },
                                {   
                                    id: 2,
                                    number: 2,
                                    isCheck: true
                                },
                                {   
                                    id: 3,
                                    number: 3,
                                    isCheck: true
                                },
                                {   
                                    id: 4,
                                    number: 4,
                                    isCheck: false
                                },
                                {   
                                    id: 5,
                                    number: 5,
                                    isCheck: false
                                },
                                {   
                                    id: 6,
                                    number: 6,
                                    isCheck: false
                                },
                                {   
                                    id: 7,
                                    number: 7,
                                    isCheck: false
                                }
                                ],                        
                            },
                        {
                            seasonName: "Neon Genesis Evangelion: The End of Evangelion",
                            caps:[
                                { id: 1,
                                    number: 1,
                                    isCheck: true
                                },
                                {   
                                    id: 2,
                                    number: 2,
                                    isCheck: true
                                },
                                {   
                                    id: 3,
                                    number: 3,
                                    isCheck: false
                                },
                                {   
                                    id: 4,
                                    number: 4,
                                    isCheck: false
                                },
                                {   
                                    id: 5,
                                    number: 5,
                                    isCheck: false
                                },
                                {   
                                    id: 6,
                                    number: 6,
                                    isCheck: false
                                },
                                {   
                                    id: 7,
                                    number: 7,
                                    isCheck: false
                                },
                                {   
                                    id: 8,
                                    number: 8,
                                    isCheck: true
                                },
                                {   
                                    id: 9,
                                    number: 9,
                                    isCheck: true
                                }
                                ],                        
                            },
                    ],
                },
                {
                    id: "NanatsunoTaizai",
                    serieName: "Nanatsu no Taizai",
                    seasons: [
                        {
                            id: "Seisen no Shirushi",
                            seasonName: "Seisen no Shirushi",
                            caps:[
                            { id: 1,
                                number: 1,
                                isCheck: true
                            },
                            {   
                                id: 2,
                                number: 2,
                                isCheck: true
                            },
                            {   
                                id: 3,
                                number: 3,
                                isCheck: true
                            },
                            {   
                                id: 4,
                                number: 4,
                                isCheck: true
                            },
                            {   
                                id: 5,
                                number: 5,
                                isCheck: true
                            },
                            {   
                                id: 6,
                                number: 6,
                                isCheck: true
                            },
                            {   
                                id: 7,
                                number: 7,
                                isCheck: true
                            },
                            {   
                                id: 8,
                                number: 8,
                                isCheck: true
                            },
                            {   
                                id: 9,
                                number: 9,
                                isCheck: true
                            },
                            {   
                                id: 0,
                                number: 10,
                                isCheck: true
                            },
                            {   
                                id: 1,
                                number: 11,
                                isCheck: true
                            }
                            ],
                        },
                        {
                            seasonName: "Kamigami no Gekirin",
                            caps:[
                            {   id: 1,
                                number: 1,
                                isCheck: true
                            },
                            {   
                                id: 2,
                                number: 2,
                                isCheck: true
                            },
                            {   
                                id: 3,
                                number: 3,
                                isCheck: true
                            },
                            {   
                                id: 4,
                                number: 4,
                                isCheck: true
                            },
                            {   
                                id: 5,
                                number: 5,
                                isCheck: true
                            },
                            {   
                                id: 6,
                                number: 6,
                                isCheck: true
                            }
                            ],
                        },
                        {
                            seasonName: "Fundo no Shinpan",
                            caps: [
                            { id: 1,
                                number: 1,
                                isCheck: true
                            },
                            {   
                                id: 2,
                                number: 2,
                                isCheck: true
                            },
                            {   
                                id: 3,
                                number: 3,
                                isCheck: true
                            },
                            {   
                                id: 4,
                                number: 4,
                                isCheck: true
                            },
                            {   
                                id: 5,
                                number: 5,
                                isCheck: true
                            },
                            {   
                                id: 6,
                                number: 6,
                                isCheck: true
                            }
                            ],
                        },
                    ],
                },
            ],
        },
    ];
    const userSession = false;

    if (userSession) {
        return (
            <>
                <h1>chupate mansa</h1>
            </>
        );
    } else {
        return (
            <>
                <Nav/>
                <Home data={data}/>
            </>
        );
    }
}

export default HomeLogic;
