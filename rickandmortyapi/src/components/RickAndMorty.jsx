import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const RickAndMorty = () => {
  const [characters, setCharacters] = useState([]);
  const getData = async () => {
    const url = "https://rickandmortyapi.com/api/character";
    const { data } = await axios.get(url);
    console.log(data.results);
    setCharacters(data.results);
  };

  const location = (location) => {
    Swal.fire("The character location is", `${location}`);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container mx-auto py-5 grid grid-rows-4 grid-flow-col gap-4 bg-slate-600">
      {characters && characters.length
        ? characters.map((item, index) => (
            <div
              key={index}
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <a href="#">
                <img className="rounded-t-lg" src={item.image} alt="" />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {item.name}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {item.status}
                </p>
                <a
                  onClick={() => {
                    location(item.location.name);
                  }}
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#7066E0] rounded-lg hover:bg-[#7066E0] focus:ring-4 focus:outline-none focus:bg-[#7066E0] dark:bg-[#7066E0] dark:hover:bg-[#7066E0] dark:focus:ring-blue-800"
                >
                  Location
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))
        : ""}
    </div>
  );
};

export default RickAndMorty;
