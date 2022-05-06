import { SignUp } from "components/SignUp"
import { Link } from "react-router-dom"

const RegPage = () => {
	return (
		<div>
			<h1>Registration</h1>
			<SignUp />
			<p>
				Already have an account? <Link to="/login" >Sign in</Link>
			</p>
		</div>
	)
}

export default RegPage