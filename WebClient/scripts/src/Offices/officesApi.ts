import { getSnapshot, SnapshotIn } from 'mobx-state-tree';
import { IOffice, Office } from './Office';

export const getOffices = async () => {
    const response = await fetch(`${AppBasePath}/api/offices`);

    const results = await response.json();

    return results.map((i: SnapshotIn<IOffice>) => Office.create(i));
};

export const getOffice = async (id: string) => {
    const response = await fetch(`${AppBasePath}/api/offices/${id}`);

    return Office.create(await response.json());
};

export const saveOffice = async (office: IOffice) => {
    const response = await fetch(`${AppBasePath}/api/offices`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(getSnapshot(office))
    });

    return Office.create(await response.json());
};

export const deleteOffice = async (office: IOffice) => {
    const response = await fetch(`${AppBasePath}/api/offices`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(getSnapshot(office))
    });

    return Office.create(await response.json());
}
