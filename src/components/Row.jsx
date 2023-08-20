import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Movie from "./Movie";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Row = ({ title, fetchURL }) => {
  const [movies, setMovies] = useState([]);
  let slider = useRef();

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  const sliderLeft = () => {
    slider.current.scrollLeft -= 500;
  };

  const sliderRight = () => {
    slider.current.scrollLeft += 500;
  };

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          className="bg-white rounded-full absolute group-hover:block  opacity-50 hover:opacity-100 cursor-pointer z-10 hidden"
          size={30}
          onClick={sliderLeft}
        />
        <div
          ref={slider}
          className="h-full w-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {movies.map((item, id) => (
            <Movie item={item} key={id} />
          ))}
        </div>
        <MdChevronRight
          className="bg-white right-1 hidden  rounded-full absolute group-hover:block  opacity-50 hover:opacity-100 cursor-pointer z-10 "
          size={30}
          onClick={sliderRight}
        />
      </div>
    </>
  );
};

export default Row;
