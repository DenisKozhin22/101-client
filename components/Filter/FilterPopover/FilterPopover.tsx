'use client'

import { FC } from 'react'
import { Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { useTypedSelector } from '@/types/useTypedSelector'
import { useFilters } from '@/hooks/filter/useFilters'

const sortListbyPrice = [
	{
		sort: 'desc',
	},
	{
		sort: 'asc',
	},
]

const FilterPopover: FC = () => {
	const { updateQueryParams } = useFilters()
	const { price } = useTypedSelector(state => state.filters.queryParams)
	return (
		<Menu placement='bottom-end'>
			<MenuButton variant='main' as={Button} rightIcon={<ChevronDownIcon />}>
				{price}
			</MenuButton>
			<MenuList>
				{sortListbyPrice.map(item => (
					<MenuItem
						key={item.sort}
						onClick={() => updateQueryParams('price', item.sort)}
						_hover={{
							bg: 'blackAlpha.200',
						}}>
						{item.sort}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	)
}

export default FilterPopover
