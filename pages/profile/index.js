import Link from "next/link"
const profile = (props) => {
    return(
        <div>
            <h1 className="page-title">Profile</h1>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2>My Listings</h2>
                        <Link href="/listings">View All</Link>
                    </div>
                    <div className="col">
                        <h2>My Requests</h2>
                        <Link href="/requests">View All</Link>
                    </div>
                    <div className="col">
                        <h2>My Transactions</h2>
                        <Link href="/transactions">View All</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default profile