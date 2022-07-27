export const getStaticPaths = async() => {
    const res = await fetch(process.env.HOST + '/listings');
    const data = await res.json();
    
    const paths = data.map(listing =>{
        return{
            params: {id: listing.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch(process.env.HOST + /listings/ + id);
    const data = await res.json();

    return{
        props: {listing: data}
    }
}
  
const Listing = ({listing}) =>{

    return(
        <div>
            <h1 className="page-title">Listing Details</h1>
            <p>start date: {listing.start_date}</p>
            <p>start date: {listing.end_date}</p>
        </div>
    )
}

export default Listing