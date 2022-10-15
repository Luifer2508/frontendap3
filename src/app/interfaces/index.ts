export interface GamesResponse {
    ok:    boolean;
    games: Game[];
}

export interface Game {
    _id:            string;
    nombre:         string;
    desarrolladora: string;
    plataforma:     string;
    genero:         string;
    imagen:         string;
    __v:            number;
}