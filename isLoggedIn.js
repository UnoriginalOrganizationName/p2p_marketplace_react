export default async function getServerSideProps(context){
    const token = context.req.cookies?.jwt || null;

    const {data} = await authenticate();
}