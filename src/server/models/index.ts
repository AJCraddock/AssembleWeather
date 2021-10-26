export interface City {
    id: number;
    name: string;
    state: string;
    country: string;
    coord: Coordinates;
}

interface Coordinates {
    lon: number;
    lat: number;
}