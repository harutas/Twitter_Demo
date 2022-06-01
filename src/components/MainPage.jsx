import TextArea from "./TextArea"
import TweetImage from "./TweetImage"

const MainPage = () => {
    return (
        <div className='conttainer mt-3'>
        <div className='d-flex flex-column align-items-center'>
          <TextArea />
          <TweetImage />
        </div>

      </div>
    )
}

export default MainPage