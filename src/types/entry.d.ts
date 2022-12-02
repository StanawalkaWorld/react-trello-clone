export interface DraftTag {
    name: string;
    color: string;
}

export interface Tag {
    id: string;
    name: string;
    color: string;
}

export interface DraftEntry {
    title: string;
    description: string;
    category: string;
    tags?: string[];
}

export interface Entry {
    id: string;
    title: string;
    description: string;
    created_at: number;
    modified_at: number;
    category: string;
    tags?: string[];
}
