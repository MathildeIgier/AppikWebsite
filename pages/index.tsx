import * as React from "react"
import { ChakraProvider, Box } from "@chakra-ui/react"

import Head from 'next/head'
import { Header } from './sections/Header';
import { customTheme } from "../src/theme";
import { Projects } from "./sections/Projects";
import { Services } from "./sections/Services";
import { Team } from "./sections/Team";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Appik</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Open+Sans:wght@400;700&display=swap" rel="stylesheet"/>

      </Head>
      <ChakraProvider theme={customTheme}>
        <Box color='blue.400' maxHeight='100%' overflow='hidden'>
          <Header />
          <Projects />
          <Services />
          <Team />
        </Box>
      </ChakraProvider>
    </div>
  )
}
