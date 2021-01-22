import { DataFrame } from "./frame";
/**
 * Generate one hot encoding for categorical variable in arrays |Serie | and Dataframe
 * @param {kwargs} kwargs { data : Array | Series | DataFrame,
 *                          prefix_sep: String e.g "_",
 *                          prefix: String | Array of String,
 *                          columns: [Array] columns to be encoded in DataFrame.
 * }
 */
declare function get_dummy(kwargs?: {}): DataFrame;
export declare const get_dummies: typeof get_dummy;
export {};
