export const getStaticProps = async () => {
    const res = await fetch(process.env.API_URL + '/listings');
    const data = await res.json();
    
    return {
        props: {listings: data}
    }
}

const listings = ({listings}) => {
    
    const data = Array.from(listings)
    
    return (
        <div>
            <h1 className="page-title">Listings</h1>
        {data.map(listing =>(
            <div key={listing.id}>
                <p>start date: {listing.start_date}</p>
                <p>end date:{listing.end_date}</p>
            </div>
        ))}
    </div>
    )
}

export default listings;