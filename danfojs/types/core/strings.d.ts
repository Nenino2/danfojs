import { Series } from "./series";
/**
 * String methods applied on Series and DataFrames
 */
export declare class Str {
    series: any;
    array: any;
    constructor(series: any);
    /**
       *  Converts all characters to lowercase.
       * @return {array}
       */
    toLowerCase(): Series;
    /**
       * Converts all characters to uppercase.
       * @return {array}
       */
    toUpperCase(): Series;
    /**
       * Capitalize first string
       * @return {array}
       */
    capitalize(): Series;
    /**
       * Returns the character at the specified index (position)
       * @params {index} index position of character
       * @return {array}
       */
    charAt(index?: number): Series;
    /**
       * Joins two or more strings/arrays. 0 joins from the start
       * @params {other} string|array to concatenate with.
       * @params {position} where to concat the string from. O concats from the start, 1 concats from the end
       * @params {isArray} whether operation is performed on Array or not
       * @return {array}
       */
    concat(other?: string, position?: number): Series;
    /**
      * Checks whether a string begins with specified characters
      * @params {String | Character} String or Character to check against
      * @return {array}
      */
    startsWith(str?: string): Series;
    /**
     * Checks whether a string ends with specified characters
     * @params {String | Character} String or Character to check against
     * @return {array}
     */
    endsWith(str?: string): Series;
    /**
       * Checks whether a string contains the specified string/characters
       * @params {String | Character} String or Character to check against
       * @return {array}
       */
    includes(str?: string): Series;
    /**
      * Returns the position of the first found occurrence of a specified value in a string
      * @params {String | Character} String or Character to check against
      * @return {array}
      */
    indexOf(str?: string): Series;
    /**
     * Returns the position of the last found occurrence of a specified value in a string
     * @params {str: String | Character} String or Character to check against
     * @return {array}
     */
    lastIndexOf(str?: string): Series;
    /**
      * Searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced
      * @params {searchValue: String | Character} string value to replace
      * @params {replaceValue: String | Character} string to replace with
      * @return {array}
      */
    replace(searchValue?: string, replaceValue?: string): Series;
    /**
       * Returns a new string with a specified number of copies of an existing string
       * @params {num: Integer} Number of times to repeat
       * @return {array}
       */
    repeat(num?: number): Series;
    /**
       * Searches a string for a specified value, or regular expression, and returns the position of the match
       * @params {str: String | Character} String or Character to check against
       * @return {array}
       */
    search(str?: string): Series;
    /**
     * Extracts a part of a string and returns a new string
     * @params {startIndex: Int} index position of start character
     * @params {endIndex: Int} index position of last character
     * @return {array}
     */
    slice(startIndex?: number, endIndex?: number): Series;
    /**
       * Splits a string into an array of substrings
       * @params {val: string} string or character to split at
       * @params {endIndex: Int} index position of last character
       * @return {array}
       */
    split(splitVal?: string): Series;
    /**
     * Extracts the characters from a string, beginning at a specified start position, and through the specified number of character
     * @params {startIndex: Int} index position of start character
     * @params {num: Int} number of characters to return
     * @return {array}
     */
    substr(startIndex?: number, num?: number): Series;
    /**
    * Extracts the characters from a string, between two specified indices
    * @params {startIndex: Int} index position of start character
    * @params {endIndex: Int} index position of last character
    * @return {array}
    */
    substring(startIndex?: number, endIndex?: number): Series;
    /**
      * Removes whitespace from both ends of a string
      * @return {array}
      */
    trim(): Series;
    /**
      * Joins strings to specified value
      * @params {valToJoin} string value to join to the array
      * @params {joinChar} Character to Join with
      * @return {array}
      */
    join(valToJoin?: string, joinChar?: string): Series;
    /**
      * Counts the number of characters in string
      * @return {array}
      */
    len(): Series;
    __create_new_sf_from(new_val: any, series: any): Series;
}
