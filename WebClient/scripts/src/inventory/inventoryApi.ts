import { getSnapshot, SnapshotIn } from 'mobx-state-tree';
import { IInventoryItem, InventoryItem } from './InventoryItem';

export const getInventoryItems = async () => {
    const response = await fetch(`${AppBasePath}/api/inventory`);

    const results = await response.json();

    return results.map((i: SnapshotIn<IInventoryItem>) => InventoryItem.create(i));
};

export const getInventoryItem = async (id: string) => {
    const response = await fetch(`${AppBasePath}/api/inventory/${id}`);

    return InventoryItem.create(await response.json());
};

export const saveInventoryItem = async (item: IInventoryItem) => {
    const response = await fetch(`${AppBasePath}/api/inventory`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(getSnapshot(item))
    });

    return InventoryItem.create(await response.json());
}
