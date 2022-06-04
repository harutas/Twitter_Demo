import SimplePage from "./SimplePage"
import DetailPage from "./DetailPage"

const TweetImage = (props) => {
    return (
        <>
            <h5><strong>Tweet Image</strong> (After push button)</h5>
            <div className="container col-md-6 border border-3 d-flex flex-column p-3 mb-3">
                <SimplePage value={props.value} />
                <DetailPage value={props.value} />
            </div>
        </>
    )
}

export default TweetImage