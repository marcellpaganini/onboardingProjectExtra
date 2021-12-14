import { Instance } from "mobx-state-tree"
import { BaseModel } from "./BaseModel"
import { Customer } from "./customers/Customer"
import { Employee } from "./employees/Employee"

export type IBaseModel = Instance<typeof BaseModel>

export const baseModelCustomer = BaseModel(Customer)
export const baseModelEmployee = BaseModel(Employee)
