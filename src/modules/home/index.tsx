import OfferCardSection from "@components/OfferCardSection";
import Footer from "@components/footer";
import { Header } from "@components/header";
import SearchSection from "@components/searchSection/SearchSection";
import SkeletonCustom from "@components/skeletonEffect";
import SliderComponents from "@components/sliderComponent";
import { GetServerSideProps } from "next";
import Head from "next/head";
import React from "react";
import { IHomePage } from "src/pages";

const HomeModule: React.FC<IHomePage> = (props) => {
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
      <>
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
          <SkeletonCustom width={`100%`} height={`100vh`} />
        )}
      </>
    </>
  );
};

export default HomeModule;
