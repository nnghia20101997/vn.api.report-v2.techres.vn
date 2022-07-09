export declare class Pagination {
    page: number;
    limit: number;
    constructor(page: number, limit: number);
    getOffset(): number;
    getLimit(): number;
}
