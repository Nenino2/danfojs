import * as tf from '@tensorflow/tfjs-node';
import { Series } from "../core/series";
import { DataFrame } from "../core/frame";
export declare class MinMaxScaler {
    max: any;
    min: any;
    /**
     * Fit minmax scaler on data, to obtain their min and max value
     * @param {data} data [DataRame | Series | Array]
     * @returns Array
     */
    fit(data: any): Series | DataFrame;
    /**
     * Transform an array using the min and max generated from the fitting on data
     * @param {data} data [Array]
     * @returns array
     */
    transform(data: any): Series | DataFrame;
}
export declare class StandardScaler {
    std: tf.Tensor<tf.Rank>;
    mean: any;
    /**
     *
     * @param {data} data [DataRame | Series | Array]
     * @returns Array
     */
    fit(data: any): Series | DataFrame;
    transform(data: any): Series | DataFrame;
}
