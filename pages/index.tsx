import * as React from "react"
import { ChakraProvider, Box } from "@chakra-ui/react"

import Head from 'next/head'
import Header from './sections/Header';
import {customTheme} from "../src/theme";
import Projects from "./sections/Projects";
import Services from "./sections/Services";
import Team from "./sections/Team";
import Estimation from "./sections/Estimation";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Appik Studio | Agence développement applications iOS, Android & Web à Lausanne</title>
        <meta name="description" content="Agence de développement fullstack à Lausanne. Applications mobiles iOS & Android, sites web et intégration IA. 10 ans d'expertise, désormais boostée par l'intelligence artificielle." />
        <meta name="keywords" content="développement application mobile, iOS, Android, web, Lausanne, Suisse, agence IA, intelligence artificielle, React Native, fullstack" />

        {/* Open Graph */}
        <meta property="og:title" content="Appik Studio | Développement d'applications iOS, Android & Web à Lausanne" />
        <meta property="og:description" content="Agence fullstack à Lausanne. 10 ans d'expertise en développement mobile et web, désormais augmentée par l'IA." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_CH" />

        {/* Geo */}
        <meta name="geo.region" content="CH-VD" />
        <meta name="geo.placename" content="Lausanne" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Open+Sans:wght@400;700&display=swap" rel="stylesheet"/>

      </Head>
      <ChakraProvider theme={customTheme}>
        <Box color='blue.500' maxWidth='100%' overflow='hidden'>
          <Header />
          <Projects />
          <Services />
          <Team />
          <Estimation />
        </Box>
      </ChakraProvider>
    </div>
  )
}
