import { useLogout } from '@/hooks/auth/useLogout'
import { useAppSelector } from '@/hooks/useAppSelector'
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import Link from 'next/link'
import NextLink from 'next/link'
import { FC } from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { CiSettings } from 'react-icons/ci'


const userMenuList: { name: string, path: string}[] = [
	{
		name: 'Cart',
		path: '/cart',
	},
	{
		name: 'Favorites',
		path: '/favorites',
	},
]

const UserMenu: FC = () => {
	const { user } = useAppSelector(state => state.user)
	const { mutateAsync: logout } = useLogout()
	return (
		<Menu placement='bottom-end'>
			<Link href='/admin' style={{marginLeft: 'auto'}}>
				<CiSettings color='#F7FAFC' size={30} />
			</Link>
			<MenuButton
				variant='ghost'
				as={Button}
				rightIcon={<FaUserCircle size={30} color='#F7FAFC' />}>
				{user?.userName}
			</MenuButton>
			<MenuList zIndex={1000}>
				{userMenuList.map(item => (
					<NextLink key={item.path} href={item.path}>
						<MenuItem
							textAlign='center'
							display='flex'
							justifyContent='center'
							gap='1'
							bg='transparent'
							_hover={{
								bg: 'blackAlpha.200',
							}}>
							{item.name}
						</MenuItem>
					</NextLink>
				))}
				<MenuItem as={Button} variant='primary' onClick={() => logout()}>
					Logout
				</MenuItem>
			</MenuList>
		</Menu>
	)
}

export default UserMenu
