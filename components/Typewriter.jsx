import React from "react";
import Typography from "@mui/material/Typography";
import Typewriter from "typewriter-effect";

const Typewriters = () => {
  return (
    <div>
      <Typography className="x" variant="h6" component="h4">
        <Typewriter
          options={{
            strings: ["“Boom! Big reveal! I turned myself into a pickle!”"],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      </Typography>
    </div>
  );
};

export default Typewriters;
