import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";

interface ImageData {
  img: string;
  page: string;
}

const Image = (): JSX.Element => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  console.log(id);

  const [data, setData] = useState<ImageData[]>([]);

  useEffect(() => {
    const callApi = async (): Promise<void> => {
      const response = await axios.get(
        `https://manga-api-awnd.onrender.com/api/v1/manga/pages?chapterId=${id}`
      );
      console.log(response);
      setData(response.data.data);
      console.log(response.data.data);
    };
    callApi();
  }, [id]);

  return (
    <>
      <button onClick={() => navigate(-1)}>Go back</button>
      <div className="images">
        {data.map((dat: ImageData, i: number) => {
          const { img, page } = dat;
          return (
            <div className="img" key={i}>
              <img src={img} alt={page} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Image;
