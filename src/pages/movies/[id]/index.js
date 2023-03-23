import { allocineReacteurApi, imagesUrl } from "@/utils/apis";
import Image from "next/image";

const MovieId = ({ movie }) => {
  console.log(movie);
  return (
    <div className={"pt-32"}>
      <div>{movie.title}</div>
      <Image
        src={`${imagesUrl}${movie.poster_path}`}
        alt={"none"}
        width={80}
        height={120}
      />
    </div>
  );
};
export default MovieId;

export const getServerSideProps = async (context) => {
  let dataToSend;
  try {
    const { data } = await allocineReacteurApi.get(
      `/movie/${context.params.id}`
    );
    dataToSend = data;
  } catch (e) {}
  return {
    props: {
      movie: dataToSend,
    },
  };
};
