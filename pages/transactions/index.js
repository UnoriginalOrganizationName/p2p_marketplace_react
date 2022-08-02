export const getStaticProps = async () => {
    const res = await fetch(process.env.API_URL + '/transactions');
    const data = await res.json();
    
    return {
        props: {transactions: data}
    }
}

const transactions = ({transactions}) => {
    
    const data = Array.from(transactions)
    
    return (
        <div>
            <h1 className="page-title">transactions</h1>
        {data.map(transaction =>(
            <div key={transaction.id}>
                <p></p>
                <p>start date: {transaction.start_date}</p>
                <p>end date:{transaction.end_date}</p>
            </div>
        ))}
    </div>
    )
}

export default transactions;