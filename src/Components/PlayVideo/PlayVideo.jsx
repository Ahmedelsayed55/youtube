import "./PlayVideo.css";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { IoIosShareAlt } from "react-icons/io";
import { MdOutlineSaveAlt } from "react-icons/md";
import user from "../../assets/1000_F_339459697_XAFacNQmwnvJRqe1Fe9VOptPWMUxlZP8.jpg";
import { useEffect, useState } from "react";
import { API_KEY, value_converter } from "../../data";
import moment from "moment";
import { useParams } from "react-router-dom";
const PlayVideo = () => {

  const {videoId} = useParams();

  const [apiData, setApiData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [comment, setComment] = useState([]);
  

  const fetchVideoData = async () => {
    //Fetch Video Data
    const videoData_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
    await fetch(videoData_url)
    .then(response => response.json())
    .then(data => setApiData(data.items[0]));
  }

  const fetchChannelData = async () => {
    //Fetch Channel Data
    const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
    await fetch(channelData_url)
    .then(response => response.json())
    .then(data => setChannelData(data.items[0]));

    const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`;
    await fetch(comment_url)
    .then(response => response.json())
    .then(data => setComment(data.items));
  }

  useEffect(() => {
    fetchVideoData();
  },[videoId])

  useEffect(() => {
    fetchChannelData();
  },[apiData])
  return (
    <div className="play-video">
      <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <h3>{apiData ? apiData.snippet.title:"title here"}</h3>
      <div className="play-video-info">
        <p>{value_converter(apiData ? apiData.statistics.viewCount:"1m")} views&bull; {apiData? moment(apiData.snippet.publishedAt).fromNow():""}</p>
        <div>
          <span>
            <AiOutlineLike className="icon-img"/> {value_converter(apiData ? apiData.statistics.likeCount:"1k")}
          </span>
          <span>
            <AiOutlineDislike className="icon-img"/>
          </span>
          <span>
            <IoIosShareAlt className="icon-img"/> Share
          </span>
          <span>
            <MdOutlineSaveAlt className="icon-img"/> Save
          </span>
        </div>
      </div>
      <hr />
        <div className="publisher">
          <img src={channelData ? channelData.snippet.thumbnails.default.url:""} alt="logo chanel" />
          <div>
            <p>{apiData ? apiData.snippet.channelTitle:""}</p>
            <span> {value_converter(channelData ? channelData.statistics.subscriberCount:"1m")} Subscribe</span>
          </div>
          <button>Subscribe</button>
        </div>
        <div className="vid-description">
          <p>{apiData ? apiData.snippet.description.slice(0,300):"description here"}</p>
          <hr />
          <h4>{value_converter(apiData ? apiData.statistics.commentCount:"1k")} Comments</h4>
          {comment.map((item, index) => (
            <div key={index} className="comment">
              <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
              <div>
                <h3>{item.snippet.topLevelComment.snippet.authorDisplayName} <span>{moment(item.snippet.topLevelComment.snippet.updatedAt).fromNow()}</span></h3>
                <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                <div className="comment-action">
                <AiOutlineLike className="icon-img"/> 
                <span>{value_converter(item.snippet.topLevelComment.snippet.likeCount)}</span>
                <AiOutlineDislike className="icon-img" />{" "}
                </div>
              </div>
            </div>
          ))}
         
        </div>
    </div>
  );
};

export default PlayVideo;
