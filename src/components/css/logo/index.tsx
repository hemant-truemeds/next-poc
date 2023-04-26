import Image from "next/image";
import React from "react";

export const Logo: React.FC = () => {
  return (
    <Image
      layout="fill"
      src="https://www.truemeds.in/static/media/TrueLogoTemp.ea04f1b2.png"
      alt="nextjs"
      // width="96"
      // height="58"
    />
  );
};
