import React from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";

const errorr = ({ statusCode }) => {
  return (
    <div style={{display : "flex" , gap : "3rem"  , alignItems : "center" , marginTop : "4REM"}}>
      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST2AE_xfKrLclWGlU-3nlcpNBlrXq2hc6v6g&usqp=CAU"
        //   width="300px"
        />
      </div>

      <div>
        <Typewriter
          options={{
            strings: ["”Sorry Rick,  we are not able to find anything...”"],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      </div>

      <p>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : 'An error occurred on client'}
    </p>
    </div>
  );
};


Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
  }

export default errorr;
