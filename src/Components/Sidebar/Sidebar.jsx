import './Sidebar.css'
import home from '../../assets/home.png'
import games from '../../assets/games.png'
import auto from '../../assets/auto.png'
import sport from '../../assets/simple-football-sport-icon-on-white-background-free-vector.jpg'
import entertainment from '../../assets/entertainment.png'
import technology from '../../assets/technolgy.png'
import music from '../../assets/music.png'
import blogs from '../../assets/blogs.png'
import news from '../../assets/transparent-hd-newspaper-news-press-white-icon-701751695035114rnurowkkmr.png'
import face1 from '../../assets/3.webp'
import face2 from '../../assets/2.jpg'
import face3 from '../../assets/1.jpg'
import face4 from '../../assets/c6511406-ac84-4643-9393-7c66b72756a9.jpg'
import face5 from '../../assets/3445adca3a9b11eeb6466a2aaa288599_upscaled.jpg'


const Sidebar = ({sidebar, category, setCategory}) => {
  return (
    <div className={`sidebar ${sidebar ? '' : 'small-sidebar'}`}>
      <div className="sortcut-links">
        <div className={`side-link flex-div ${category === 0 ? 'active' : ''}`} onClick={()=>setCategory(0)}>
          <img src={home} alt="home" />
          <p>Home</p>
        </div>
        <div className={`side-link flex-div ${category === 20 ? 'active' : ''}`} onClick={()=>setCategory(20)}>
          <img src={games} alt="games" />
          <p>Games</p>
        </div>
        <div className={`side-link flex-div ${category === 2 ? 'active' : ''}`} onClick={()=>setCategory(2)}>
          <img src={auto} alt="auto" />
          <p>Automobiles</p>
        </div>
        <div className={`side-link flex-div ${category === 17 ? 'active' : ''}`} onClick={()=>setCategory(17)}>
          <img src={sport} alt="sport"  style={{borderRadius: '50%'}}/>
          <p>Sports</p>
        </div>
        <div className={`side-link flex-div ${category === 24 ? 'active' : ''}`} onClick={()=>setCategory(24)}>
          <img src={entertainment} alt="entertainment" />
          <p>Entertainment</p>
        </div>
        <div className={`side-link flex-div ${category === 28 ? 'active' : ''}`} onClick={()=>setCategory(28)}>
          <img src={technology} alt="technology" />
          <p>Technology</p>
        </div>
        <div className={`side-link flex-div ${category === 10 ? 'active' : ''}`} onClick={()=>setCategory(10)}>
          <img src={music} alt="music" />
          <p>Music</p>
        </div>
        <div className={`side-link flex-div ${category === 22 ? 'active' : ''}`} onClick={()=>setCategory(22)}>
          <img src={blogs} alt="blogs" />
          <p>Blogs</p>
        </div>
        <div className={`side-link flex-div ${category === 25 ? 'active' : ''}`} onClick={()=>setCategory(25)}>
          <img src={news} alt="news" />
          <p>News</p>
        </div>
        <hr />
      </div>
      <div className="subscribed-list">
        <h3>Subscribed</h3>
        <div className="side-link flex-div">
          <img src={face1} alt="face1" />
          <p>John Doe</p>
        </div>
        <div className="side-link flex-div">
          <img src={face2} alt="face2" />
          <p>John Doe</p>
        </div>
        <div className="side-link flex-div">
          <img src={face3} alt="face3" />
          <p>John Doe</p>
        </div>
        <div className="side-link flex-div">
          <img src={face4} alt="face4" />
          <p>John Doe</p>
        </div>
        <div className="side-link flex-div">
          <img src={face5} alt="face5" />
          <p>John Doe</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
