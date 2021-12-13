import { Instance } from "mobx-state-tree"
import { BaseModel } from "./BaseModel"
import { Customer } from "./customers/Customer"

export type IBaseModel = Instance<typeof BaseModel>

export const baseModelCustomer = BaseModel(Customer)
