import { DataFrame } from './frame';
export declare class Concat {
    constructor(kwargs: any);
}
/**
* Concatenate pandas objects along a particular axis with optional set logic along the other axes.
* @param {kwargs} {df_list: List of DataFrame to concatenate together axis: 0 for row axis and 1 for index axis
* @returns {DataFrame}
*/
export declare const concat: (kwargs: any) => DataFrame;
