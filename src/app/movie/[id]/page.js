import Image from "next/image";
import { FaImdb } from "react-icons/fa";

export default async function MoviePage({ params }) {
  const movieId = params.id;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
  );
  const movie = await res.json();

  const languageMap = {
    en: "English",
    es: "Spanish",
    fr: "French",
    de: "German",
    it: "Italian",
    ja: "Japanese",
    ko: "Korean",
    // Add more languages as needed
  };

  const renderLanguage = (original_language) => {
    return `${languageMap[original_language] || "Unknown"}`;
  };

  // Example usage:
  const original_language = "en";
  console.log(renderLanguage(original_language)); // Output: "Language: English"

  return (
    <div className="w-full flex items-center justify-center">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-7xl mx-auto md:space-x-6">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie.poster_path ? movie.poster_path : movie.backdrop_path
          }`}
          width={400}
          height={450}
          className="rounded-lg w-full md:w-1/3 mb-6 md:mb-0"
          style={{ maxWidth: "100%", height: "100%" }}
        ></Image>
        <div className="px-2 my-auto md:w-2/3">
          <h2 className="text-4xl mb-5 font-bold tracking-wider">
            {movie.title || movie.name}
          </h2>
          <p className="text-xl mb-4">{movie.overview}</p>
          <p className="mb-2">
            <span className="text-base font-semibold mr-2">Date Released:</span>
            <span className="text-base">
              {movie.release_date || movie.first_air_date}
            </span>
          </p>
          <p className="flex items-center mb-2">
            <span className="text-base font-semibold mr-2">Rating:</span>
            <span className="text-base">{movie.vote_count}</span>
          </p>
          <p className="mb-2">
            <span className="text-base font-semibold mr-2">Runtime:</span>
            <span>{movie.runtime} minutes</span>
          </p>
          <p className="mb-2">
            <span className="text-base font-semibold mr-2">Language:</span>
            <span>{renderLanguage(movie.original_language)}</span>
          </p>

          <p className="flex items-center mb-2">
            <span className="text-base font-semibold mr-2">Popularity:</span>
            <span>{movie.vote_average.toFixed(1)}</span>
            <FaImdb className=" text-[18px] ml-2" />
          </p>
          <p>
            <span className="text-base font-semibold mr-2">Genres:</span>
            <span>
              {movie.genres.map((genre) => `${genre.name}`).join(", ")}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
