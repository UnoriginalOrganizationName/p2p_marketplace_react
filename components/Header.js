import Link from "next/link";

const Header = () =>{
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <h1 className="navbar-brand">
                        <Link href="/">Marketplace</Link>
                    </h1>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link href="/login" className="nav-link">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/signup" className="nav-link">Sign Up</Link>
                        </li>

                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header