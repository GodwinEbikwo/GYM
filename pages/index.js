/* eslint-disable import/no-unresolved */
import React from "react";
import Layout from "@/components/Layout";
import Head from "next/head";
import { SmoothScrollProvider } from "@/utils/SmoothScroll";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Membership from "@/components/Membership";
import Team from "@/components/Team";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";

export default function index() {
  return (
    <SmoothScrollProvider options={{ smooth: true }}>
      <Layout>
        <Head>
          <title>Home</title>
        </Head>
        <Banner />
        <Hero />
        <Services />
        <Membership />
        <Team />
        <Cta />
        <Footer />
      </Layout>
    </SmoothScrollProvider>
  );
}
