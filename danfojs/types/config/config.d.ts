/**
 * Package wide configuration class
 */
export declare class Configs {
    private table_width;
    private table_truncate;
    private dtype_test_lim;
    private table_max_row;
    private table_max_col_in_console;
    constructor();
    set_width(val: number): void;
    get get_width(): number;
    set_max_col_in_console(val: number): void;
    get get_max_col_in_console(): number;
    set_row_num(val: number): void;
    get get_max_row(): number;
    get get_truncate(): number;
    set_truncate(val: number): void;
    get get_dtype_test_lim(): number;
    set_dtype_test_lim(val: number): void;
}
