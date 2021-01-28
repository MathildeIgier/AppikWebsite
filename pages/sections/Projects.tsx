import React, { useState } from 'react'; // we need this to make JSX compile
import {  Flex, Fade, Image as ImageChakra, Box } from "@chakra-ui/react"
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css'

import Image from 'next/image'
import { Title, Subtitle } from '../components/Title';
import ProductSlideWrapper, {Container, CarouselArea, MockupWrapper } from '../components/Carousel';


const params = {
    slidesPerView: 5,
    centeredSlides: true,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2500,
    },
    breakpoints: {
      320: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
      1440: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },
  };

const slider = [
    {
        id: 0,
        thumb_url: "/img/unsplash.jpeg",
        link: "https://source.unsplash.com/random",
        title: '1'
    },
    {
        id: 1,
        thumb_url: "/img/unsplash.jpeg",
        link: "https://source.unsplash.com/random",
        title: '2'
    },
    {
        id: 2,
        thumb_url: "/img/unsplash.jpeg",
        link: "https://source.unsplash.com/random",
        title: '3'
    },
    {
        id: 3,
        thumb_url: "/img/unsplash.jpeg",
        link: "https://source.unsplash.com/random",
        title: '4'
    },
    {
        id: 4,
        thumb_url: "/img/unsplash.jpeg",
        link: "https://source.unsplash.com/random",
        title: '5'
    },
    {
        id: 5,
        thumb_url: "/img/unsplash.jpeg",
        link: "https://source.unsplash.com/random",
        title: '5'
    },
]

const projectsData  = [
    {
        name: 'Mansa',
        description: 'Give money',
        technologies: 'React Gatsby',
        slider
    },
    {
        name: 'ApiZoom',
        description: 'Appizoom aims to increase the bees protections.',
        technologies: 'React Native',
        slider
    },
    {
        name: 'Smatch',
        description: 'Design and development of a responsive mobile app to enhance sport connections between sport people.',
        technologies: 'React Native, iOS/Android',
        slider : [
          {
              id: 0,
              thumb_url: "/img/smatch/1.png",
              link: "https://source.unsplash.com/random",
              title: '1'
          },
          {
              id: 1,
              thumb_url: "/img/smatch/2.png",
              link: "https://source.unsplash.com/random",
              title: '2'
          },
          {
              id: 2,
              thumb_url: "/img/smatch/3.png",
              link: "https://source.unsplash.com/random",
              title: '3'
          },
          {
              id: 3,
              thumb_url: "/img/smatch/4.png",
              link: "https://source.unsplash.com/random",
              title: '4'
          },
          {
              id: 4,
              thumb_url: "/img/smatch/5.png",
              link: "https://source.unsplash.com/random",
              title: '5'
          },
      ]
    },
]


export const Projects = () => {
    const [selected, setSelected] = useState(0)
    return <Flex py={5} flexDirection='column'>
        <ProductSlideWrapper>
      <Container>
        <Box py={8} color='white'>     
            <Title title='Projects'/>
        </Box>
        <Box display='flex' paddingBottom={5} justifyContent='flex-start' w='100%'>
            {projectsData.map((project, index) => 
                <Box 
                    key={index} 
                    bgColor={selected === index && 'yellow.400'} 
                    color={selected !== index && 'yellow.400'} 
                    borderWidth={3}
                    borderColor='yellow.400'
                    fontWeight='bold'
                    py={2} 
                    px={5} 
                    m={5} 
                    borderRadius={8}
                    cursor='pointer'
                    onClick={() => setSelected(index)}
                >
                    {project.name}
                </Box>
            )}
        </Box>
        <CarouselArea>
          <MockupWrapper>
          <img src="/img/screen.png"/>
          </MockupWrapper>
              <Swiper {...params} key={selected}>
              { projectsData[selected].slider.map((item, index) => (
                <div key={index}>
                  <div>
                      <img
                        src={item.thumb_url}
                      />
                  </div>
                </div>
              ))}
            </Swiper>
        </CarouselArea>
        <Box 
          backgroundColor='blue.400' 
          p={5}
          color='white'
          position='absolute' 
          bottom={-24} 
          w='100%' 
          h={140}
          zIndex={999}>
            <Subtitle title={projectsData[selected].name}/>
            <Box py={1}>{projectsData[selected].description}</Box>
            <Box>{projectsData[selected].technologies}</Box>
        </Box>
      </Container>
    </ProductSlideWrapper>
    </Flex>
}