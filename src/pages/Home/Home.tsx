import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Home() {
  const [name, setName] = useState(null);
  const [data, setData] = useState([]);
  useEffect(() => {
    const CallApi = async () => {
      const req = await axios.get(
        `http://127.0.0.1:3000/api/v1/manga/search/${name}`
      );
      // console.log(req);
      setData(req.data.data.results);
    };
    CallApi();
  }, [name]);
  return (
    <>
      <div className="search">
        <input
          type="search"
          placeholder="Search manga...."
          onChange={(e: any) => setName(e.target.value)}
        />
        <div className="data">
          {data &&
            data.map((dat, i) => {
              const { id, title, genre } = dat;
              return (
                <div className="main_datas" key={i}>
                  <Link to={`/mangainfo?infoid=${id}`}>
                    <h1>{title}</h1>
                    {/* <img src={image} alt={id} />
                     */}
                  </Link>
                  <p>{genre}</p>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default Home;
