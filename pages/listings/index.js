export const getStaticProps = async () => {
    const res = await fetch(process.env.HOST + '/listings');
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
                {listing.start_date}
                {listing.end_date}
            </div>
        ))}
    </div>
    )
}

export default listings;