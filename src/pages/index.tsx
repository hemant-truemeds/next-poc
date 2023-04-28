import React from "react";
import { GetServerSideProps } from "next";
import SearchSection from "@components/searchSection/SearchSection";
import { Header } from "@components/header";
import Head from "next/head";
import OfferCardSection from "@components/OfferCardSection";
import SliderComponents from "@components/sliderComponent";
import Footer from "@components/footer";
import SkeletonCustom from "@components/skeletonEffect";

interface IProps {
  data: any;
}

const Home: React.FC<IProps> = (props) => {
  const { data } = props;
  return (
    <>
      <Head>
        <title>Truemeds-nextjs-poc</title>
        <link
          rel="shortcut icon"
          href="/icons/favicon.png"
          type="image/x-icon"
        />
        <meta
          name="description"
          content="Looking for the best medicine half price? Look no further than Truemeds. We offer the best quality at the best prices, so you can save money and feel better."
        />
      </Head>
      {data?.hits?.hits ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          <Header />
          <SearchSection />
          <SliderComponents />
          <OfferCardSection apiCardData={data?.hits?.hits} />
          <Footer />
        </div>
      ) : (
        <SkeletonCustom width={`230px`} height={`250px`} />
      )}
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
