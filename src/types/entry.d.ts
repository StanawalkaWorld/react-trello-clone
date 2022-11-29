export interface Tag {
    id: string;
    name: string;
}

export interface DraftEntry {
    title: string;
    description: string;
    tag_id: string;
}

export interface Entry {
    id: string;
    title: string;
    description: string;
    created_at: Date;
    modified_at: Date;
    tag_id: string;
}
