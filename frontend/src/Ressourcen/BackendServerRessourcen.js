export const BackendServer = {
    ServerAdresse: "server.bykovski.de",
    Port: "8000",
    BasePath: "/game",
    SocketPrefix: "ws://",
    HttpPrefix: "http://",
    AuthentificationParam: "token",
    Endpoint: {
        Token: "/users/token",
        Click: "/click",
        CurrentClicks: "/balance",
        GPPS: "/generators",
        Generators:{
            Available: "/generators/available",
            Owned: "/generators/current-user",
            PriceOf: "/next-price",
            Buy: "/buy"
        }
       
    }
}