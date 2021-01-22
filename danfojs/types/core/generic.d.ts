/**
* Copyright 2020, JsData.
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
export default class NDframe {
    kwargs: any;
    series: boolean;
    data: any[];
    row_data_tensor: tf.Tensor<tf.Rank>;
    col_data: any[];
    col_data_tensor: tf.Tensor<tf.Rank>;
    index_arr: number[];
    columns: any;
    col_types: any[];
    /**
     * N-Dimensiona data structure. Stores multi-dimensional
     * data in a size-mutable, labeled data structure. Analogous to the Python Pandas DataFrame.
     *
     * @param {data} Array JSON, Tensor. Block of data.
     * @param {kwargs} Object Optional Configuration Object
     *                 {columns: Array of column names. If not specified and data is an array of array, use range index.
     *                  dtypes: Data types of the columns,
     *                  index: row index for subseting array }
     *
     * @returns NDframe
     */
    constructor(data: any, kwargs?: any);
    /**
     *
     * @param {Array} data
     * Read array of data into NDFrame
     */
    _read_array(data: any): void;
    /**
     *  Convert Javascript Object of arrays into NDFrame
     * @param {*} data Object of Arrays
     * @param {*} type type 1 object are of JSON form [{a: 1, b: 2}, {a: 30, b: 20}],
     *                 type 2 object are of the form {a: [1,2,3,4], b: [30,20, 30, 20}]
     */
    _read_object(data: any, type: any): void;
    /**
     * Sets the data type of the NDFrame. Supported types are ['float32', "int32", 'string', 'boolean']
     * @param {Array<String>} dtypes Array of data types.
     * @param {Boolean} infer Whether to automatically infer the dtypes from the Object
     */
    _set_col_types(dtypes: any, infer: any): void;
    /**
     * Returns the data types in the DataFrame
     * @return {Array} list of data types for each column
     */
    get dtypes(): any[];
    /**
     * Gets dimension of the NDFrame
     * @returns {Integer} dimension of NDFrame
     */
    get ndim(): number;
    /**
     * Gets values for index and columns
     * @return {Object} axes configuration for index and columns of NDFrame
     */
    get axes(): {
        index: number[];
        columns: any;
    };
    /**
     * Gets index of the NDframe
     * @return {Array} array of index from series
     */
    get index(): number[];
    /**
     * Sets index of the NDFrame
     */
    __set_index(labels: any): void;
    /**
     * Generate a new index for NDFrame.
     */
    __reset_index(): void;
    /**
     * Gets a sequence of axis dimension along row and columns
     * @returns {Array} the shape of the NDFrame
     */
    get shape(): number[];
    /**
     * Gets the values in the NDFrame in JS array
     * @returns {Array} Arrays of arrays of data instances
     */
    get values(): any[];
    /**
     * Gets the column names of the data
     * @returns {Array} strings of column names
     */
    get column_names(): any;
    /**
     * Return a boolean same-sized object indicating if the values are NaN. NaN and undefined values
     *  gets mapped to True values. Everything else gets mapped to False values.
     * @return {Array}
     */
    __isna(): any[];
    get size(): number;
    /**
     * Return object data as comma-separated values (csv).
     * @returns {Promise<String>} CSV representation of Object data
     */
    to_csv(): Promise<string>;
    /**
     * Return object as JSON string.
     * @returns {Promise <JSON>} JSON representation of Object data
     */
    to_json(): Promise<string>;
    /**
     * Prints the data in a Series as a grid of row and columns
     */
    toString(): any;
    iloc(arg0: {
        rows: string[];
        columns: string[];
    }): void;
    loc(arg0: {
        rows: string[];
        columns: any;
    }): void;
    /**
     * Pretty prints n number of rows in a DataFrame or Series in the console
     * @param {rows} Number of rows to print
     */
    print(): void;
}
