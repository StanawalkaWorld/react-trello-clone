export interface DraftEntry {
    title: string;
    description: string;
    tag: string;
}

export interface Entry {
    id: string;
    title: string;
    description: string;
    created_at: number;
    modified_at: number;
    tag: string;
}
