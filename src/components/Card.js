import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TiStar } from "react-icons/ti";
import { AiOutlineLike } from "react-icons/ai";

const Card = ({ result }) => {
  const releaseDate = result.release_date || result.first_air_date;
  const year = new Date(releaseDate).getFullYear();

  return (
    <div className="cursor-pointer border sm:rounded-lg shadow-md">
      <Link href={`/${result.id}`}>
        <Image
          className="w-full hover:opacity-75 transition-opacity duration-300"
          src={`https://image.tmdb.org/t/p/original/${result.poster_path ? result.poster_path : result.backdrop_path}`}
          width={500}
          height={300}
          alt={result.title}
        />
        <div className="flex flex-col gap-3 p-4">
          <p className="flex gap-1 items-center">
            <span>
              <TiStar className="text-amber-400 w-[18px] h-[18px]" />
            </span>
            <span className="text-sm text-gray-400">
              {result.vote_average.toFixed(1)}
            </span>
          </p>
          <p className="text-lg tracking-wide line-clamp-1">
            {result.title ||
              result.original_title ||
              result.name ||
              result.original_name}
          </p>
          <p className="text-sm text-gray-500 line-clamp-2">{result.overview}</p>
          <div className="flex items-center">
            <p className="text-sm text-gray-500 mr-7">{year}</p>
            <p className="flex gap-1 items-center text-sm text-gray-500">
              <span>{result.vote_count}</span>
              <span>
                <AiOutlineLike />
              </span>
            </p>
          </div>
          <button className='text-base font-bold text-blue-700 p-3 bg-gray-200 rounded-full hover:bg-slate-300 transition duration-300'>Details</button>
        </div>
      </Link>
    </div>
  );
};

export default Card;
