export declare class StoreProcedureResult<T> {
    result: T[];
    constructor(result?: T[]);
    getResultPagination(data: any): {
        list: any;
        total_record: number;
    };
    getResultList(data: any): any;
    getResultDetail(data: any): any;
}
