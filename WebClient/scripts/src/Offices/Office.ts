import { Instance, types } from 'mobx-state-tree';
import { postProcessor } from '../common/recordPostProcessor';

const BaseOffice = types
    .model("Office", {
        id: types.optional(types.identifier, ""),
        city: types.optional(types.string, ""),
        phone: types.optional(types.string, ""),
        address: types.optional(types.string, ""),
        state: types.enumeration("state", ["Ontario", "Quebec", "Nova Scotia", "New Brunswick", "Manitoba",
        "British Columbia", "Prince Edward Island", "Saskatchewan", "Alberta", "Newfoundland and Labrador"]),
        country: types.optional(types.string, ""),
        postalCode: types.optional(types.refinement(types.string, p => /^$|[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i.test(p)), "")
    })
    .actions(self => ({
        setCity(city: string) {
            self.city = city;
        },

        setPhone(phone: string) {
            self.phone = phone;
        },

        setAddress(address: string) {
            self.address = address;
        },

        setState(state: string) {
            self.state = state;
        },

        setCountry(country: string) {
            self.country = country;
        },

        setPostalCode(postalCode: string) {
            self.postalCode = postalCode;
        }
    }));

export const Office = types.snapshotProcessor(BaseOffice, { postProcessor })

export type IOffice = Instance<typeof Office>