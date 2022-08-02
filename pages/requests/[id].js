export const getStaticPaths = async() => {
    const res = await fetch(process.env.API_URL + '/requests');
    const data = await res.json();
    
    const paths = data.map(request =>{
        return{
            params: {id: request.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch(process.env.API_URL + /requests/ + id);
    const data = await res.json();

    return{
        props: {request: data}
    }
}
  
const Request = ({request}) =>{

    return(
        <div>
            <h1 className="page-title">Request Details</h1>
            <p>start date: {request.start_date}</p>
            <p>start date: {request.end_date}</p>
            <p>status: {request.status}</p>
        </div>
    )
}

export default Request