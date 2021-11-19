export const handlePropChange = <T>(item: T, handler: (obj: T, val: string) => void) => (e: Event) => {
    const target = <HTMLInputElement>e.currentTarget;

    const newVal = target.value;

    handler(item, newVal);
}

export const handleSubmit = (f: Function) => (e: Event) => {
    e.preventDefault();

    f();

    return false;
}