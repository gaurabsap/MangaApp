import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

interface Chapter {
  id: string;
  chapter: string;
  title: string;
}

interface Data {
  chapters: Chapter[];
  title: string;
  image: string;
}

const Info = (): JSX.Element => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("infoid");
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    const CallApi = async (): Promise<void> => {
      const req = await axios.get(
        `https://manga-api.onrender.com/api/v1/manga/info?infoId=${id}`
      );
      setData([req.data.data]);
    };
    CallApi();
  }, [id]);

  return (
    <>
      <Link to="/">Home</Link>
      {data &&
        data.map((dat: Data, i: number) => {
          const { chapters, title, image } = dat;
          return (
            <div className="datas" key={i}>
              <h1>{title}</h1>
              <img src={image} alt={image} />
              {chapters.map((dats: Chapter, j: number) => {
                const { id, title } = dats;
                return (
                  <div className="chap" key={j}>
                    <Link to={`/read?id=${id}`}>
                      <h1>{title}</h1>
                    </Link>
                  </div>
                );
              })}
            </div>
          );
        })}
    </>
  );
};

export default Info;
