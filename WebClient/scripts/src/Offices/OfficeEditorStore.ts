import { flow, types } from 'mobx-state-tree';
import { deleteOffice, getOffice, saveOffice } from './officesApi';
import { Office } from './Office';

const defaultOffice = {
    city: "",
    phone: "",
    address: "",
    state: "New Brunswick",
    postalCode: "",
    country: "Canada"
};

export const OfficeEditorStore = types
    .model("OfficeEditorStore", {
        office: types.maybe(Office)
    })
    .actions((self) => ({
        load: flow(function* (id?: string) {
            if (!id) {
                self.office = Office.create(defaultOffice);
                return;
            }

            const office = yield getOffice(id);

            self.office = office;
        }),

        save: flow(function* () {
            if (self.office) {
                self.office = yield saveOffice(self.office);
            }
        }),

        delete: flow(function* () {
            if (Office) {
                self.office = yield deleteOffice(self.office!);
            }
        })
    }));
