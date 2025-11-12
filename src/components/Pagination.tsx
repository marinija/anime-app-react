import type { PaginationProps } from '../models/pagination.model.ts';

const Pagination = ({ pagination, onPageChange }: PaginationProps) => {
    const { current_page, last_visible_page, has_next_page } = pagination;

    const pages = Array.from({ length: last_visible_page }, (_, i) => i + 1);

    return (
        <div className="flex justify-center gap-2 mt-4">
            <button
                disabled={current_page === 1}
                onClick={() => onPageChange(current_page - 1)}
                className="px-3 py-1 border rounded disabled:opacity-50"
            >
                Prev
            </button>

            {pages.slice(Math.max(0, current_page - 3), current_page + 2).map(page => (
                <button
                    key={page}
                    className={`px-3 py-1 border rounded ${page === current_page ? "bg-gray-700 text-white" : ""}`}
                    onClick={() => onPageChange(page)}
                >
                    {page}
                </button>
            ))}

            <button
                disabled={!has_next_page}
                onClick={() => onPageChange(current_page + 1)}
                className="px-3 py-1 border rounded disabled:opacity-50"
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
