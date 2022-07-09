export declare class StoreProcedureResultOutput<T> {
    result: T[];
    constructor(result?: T[]);
    getResultOutputPagination(data: any): {
        list: any;
        total_record: number;
        output: any;
    };
    getResultOutputList(data: any): {
        total_record: number;
        list: any;
        output: any;
    };
    getResultOutputDetail(data: any): {
        total_record: number;
        list: any;
        output: any;
    };
}
