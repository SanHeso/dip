import { Link } from 'react-router-dom'

const NotfoundPage = () => {
	return (
		<div>
			<h1>Not Found Page</h1>

			<p>
				This page is not exist. Go <Link to="/" >home</Link>?
			</p>
		</div>
	)
}

export default NotfoundPage