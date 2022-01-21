import { flow, Instance, types } from 'mobx-state-tree';
import { deleteOrder, getOrder, saveOrder } from './ordersApi';
import { Order } from './Order';
import { InventoryItem } from '../inventory/InventoryItem';
import { Customer } from '../customers/Customer';
import { getInventoryItems } from '../inventory/inventoryApi';
import { getOrderCustomers } from '../customers/customersApi';


const defaultOrder = {
    status: 1
}

export const ProgressBar = types.model("progressBar", {
    width: 0,
    visibility: "hidden"
})
.actions((self) => ({
    increase(clearFunction: NodeJS.Timer, done: boolean) {
        if (self.width >= 100) {
            clearInterval(clearFunction);
            done = false;
        } else {
            self.width ++;
        }
    }
}))


export type IProgressBar = Instance<typeof ProgressBar>

export const OrderEditorStore = types
    .model("OrderEditorStore", {
        order: types.optional(Order, () => Order.create({})),
        inventoryItems: types.array(InventoryItem),
        customers: types.array(Customer),
        bar: types.maybe(ProgressBar)
    })
    .actions((self) => ({
        load: flow(function* (id?: string) {
            self.inventoryItems = yield getInventoryItems();
            self.customers = yield getOrderCustomers();

            if(!id) {
                self.order = Order.create(defaultOrder);
                return;
            }
            const order = yield getOrder(id);

            self.order = order;
        }),

        setBarWidth(width: number) {
            self.bar!.width = width;
        },

        setBarVisibility(visibility: string) {
            self.bar!.visibility = visibility;
        },

        save: flow(function* () {
            self.bar!.visibility = "visible";

            var done = false;            
            if (done === false) {
                done = true;
                self.bar!.width = 1;
                var id = setInterval(() => {
                    self.bar?.increase(id, done)
                }, 10);
            }

            if (self.order ) {
                self.order = yield saveOrder(self.order);
            }            
        }),
        
        moveProgressBar() {
            self.bar!.visibility = "visible";

            var done = false;            
            if (done === false) {
                done = true;
                self.bar!.width = 1;
                var id = setInterval(() => {
                    self.bar?.increase(id, done)
                }, 10);
            }
        },

        delete: flow(function* () {
            if (Order) {
                self.order = yield deleteOrder(self.order!);
            }
        })
    }));
    
    export type IOrderEditorStore = Instance<typeof OrderEditorStore>
