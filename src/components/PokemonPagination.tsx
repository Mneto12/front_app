import styles from '../styles/pagination.module.scss'

interface Props {
    perPage: number
    page: number
    nextPage: () => void
    previousPage: () => void
    maxItems: number
}

export const Pagination = ({
    perPage,
    page,
    nextPage,
    previousPage,
    maxItems
}: Props) => {
    const lastPage = Math.ceil(maxItems / perPage);

    return (
        <div className={styles.pagination}>
            <button disabled={page === 1} onClick={previousPage}>
                Anterior
            </button>
            <span>{page}</span>
            <button disabled={page === lastPage} onClick={nextPage}>
                Siguiente
            </button>
        </div>
    )
}