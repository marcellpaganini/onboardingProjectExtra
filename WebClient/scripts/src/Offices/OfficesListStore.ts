import { flow, types } from 'mobx-state-tree';
import { getOffices } from './officesApi';
import { Office } from './Office';

export const OfficesListStore = types
    .model("OfficesListStore", {
        offices: types.maybe(types.array(Office)),
        office: types.maybe(Office)
    })
    .actions((self) => ({
        load: flow(function* () {
            self.offices = yield getOffices();
        })
    }));