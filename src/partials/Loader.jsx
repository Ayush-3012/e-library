import { bouncy } from "ldrs";

bouncy.register();

import React from "react";

const Loader = () => {
  return (
    <>
      <l-bouncy size="80" speed="1.2" color="white"></l-bouncy>
    </>
  );
};

export default Loader;
