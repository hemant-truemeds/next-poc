import React from "react";
import { GetServerSideProps } from "next";
import SearchSection from "@components/searchSection/SearchSection";
import { Header } from "@components/header";
import Head from "next/head";
import OfferCardSection from "@components/OfferCardSection";

interface IProps {
  data: any;
}

const Home: React.FC<IProps> = (props) => {
  const { data } = props;
  return (
    <>
      <Head>
        <title>Truemeds-nextjs-poc</title>
        <meta
          name="description"
          content="Looking for the best medicine half price? Look no further than Truemeds. We offer the best quality at the best prices, so you can save money and feel better."
        />
      </Head>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Header />
        <SearchSection />
        <OfferCardSection apiCardData={data?.hits?.hits} />
      </div>
    </>
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
