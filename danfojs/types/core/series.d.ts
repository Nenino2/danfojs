/**
* Copyright 2020, JsData
* All rights reserved.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.

* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
 *
*/
import * as tf from '@tensorflow/tfjs-node';
import { Str } from "./strings";
import NDframe from "./generic";
import { TimeSeries } from './timeseries';
/**
 * One-dimensional ndarray with axis labels (including time series).
 * The object supports both integer- and label-based indexing and provides a host of methods for performing operations involving the index.
 * Operations between Series (+, -, /, , *) align values based on their associated index values– they need not be the same length.
 * @param {data} data Array, JSON of 1D values
 * @param {kwargs} Object {columns: column names, dtypes : data type of values}
 *
 * @returns Series
 */
export declare class Series extends NDframe {
    row_data_tensor: any;
    data: any[];
    columns: any;
    index_arr: any;
    constructor(data: any, kwargs?: any);
    /**
      * Returns a Series in Tensorflow's tensor format
      * @returns {1D Tensor}
      */
    get tensor(): tf.Tensor<tf.Rank>;
    /**
      * Returns the first n values in a Series
      * @param {rows}  Number of rows to return
      * @returns {Series}
      */
    head(rows?: number): Series;
    /**
      * Returns the last n values in a Series
      * @param {rows} number of rows to return
      * @returns {Series}
      */
    tail(rows?: number): Series;
    /**
      * Returns n number of random rows in a Series
      * @param {rows} number of rows to return
      * @returns {Series}
      */
    sample(num?: number): Series;
    /**
      * Return Addition of series and other, element-wise (binary operator add).
      * Equivalent to series + other
      * @param {other} Series or Number to add
      * @returns {Series}
      */
    add(other: any): Series | undefined;
    /**
      * Returns the subtraction between a series and other, element-wise (binary operator subtraction).
      * Equivalent to series - other
      * @param {other} Series, Number to subtract
      * @returns {Series}
      */
    sub(other: any): Series | undefined;
    /**
      * Return Multiplication of series and other, element-wise (binary operator mul).
      * Equivalent to series * other
      *  @param {other} Series, Number to multiply with.
      * @returns {Series}
      */
    mul(other: any): Series | undefined;
    /**
      * Return division of series and other, element-wise (binary operator div).
      * Equivalent to series / other
      *  @param {other} Series, Number to divide with.
      * @returns {Series}
      */
    div(other: any, round?: boolean): Series | undefined;
    /**
      * Return Exponential power of series and other, element-wise (binary operator pow).
      * Equivalent to series ** other
      *  @param {other} Series, Number to multiply with.
      */
    pow(other: any): Series | undefined;
    /**
      * Return Modulo of series and other, element-wise (binary operator mod).
      * Equivalent to series % other
      *  @param {other} Series, Number
      * @returns {Series}
      */
    mod(other: any): Series | undefined;
    /**
      * Returns the mean of elements in Series
      * @returns {Series}
      */
    mean(): number | number[] | number[][] | number[][][] | number[][][][] | number[][][][][] | number[][][][][][];
    /**
      * Returns the median of elements in Series
      * @returns {Series}
      */
    median(): any;
    /**
      * Returns the modal value of elements in Series
      * @returns {Number}
      */
    mode(): number[];
    /**
      * Returns the minimum value in a Series
      * @returns {Number}
      */
    min(): any;
    /**
      * Returns the maximum value in a Series
      * @returns {Number}
      */
    max(): any;
    /**
      * Return the sum of the values in a series.
      * This is equivalent to the method tf.sum
      *  @returns {Number}, sum of values in Series
      */
    sum(): number;
    /**
       * Return number of non-null elements in a Series
       *  @returns {Number}, Count of non-null values
       */
    count(): number | any[];
    /**
      * Return maximum of series and other, element-wise (binary operator div).
      *  @param {other} Series, Numbers to check maximum against
      * @returns {Series}
      */
    maximum(other: any): Series | undefined;
    /**
      * Return maximum of series and other, element-wise (binary operator div).
      *  @param {other} Series, Numbers to check maximum against
      * @returns {Series}
      */
    minimum(other: any): Series | undefined;
    /**
      * Round each value in a Series to the given number of decimals.
      *  @param {dp} Number, Numbers of Decimal places to round to
      * @returns {Series}
      */
    round(dp: any): Series;
    /**
      * Return sample standard deviation over requested axis.
      * @returns {Number}
      */
    std(): any;
    /**
      *  Return unbiased variance of Series.
      * @returns {Number}
      */
    var(): any;
    /**
       * Return a boolean same-sized object indicating if the values are NaN. NaN and undefined values,
       *  gets mapped to True values. Everything else gets mapped to False values.
       * @return {Series}
       */
    isna(): Series;
    /**
       * Replace NaN or undefined with a specified value"
       * @param {kwargs}, {"value": the new value to replace the old value with, inplace: Perform operation inplace or not}
       * @return {Series}
       */
    fillna(kwargs?: {}): Series | undefined;
    /**
      * Sort a Series in ascending or descending order by some criterion.
      *  @param {kwargs} Object, {ascending (Bool): Whether to return sorted values in ascending order or not,
      *                           inplace (Bool): Whether to perform sorting on the original Series or not}
      * @returns {Series}
      */
    sort_values(kwargs?: {}): Series | undefined;
    /**
      * Makes a deep copy of a Series
      * @returns {Series}
      */
    copy(): Series;
    /**
      * Generate descriptive statistics.
      * Descriptive statistics include those that summarize the central tendency,
      * dispersion and shape of a dataset’s distribution, excluding NaN values.
      * @returns {Series}
      */
    describe(): Series | null;
    /**
      * Returns Series with the index reset.
      * This is useful when index is meaningless and needs to be reset to the default before another operation.
      * @param {kwargs} {inplace: Modify the Series in place (do not create a new object}
      */
    reset_index(kwargs?: {}): Series | undefined;
    /**
      * Returns Series with the specified index.
      * Set the Series index (row labels) using an array of the same length.
      * @param {kwargs} {index: Array of new index values,
      *                  inplace: If operation should happen inplace
      *                   }
      */
    set_index(kwargs?: any): Series | undefined;
    /**
       * Checks if two series are compatible for a mathematical operation
       * @param {Series} other Series to compare against
       * @returns{boolean}
       */
    __check_series_op_compactibility(other: any): boolean;
    /**
       * map all the element in a column to a variable or function
       * @param{callable} callable can either be a funtion or an object
       * @return {Array}
       */
    map(callable: any): Series;
    /**
       * Applies a function to each element of a Series
       * @param {Function} Function to apply to each element of the series
       * @return {Array}
       */
    apply(callable: any): Series;
    /**
       * Returns the unique value(s) in a Series
       * @return {Series}
       */
    unique(): Series;
    /**
       * Return the number of unique value in a series
       * @return {int}
       */
    nunique(): number;
    /**
       * Returns unique values and their counts in a Series
       * @return {Series}
       */
    value_counts(): Series;
    /**
       * Returns the absolute values in Series
       * @return {series}
       */
    abs(): Series;
    /**
       * Returns the cumulative sum over a Series
      * @return {Series}
      */
    cumsum(): Series;
    /**
       * Returns cumulative minimum over a Series
       * @returns series
       */
    cummin(): Series;
    /**
       * Returns cumulative maximum over a Series
       * @returns series
       */
    cummax(): Series;
    /**
       * Returns cumulative product over a Series
       * @returns series
       */
    cumprod(): Series;
    /**
       * Returns Less than of series and other. Supports element wise operations
       * @param {other} Series, Scalar
       * @return {Series}
       */
    lt(other: any): Series;
    /**
       * Returns Greater than of series and other. Supports element wise operations
       * @param {other} Series, Scalar
       * @return {Series}
       */
    gt(other: any): Series;
    /**
       * Returns Less than or Equal to of series and other. Supports element wise operations
       * @param {other} Series, Scalar
       * @return {Series}
       */
    le(other: any): Series;
    /**
       * Returns Greater than or Equal to of series and other. Supports element wise operations
       * @param {other} Series, Scalar
       * @return {Series}
       */
    ge(other: any): Series;
    /**
        * Returns Not Equal to of series and other. Supports element wise operations
        * @param {other} Series, Scalar
        * @return {Series}
        */
    ne(other: any): Series;
    /**
       * Returns Equal to of series and other. Supports element wise operations
       * @param {other} Series, Scalar
       * @return {Series}
       */
    eq(other: any): Series;
    /**
      * Replace all occurence of a value with a new value"
      * @param {kwargs}, {"replace": the value you want to replace,
      *                   "with": the new value you want to replace the olde value with,
      *                   inplace: Perform operation inplace or not}
      * @return {Series}
      */
    replace(kwargs?: {}): Series | undefined;
    /**
       * Return a new Series with missing values (NaN) removed.
       * @param {kwargs} {inplace: Perform operation inplace or not}
       * @return {Series}
       */
    dropna(kwargs?: {}): Series | undefined;
    /**
     * Return the integer indices that would sort the Series.
     * @param {ascending} boolean true: will sort the Series in ascending order, false: will sort in descending order
     * @return {Series}
     */
    argsort(ascending?: boolean): Series;
    /**
       * Return int position of the largest value in the Series.
       * @return {Number}
       */
    argmax(): any;
    /**
       * Return int position of the smallest value in the Series.
       * @param {ascending} boolean true: will sort the Series in ascending order, false: will sort in descending order
       * @return {Series}
       */
    argmin(): any;
    /**
       * Returns dtype of Series
       * @return {string}
       */
    get dtype(): any;
    /**
       * Return Series with duplicate values removed
       * @param {kwargs} {inplace: Perform operation inplace or not,
       *                  keep: first | last which dupliate value to keep}
       * @return {Series}
       */
    drop_duplicates(kwargs?: {}): Series | undefined;
    /**
      * Prints the data in a Series as a grid of row and columns
      */
    toString(): any;
    /**
       * Perform boolean operations on bool values
       * @param {*} other Other series to compare with
       * @param {string} b_ops name of operation to perform [ne, ge, le, gt, lt, eq]
       */
    __bool_ops(other: any, b_ops: any): Series;
    /**
       * perform cumulative operation on series data
       * @returns array
       */
    __cum_ops(ops: any): Series;
    /**
       * Cast Series to specified data type
       * @param {string} dtype data type to cast to [float32, int32, string, boolean]
       *@returns {Series}
       */
    astype(dtype: any): Series;
    /**
       * Exposes numerous string methods to manipulate Series
       */
    get str(): Str;
    /**
      * Returns Danfo Time Object that exposes different time properties
      */
    get dt(): TimeSeries;
    /**
       * Displays the data in a console friendly manner
       */
    print(): void;
    /**
        * Make plots of Series or DataFrame.
        * Uses the Plotly as backend, so therefore supports Plotly's configuration parameters
        * @param {string} div Name of the div to show the plot
        * @returns {Class} Plot class that expoese different plot type
        */
    plot(div: any): any;
    /**
       * Slice series by index
       * @param {Array} row list of index to slice by
       * @returns Series
       */
    iloc(row: any): Series;
    /**
       * Adds new values to the end of a Series
       * @param {Object} val Single value | Array | Series to append to the object
       * @param {Boolean} inplace Whether to perform operation inplace or not
       */
    append(val: any, inplace?: boolean): Series | undefined;
}
