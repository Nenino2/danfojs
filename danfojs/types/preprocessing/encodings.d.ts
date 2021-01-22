import { Series } from "../core/series";
import { DataFrame } from "../core/frame";
export declare class LabelEncoder {
    label: unknown[];
    /**
       *
       * @param {data} data [Array|Series]
       * @returns Array.
       */
    fit(data: any): Series;
    /**
       * Transform data using the label generated from fitting
       * @param {data} data [Array|Series]
       * @returns Array
       */
    transform(data: any): Series;
}
export declare class OneHotEncoder {
    label: unknown[];
    fit(data: any): DataFrame;
    transform(data: any): DataFrame;
}
