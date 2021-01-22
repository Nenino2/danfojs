import { DataFrame } from './frame';
export declare class Merge {
    how: string;
    left: any;
    right: any;
    on: any;
    left_col_index: any[];
    right_col_index: any[];
    left_key_dict: {};
    right_key_dict: {};
    columns: any;
    left_col: any;
    right_col: any;
    constructor(kwargs: any);
    __create_columns(): void;
    outer(): any[];
    inner(): any[];
    left_merge(): any[];
    right_merge(): any[];
    basic(keys: any): any[];
}
/**
* Merge DataFrame or named Series objects with a database-style join.
* The join is done on columns or indexes. If joining columns on columns, the DataFrame indexes will be ignored. Otherwise
* if joining indexes on indexes or indexes on a column or columns, the index will be passed on.
* @param {kwargs}{left: DataFrame;
*                right: DataFrame | Named Series, Object to merge with;
*                on: label, Column or index level names to join on. These must be found in both DataFrames;
*                how: {‘left’, ‘right’, ‘outer’, ‘inner’}. Type of merge to be performed.
* @returns {DataFrame}
*/
export declare const merge: (kwargs?: any) => DataFrame;
