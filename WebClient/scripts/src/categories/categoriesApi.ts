import { getSnapshot, SnapshotIn } from 'mobx-state-tree';
import { ICategory, Category } from './Category';

export const getCategories = async () => {
    const response = await fetch(`${AppBasePath}/api/categories`);

    const results = await response.json();

    return results.map((i: SnapshotIn<ICategory>) => Category.create(i));
};

export const getCategory = async (id: string) => {
    const response = await fetch(`${AppBasePath}/api/categories/${id}`);

    return Category.create(await response.json());
};

export const saveCategory = async (category: ICategory) => {
    const response = await fetch(`${AppBasePath}/api/categories`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(getSnapshot(category))
    });

    return Category.create(await response.json());
};

export const deleteCategory = async (category: ICategory) => {
    const response = await fetch(`${AppBasePath}/api/categories`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(getSnapshot(category))
    });

    return Category.create(await response.json());
}
