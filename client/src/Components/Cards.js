import React, { useState, useEffect } from "react";

function Cards() {
  const [data, setData] = useState([]);

  const arr = [];

  useEffect(() => {
    fetch("http://localhost:8000/getdetails")
      .then((response) => response.json())
      .then((res) => {
        // res = data coming from backend
        // res.map((data)=>{
        //     // console.log(data.task)
        //     setData(data)

        // })

        console.log(res);

        // res.map((data)=>{
        // })

        setData(res);

        // console.log(data[1])
        //     setData(res)
        //   console.log("data"+res +"data is also "+data)
      });
  }, []);

  //   const print =()=>{
  //     console.log( data.map((value) => {
  //                     <div className="bg-black h-24 w-96 ">
  //           <h1>{value.task}</h1>
  //         </div>;
  //       })})
  //   }

  return (
    <div>
      {data &&
        data.map((value) => {
          return (
            <div className="bg-white box h-48 p-6 my-5 rounded-lg shadow-2xl  ">
              <h1 className="text-black">{value.task}</h1>
              <h1 className="text-black">{value.date}</h1>
              <h1 className="text-black">{value.status}</h1>

            </div>
          );

          // console.log("values= "+value.task)
        })}
    </div>
  );
}

export default Cards;
