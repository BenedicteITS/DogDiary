import { Link } from "react-router-dom"

const NavBar = () => {
    return(
<div className=" border-b border-black p-4 m-6">
    <nav>
        <ul className="flex flex-row space-x-6 text-xl">
            <li><Link to="/" className="hover:text-amber-600 transition">Home</Link></li>
            <li><Link to="myPets" className="hover:text-amber-600 transition">My Pets</Link></li>
            <li><Link to="registerNewForm" className="hover:text-amber-600 transition">Register Illness</Link></li>
            <li><Link to="forms" className="hover:text-amber-600 transition">Forms</Link></li>
        </ul>
    </nav>
</div>
    )
}

export default NavBar