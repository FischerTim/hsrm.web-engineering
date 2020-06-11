export const ServerRessource = {
    ServerAdresse: "server.bykovski.de",
    Port: "8000",
    BasePath: "/game",
    SocketPrefix: "ws://",
    HttpPrefix: "http://",
    AuthentificationParam: "token",
    Endpoint: {
        Token: "/users/token",
        Register: "/users/register",
        Click: "/click",
        CurrentClicks: "/balance",
        GPPS: "/generators",
        Generators: {
            Available: "/generators/available",
            Owned: "/generators/current-user",
            PriceOf: "/next-price",
            Buy: "/buy"
        }

    }
}