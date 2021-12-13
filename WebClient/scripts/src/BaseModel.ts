import { IAnyType, IMSTArray, Instance, types } from 'mobx-state-tree';

export const BaseModel = <T extends IAnyType>(model: T) =>
    types.model("BaseModel", {
        pageNumber: types.optional(types.number, 1),
        pageSize: types.optional(types.number, 10),
        firstPage: types.maybeNull(types.string),
        lastPage: types.maybeNull(types.string),
        totalPages: types.optional(types.number, 1),
        nextPage: types.maybeNull(types.string),
        previousPage: types.maybeNull(types.string),
        data: types.array(model),
        succeeded: types.optional(types.boolean, true),
        errors: types.maybeNull(types.array(types.string)),
        message: types.maybeNull(types.string)
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

        setData(data: IMSTArray<T>) {
            self.data = data;
        },

        setSucceeded(succeeded: boolean) {
            self.succeeded = succeeded;
        },

        setErrors(errors: IMSTArray<any>) {
            self.errors = errors;
        },

        setMessage(message: string) {
            self.message = message;
        }
    }));

export type IBaseModel = Instance<ReturnType<typeof BaseModel>>