import { CitySearcher } from "../data/citySearcher";

export function cities(query: string, limit:number = 10): Array<any>{
    const result = CitySearcher.getInstance().search(query, limit);
    return result;
} 