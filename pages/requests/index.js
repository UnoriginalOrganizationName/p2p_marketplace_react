export const getStaticProps = async () => {
    const res = await fetch(process.env.API_URL + '/requests');
    const data = await res.json();
    
    return {
        props: {requests: data}
    }
}

const requests = ({requests}) => {
    
    const data = Array.from(requests)
    
    return (
        <div>
            <h1 className="page-title">Requests</h1>
        {data.map(request =>(
            <div key={request.id}>
                <p></p>
                <p>start date: {request.start_date}</p>
                <p>end date:{request.end_date}</p>
                <p>status: {request.status}</p>
            </div>
        ))}
    </div>
    )
}

export default requests;