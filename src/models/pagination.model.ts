import type { IAnime } from './anime.model.ts';

export interface IPageItems {
    count: number;
    per_page: number;
    total: number;
}

export interface IPagination {
    current_page: number;
    has_next_page: boolean;
    items: IPageItems;
    last_visible_page: number;
}

export interface IPager {
    data: Array<IAnime>;
    pagination: IPagination;
}

export interface PaginationProps {
    pagination: IPagination;
    onPageChange: (page: number) => void;
}
