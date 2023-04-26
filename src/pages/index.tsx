import React from "react";
import { GetServerSideProps } from "next";

import { Cards, Footer, Header, Main } from "@components/css";
// import SearchSection from "@components/searchSection/SearchSection";

interface IProps {
  data: any;
}

const Home: React.FC<IProps> = (props) => {
  const { data } = props;
  // console.log(data?.hits?.hits);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />
      {/* <SearchSection /> */}
      <Main />
      <Cards />
      <Footer />
    </div>
  );
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
