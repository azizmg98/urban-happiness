import AlbumsList from "../AlbumsList";
import "../App.css"

function Home() {
    return (
        <div className='App'>
          <h1>Urban happiness</h1>
          <p>the music fanatics happy place</p>
          <img
            className="cover"
            alt="musician busking on the street"
            src="https://i.ytimg.com/vi/PLmxlfG2L2o/maxresdefault.jpg"
          ></img>
          <h2>{AlbumsList[0].name}</h2>
          <img className="cover" src={AlbumsList[0].image} />
          
        </div>
      );
}

export default Home;