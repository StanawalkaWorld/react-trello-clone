export interface DraftEntry {
    title: string;
    description: string;
    tag: string;
}

export interface Entry {
    id: string;
    title: string;
    description: string;
    created_at: Date;
    modified_at: Date;
    tag: string;
}
