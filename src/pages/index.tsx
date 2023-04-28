import React from "react";
import { GetServerSideProps } from "next";
import HomeModule from "src/modules/home";

export interface IHomePage {
  data: any;
}

const Home: React.FC<IHomePage> = (props) => {
  const { data } = props;
  return <HomeModule data={data} />;
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const res = await fetch("https://poc-api-mauve.vercel.app/poc_json/fp");
    const data = await res.json();
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.log(error);
  }
  return {
    props: {
      data: "",
    },
  };
};

export default Home;
