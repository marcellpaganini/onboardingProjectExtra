import { Instance, types } from 'mobx-state-tree';
import { postProcessor } from '../common/recordPostProcessor';

const BaseCustomer = types
    .model("Customer", {
        id: types.optional(types.identifier, ""),
        firstName: types.optional(types.string, ""),
        lastName: types.optional(types.string, ""),
        deliveryAddress: types.optional(types.string, ""),
        city: types.optional(types.string, ""),
        state: types.enumeration("state", ["Ontario", "Quebec", "Nova Scotia", "New Brunswick", "Manitoba",
                                 "British Columbia", "Prince Edward Island", "Saskatchewan", "Alberta", "Newfoundland and Labrador"]),
        postalCode: types.optional(types.refinement(types.string, p => /^$|[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i.test(p)), ""),
        country: types.optional(types.string, "Canada"),
        emailAddress: types.optional(types.refinement(types.string, e => /^$|\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi.test(e)), ""),
        phoneNumber: types.optional(types.refinement(types.string, p => /^$|(?:\d{1}\s)?\(?(\d{3})\)?-?\s?(\d{3})-?\s?(\d{4})/g.test(p)), "")
    })
    .actions(self => ({
        setFirstName(firstName: string) {
            self.firstName = firstName;
        },

        setLastName(lastName: string) {
            self.lastName = lastName;
        },

        setDeliveryAddress(deliveryAddress: string) {
            self.deliveryAddress = deliveryAddress;
        },

        setCity(city: string) {
            self.city = city;
        },

        setState(state: string) {
            self.state = state;
        },

        setPostalCode(postalCode: string) {
            self.postalCode = postalCode;
        },

        setCountry(country: string) {
            self.country = country;
        },

        setEmailAddress(emailAddress: string) {
            self.emailAddress = emailAddress;
        },

        setPhoneNumber(phoneNumber: string) {
            self.phoneNumber = phoneNumber;
        }
    }))
    .views(self => ({
        get fullName() {
            return `${self.firstName} ${self.lastName}`;
        },

        get fullAddress() {
            return `${self.deliveryAddress}, ${self.city}, ${self.country} - PC: ${self.postalCode}`;
        }
    }));

export const Customer = types.snapshotProcessor(BaseCustomer, { postProcessor })

export type ICustomer = Instance<typeof Customer>