import { Instance, types } from 'mobx-state-tree';
import { postProcessor } from './common/recordPostProcessor';

const BaseModel = (record: Record) =>
    types.model("BaseModel", {
        pageNumber: types.optional(types.number, 1),
        pageSize: types.optional(types.number, 10),
        firstPage: types.optional(types.string, ""),
        lastPage: types.optional(types.string, ""),
        totalPages: types.optional(types.number, 1),
        nextPage: types.optional(types.string, ""),
        previousPage: types.optional(types.string, ""),
        data: types.array(record),
        succeeded: types.optional(types.boolean, true),
        errors: types.array(types.string),
        message: types.optional(types.string, "")
    }) 
    .actions(self => ({
        setPageNumber(pageNumber: number) {
            self.pageNumber = pageNumber;
        },

        setPageSize(pageSize: number) {
            self.pageSize = pageSize;
        },

        setFirstPage(firstPage: string) {
            self.firstPage = firstPage;
        },

        setLastPage(lastPage: string) {
            self.lastPage = lastPage;
        },

        setTotalPages(totalPages: number) {
            self.totalPages = totalPages;
        },

        setNextPage(nextPage: string) {
            self.nextPage = nextPage;
        },

        setData(data: Record[]) {
            self.data = data;
        },

        setSucceeded(succeeded: boolean) {
            self.succeeded = succeeded;
        },

        setErrors(errors: string[]) {
            self.errors = errors;
        },

        setMessage(message: string) {
            self.message = message;
        }
    }));

export const Customer = types.snapshotProcessor(BaseModel, { postProcessor })

export type ICustomer = Instance<typeof Customer>