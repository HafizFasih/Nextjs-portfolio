import React from "react";
export default function Skills() {
  return (
    <>
      <main className="text-white font-bold sm:h-[89vh] h-auto w-full gap-2 flex flex-col justify-center items-center">
        <div className="text-[8vh] h-16 flex items-center justify-center w-[80vw]">
          <h1>MY SKILLS</h1>
        </div>
        <div className="sm:h-[78vh] h-[150vh] md:w-[60vw] sm:w-[80vw] w-[95vw] grid sm:grid-cols-4 sm:grid-rows-2 grid-cols-2 grid-rows-4">
          <div className="row-start-1 row-end-2 col-start-1 col-end-2 h-full w-full flex items-center justify-center flex-col ">
            <div className="h-[60%] w-[75%] hover:scale-110 cursor-pointer hover:drop-shadow-pic bg-[url('Assets/html.svg')] bg-no-repeat bg-center bg-contain"></div>
            <div className="w-[75%] h-[30%] relative flex items-end justify-center">
              <span className="inline-block w-full h-2 bg-purple-800 absolute top-4 rounded">
                <span className="inline-block w-[96%] h-full bg-white z-10 absolute top-0 rounded"></span>
              </span>
              <h4 className="text-[20px]">96%</h4>
            </div>
          </div>
          <div className="row-start-1 row-end-2 col-start-2 col-end-3 h-full w-full flex items-center justify-center flex-col ">
            <div className="h-[60%] w-[75%] hover:scale-110 cursor-pointer  hover:drop-shadow-pic  bg-[url('Assets/css.svg')] bg-no-repeat bg-center bg-contain"></div>
            <div className="w-[75%] h-[30%] relative flex items-end justify-center">
              <span className="inline-block w-full h-2 bg-purple-800 absolute top-4 rounded">
                <span className="inline-block w-[90%] h-full bg-white z-10 absolute top-0 rounded"></span>
              </span>
              <h4 className="text-[20px]">90%</h4>
            </div>
          </div>
          <div className="sm:row-start-1 sm:row-end-2 sm:col-start-3 sm:col-end-4 
          row-start-2 row-end-3 col-start-1 col-end-2
          h-full w-full flex items-center justify-center flex-col ">
            <div className="h-[60%] w-[75%] hover:scale-110 cursor-pointer hover:drop-shadow-pic bg-[url('Assets/py.svg')] bg-no-repeat bg-center bg-contain"></div>
            <div className="w-[75%] h-[30%] relative flex items-end justify-center">
              <span className="inline-block w-full h-2 bg-purple-800 absolute top-4 rounded">
                <span className="inline-block w-[85%] h-full bg-white z-10 absolute top-0 rounded"></span>
              </span>
              <h4 className="text-[20px]">85%</h4>
            </div>
          </div>
          <div className="sm:row-start-1 sm:row-end-2 sm:col-start-4 sm:col-end-5
          row-start-2 row-end-3 col-start-2 col-end-3
           h-full w-full flex items-center justify-center flex-col ">
            <div className="h-[60%] w-[75%] hover:scale-110 cursor-pointer hover:drop-shadow-pic bg-[url('Assets/next.svg')] bg-no-repeat bg-center bg-contain "></div>
            <div className="w-[75%] h-[30%] relative flex items-end justify-center">
              <span className="inline-block w-full h-2 bg-purple-800 absolute top-4 rounded">
                <span className="inline-block w-[70%] h-full bg-white z-10 absolute top-0 rounded"></span>
              </span>
              <h4 className="text-[20px]">70%</h4>
            </div>
          </div>
          <div className="sm:row-start-2 sm:row-end-3 sm:col-start-1 sm:col-end-1
          row-start-3 row-end-4 col-start-1 col-end-2
           h-full w-full flex items-center justify-center flex-col ">
            <div className="h-[60%] w-[75%] hover:scale-110 cursor-pointer hover:drop-shadow-pic  bg-[url('Assets/js.svg')] bg-no-repeat bg-center bg-contain "></div>
            <div className="w-[75%] h-[30%] relative flex items-end justify-center">
              <span className="inline-block w-full h-2 bg-purple-800 absolute top-4 rounded">
                <span className="inline-block w-[97%] h-full bg-white z-10 absolute top-0 rounded"></span>
              </span>
              <h4 className="text-[20px]">97%</h4>
            </div>
          </div>
          <div className="sm:row-start-2 sm:row-end-3 sm:col-start-3 sm:col-end-4 
          row-start-4 row-end-5 col-start-1 col-end-2
          h-full w-full flex items-center justify-center flex-col ">
            <div className="h-[60%] w-[75%] hover:scale-110 cursor-pointer hover:drop-shadow-pic  bg-[url('Assets/ts.svg')] bg-no-repeat bg-center bg-contain "></div>
            <div className="w-[75%] h-[30%] relative flex items-end justify-center">
              <span className="inline-block w-full h-2 bg-purple-800 absolute top-4 rounded">
                <span className="inline-block w-[98%] h-full bg-white z-10 absolute top-0 rounded"></span>
              </span>
              <h4 className="text-[20px]">98%</h4>
            </div>
          </div>
          <div className="sm:row-start-2 sm:row-end-3 sm:col-start-2 sm:col-end-3
          row-start-3 row-end-4 col-start-2 col-end-3
           h-full w-full flex items-center justify-center flex-col ">
            <div className="h-[60%] w-[75%] hover:scale-110 cursor-pointer hover:drop-shadow-pic  bg-[url('Assets/tailwind.svg')] bg-no-repeat bg-center bg-contain "></div>
            <div className="w-[75%] h-[30%] relative flex items-end justify-center">
              <span className="inline-block w-full h-2 bg-purple-800 absolute top-4 rounded">
                <span className="inline-block w-[95%] h-full bg-white z-10 absolute top-0 rounded"></span>
              </span>
              <h4 className="text-[20px]">95%</h4>
            </div>
          </div>
          <div className="sm:row-start-2 sm:row-end-3 sm:col-start-4 sm:col-end-5 
          row-start-4 row-end-5 col-start-2 col-end-3
          h-full w-full flex items-center justify-center flex-col ">
            <div className="h-[60%] w-[75%] hover:scale-110 cursor-pointer hover:drop-shadow-pic  bg-[url('Assets/react.svg')] bg-no-repeat bg-center bg-contain "></div>
            <div className="w-[75%] h-[30%] relative flex items-end justify-center">
              <span className="inline-block w-full h-2 bg-purple-800 absolute top-4 rounded">
                <span className="inline-block w-[75%] h-full bg-white z-10 absolute top-0 rounded"></span>
              </span>
              <h4 className="text-[20px]">75%</h4>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
