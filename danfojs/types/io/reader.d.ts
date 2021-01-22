import { DataFrame } from "../core/frame";
/**
 * Reads a CSV file from local or remote storage
 *
 * @param {source} URL or local file path to retreive CSV file. If it's a local path, it
 * must have prefix `file://` and it only works in node environment.
 * @param {config} (Optional). A CSV Config object that contains configurations
 *     for reading and decoding from CSV file(s).
 *
 * @returns {Promise} DataFrame structure of parsed CSV data
 */
export declare const read_csv: (source: any, chunk: any) => Promise<DataFrame>;
/**
 * Reads a JSON file from local or remote address
 *
 * @param {source} URL or local file path to retreive JSON file.
 * @returns {Promise} DataFrame structure of parsed CSV data
 */
export declare const read_json: (source: any) => Promise<DataFrame>;
/**
 * Reads an Excel file from local or remote address
 *
 *  * @param {kwargs} kwargs --> {
 *                        source       : string, URL or local file path to retreive Excel file.
 *                        sheet_name   : string, (Optional) Name of the sheet which u want to parse. Default will be the first sheet.
 *                        header_index : int, (Optional) Index of the row which represents the header(columns) of the data. Default will be the first non empty row.
 *                        data_index   : int, (Optional)Index of the row from which actual data(content) starts. Default will be the next row of `header_index`
 *                    }
 * @returns {Promise} DataFrame structure of parsed Excel data
 */
export declare const read_excel: (kwargs: any) => Promise<DataFrame>;
/**
 * Opens a file using frictionless.js specification.
 * @param {string} pathOrDescriptor A path to the file/resources. It can be a local file,
 * a URL to a tabular data (CSV, EXCEL) or Datahub.io Data Resource.
 * Data comes with extra properties and specification conforming to the Frictionless Data standards.
 * @param {object} configs { data_num (Defaults => 0): The specific dataset to load, when reading data from a datapackage.json,
 *                          header (Defaults => true): Whether the dataset contains header or not.
 *                          }
 * @returns {DataFrame} Danfo DataFrame/Series
 */
export declare const read: (path_or_descriptor: any, configs?: {
    data_num: number;
    header: boolean;
}) => Promise<DataFrame>;
