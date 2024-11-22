import "./Recommended.css";
import aa from "../../assets/download.jpg";
import { useEffect, useState } from "react";
import { API_KEY, value_converter,} from "../../data";
import { Link } from "react-router-dom";
const Recommended = ({ categoryId }) => {
  const [apiData, setApiData] = useState([]);

  const fetchData = async () => {
    const relatedVideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;
    await fetch(relatedVideo_url)
      .then((response) => response.json())
      .then((data) => setApiData(data.items));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="recommended">
      {apiData.map((item, index) => (
        <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className="side-video-list">
          <img src={item.snippet.thumbnails.medium.url} alt="" />
          <div className="vid-info">
            <h4>{item.snippet.title}</h4>
            <p className="channel-name">{item.snippet.channelTitle}</p>
            <p className="view"> {value_converter(item.statistics.viewCount)} Views</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Recommended;