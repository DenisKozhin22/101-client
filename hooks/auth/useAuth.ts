import { useTypedSelector } from '@/types/useTypedSelector'

export const useAuth = () => useTypedSelector(state => state.user.user)
