import React from "react";

const Details = ({ res }) => {
  console.log(res);
  return (
    <div>
      <div>
        <img src={res?.image} alt="" />
      </div>
      <div>
        hello  <span>
          {res.id}
        </span>
      </div>

      <div>
        <p>{res.status}</p>
      </div>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const data = await fetch(
    `https://rickandmortyapi.com/api/character/${context.params.id}`
  );
  const res = await data.json();
  return {

   props : {
       res,
   }
  };
};
export default Details;
