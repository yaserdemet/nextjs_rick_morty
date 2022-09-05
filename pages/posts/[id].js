import React from "react";
import Layout from "../../components/Layout";

const Details = ({ res }) => {
  console.log(res);
  return (
    <Layout>
      <div className="z">
        <div>
          <div>
            <img src={res?.image} alt="" />
          </div>
        </div>

        <div>
          <div>
            <p>Name : {res.name}</p>
          </div>

          <div>
            <p>Species : {res.species}</p>
          </div>
          <div>
            <p>Status : {res.status}</p>
          </div>
          <div>
            <p>Location : {res.location.name}</p>
          </div>
          <div>
            <p>Gender : {res.gender}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps = async (context) => {
  const data = await fetch(
    `https://rickandmortyapi.com/api/character/${context.params.id}`
  );
  const res = await data.json();
  return {
    props: {
      res,
    },
  };
};
export default Details;
