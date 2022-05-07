import { Navigate } from 'react-router-dom'
import { useAuth } from 'hooks/useAuth'
import { useDispatch } from 'react-redux'
import { removeUser } from 'store/slices/userSlice'


const HomePage = () => {
	const dispatch = useDispatch();

	const {isAuth, email} = useAuth();

	return isAuth ? (
		<div>
			<h1>Welcome to main page</h1>

			<button onClick={() => dispatch(removeUser())} >Log out from {email}</button>
		</div>
	) : (
		<Navigate to="/Login" />
	)
}

export default HomePage