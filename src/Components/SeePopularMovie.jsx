import PropTypes from "prop-types";

const SeePopularMovie = ({ popularMovie }) => {
  console.log(popularMovie);
  return (
    <>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-8 lg:gap-12 mb-4 px-4 sm:px-4 md:px-4 justify-center lg:mt-28 mt-10  lg:px-10 lg:mb-20">
        {popularMovie.map((movie) => (
          <div key={movie?.id}>
            <div className="">
              <img
                className="h-full w-full rounded-3xl"
                src={`${import.meta.env.VITE_BASEIMGURL}${movie.poster_path}`}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

SeePopularMovie.propTypes = {
  popularMovie: PropTypes.array,
};

export default SeePopularMovie;
