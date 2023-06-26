'use client'

import { FC } from 'react'
import ReactPaginate from 'react-paginate'
import { useFilters } from '@/hooks/filter/useFilters'
import { useTypedSelector } from '@/types/useTypedSelector'
import { useSearchParams } from 'next/navigation'
import './Pagination.scss'

const Pagination: FC = () => {
	const { page } = useTypedSelector(state => state.filters.queryParams)
	const { totalPages } = useTypedSelector(state => state.devices)
	const searchParams = useSearchParams()
	const { updateQueryParams } = useFilters()
	return (
		<ReactPaginate
			previousLabel={'<'}
			nextLabel={'>'}
			breakLabel={'...'}
			breakClassName={'break-me'}
			pageCount={totalPages}
			forcePage={Number(page) - 1 || 0}
			marginPagesDisplayed={2}
			pageRangeDisplayed={5}
			onPageChange={page => {
				updateQueryParams('page', String(page.selected + 1))
			}}
			containerClassName={'pagination'}
			activeClassName={'active'}
		/>
	)
}

export default Pagination
