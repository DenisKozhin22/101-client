import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useActions } from '../useActions'
import { useTypedSelector } from '@/types/useTypedSelector'
import { useEffect } from 'react'
import { TypeProductDataFilters } from '@/redux/slices/filters/filters.types'

export const useFilters = () => {
	const pathname = usePathname()
	const searchParams = useSearchParams()
	const { updateQueryParam } = useActions()
	const { replace } = useRouter()

	const { queryParams, isFilterUpdated } = useTypedSelector(state => state.filters)

	useEffect(() => {
		searchParams.forEach((value, key) => {
			if (key !== 'page') {
				updateQueryParam({
					key: 'page' as keyof TypeProductDataFilters,
					value: '1',
				})
			}
			updateQueryParam({
				key: key as keyof TypeProductDataFilters,
				value,
			})
		})
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const updateQueryParams = (key: keyof TypeProductDataFilters, value: string) => {
		const newParams = new URLSearchParams(searchParams.toString())
		if (value) {
			if (key !== 'page') {
				newParams.set('page', String(1))
			}
			newParams.set(key, String(value))
		} else {
			newParams.delete(key)
		}

		replace(`${pathname}?${newParams.toString()}`)
		updateQueryParam({ key, value })
	}
	return {
		updateQueryParams,
		queryParams,
		isFilterUpdated,
	}
}
