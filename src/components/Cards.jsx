import { useFetchImages } from "../hooks/useFetchImages";
import Card from "./Card";
import FormImg from "./FormImg";
import Loading from "./Loading";

const Cards = () => {
  const [images, loading, handleSubmit] = useFetchImages();
  return (
    <>
      <FormImg handleSubmit={handleSubmit} />
      <hr />

      {loading && <Loading />}

      <div className="row w-100 mx-auto">
        {images.map((img) => {
          return (
            <div key={img.id} className="col">
              <Card
                img={img.urls.regular}
                title={img.user.name}
                text={img.alt_description}
                button={img.color}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cards;
