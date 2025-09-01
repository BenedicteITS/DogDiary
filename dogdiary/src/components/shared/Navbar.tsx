import { Link } from "react-router-dom"

const NavBar = () => {
    return(
<div className="bg-gray-200 border-b border-black p-4 m-bottom">
    <nav>
        <ul className="flex flex-row space-x-6 text-xl">
            <li><Link to="/">Home</Link></li>
            <li><Link to="myPets">My Pets</Link></li>
            <li><Link to="registerNewForm">Register Illness</Link></li>
            <li><Link to="forms">Forms</Link></li>
        </ul>
    </nav>
</div>
    )
}

export default NavBar