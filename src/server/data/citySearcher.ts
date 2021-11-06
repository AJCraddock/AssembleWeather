import cityList from "./cityList.json";

import { Document, DocumentOptions, SimpleDocumentSearchResultSetUnit } from "flexsearch";

import { City } from "../models";


export class CitySearcher {
    static instance: CitySearcher;

    /**
     * Provides singleton with the ability to search for city information.
     * @returns Object that can be used to search dataset
     */
    static getInstance(): CitySearcher{
        if(!CitySearcher.instance) {
            CitySearcher.instance = new CitySearcher();
        }
        return CitySearcher.instance;
    }

    private cityIndex: Document<{}>;

    private docSchema: DocumentOptions<{}> = {
        id:'id',
        index: [
          "name",
          "state",
          "country"
        ]
      };
    
    private constructor(){
        this.cityIndex = new Document({
            charset: "latin:advanced",
            tokenize: "forward",
            document: this.docSchema
        }, {});

        cityList.map((e, index) => 
            this.cityIndex.add(index, e)
        );
    };
    
    /**
     * Will search dataset for term passed in fields searched are: city name, state, and country
     * @param term [string] the term that will be search for 
     * @param limit [number] Limits the amount of results returned (default: 10) 
     * @returns an Array of the cities found matching the criteria
     */
    public search(term: string, limit: number = 10): City[] {
        let result: SimpleDocumentSearchResultSetUnit[] = this.cityIndex.search(term, limit);    
        
        return this.retrieveCityResults(result).slice(0,limit);
    }

    private retrieveCityResults(results: SimpleDocumentSearchResultSetUnit[]) {
        return results.flatMap((searchResultUnit: SimpleDocumentSearchResultSetUnit) =>
           searchResultUnit.result.map((resultIndex) => cityList[resultIndex])
        );
    }
}
