import { Instance, SnapshotOut, types } from 'mobx-state-tree';
import { Office, IOffice } from '../offices/Office';

const BaseEmployee = types
    .model("Employee", {
        id: types.optional(types.identifier, ""),
        officeId: types.maybe(types.reference(Office)),
        manager: types.optional(types.string, ""),
        firstName: types.optional(types.string, ""),
        lastName: types.optional(types.string, ""),
        emailAddress: types.optional(types.string, ""),
        extension: types.optional(types.string, ""),
        jobTitle: types.optional(types.string, "")
    })
    .actions(self => ({
        setOffice(office: IOffice | undefined) {
            self.officeId = office;
        },

        setManager(manager: string) {
            self.manager = manager;
        },

        setFirstName(firstName: string) {
            self.firstName = firstName;
        },

        setLastName(lastName: string) {
            self.lastName = lastName;
        },

        setEmailAddress(emailAddress: string) {
            self.emailAddress = emailAddress;
        },

        setExtension(extension: string) {
            self.extension = extension;
        },

        setJobTitle(jobTitle: string) {
            self.jobTitle = jobTitle;
        },
    }));

    const postProcessSnapshot = (snapshot: SnapshotOut<typeof BaseEmployee>) =>
    ({
        ...snapshot,
        id: snapshot.id || undefined,
        officeId: snapshot.officeId
    });

export const Employee = types.snapshotProcessor(BaseEmployee, { postProcessor: postProcessSnapshot })

export type IEmployee = Instance<typeof Employee>