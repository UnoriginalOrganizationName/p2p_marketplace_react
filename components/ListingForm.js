import { Cookies } from "next/dist/server/web/spec-extension/cookies";
import {useForm} from 'react-hook-form'

const ListingForm = (props) => {

    const handleSubmit = async() => {
        const res = await fetch(process.env.HOST + '/listings', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                start_date,
                end_date
            }),
        })
        const data = await res.json()
        alert(data);
    }


    return (
        <div className="container">
            <form onSubmit={handleSubmit} method="post">
                <div class="mb-3">
                    <label for="start_date" class="form-label">Start Date</label>
                    <input type="date" class="form-control" id="start_date"/>
                </div>
                <div class="mb-3">
                    <label for="end_date" class="form-label">End Date</label>
                    <input type="date" class="form-control" id="end_date"/>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default ListingForm