export const postProcessor = (snapshot: { id: string }) =>
({
    ...snapshot,
    id: snapshot.id || undefined
})