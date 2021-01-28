import React from 'react'
import { Text, Box } from '@chakra-ui/react';
import { useSpring, animated } from 'react-spring';
import styled from '@emotion/styled';
import { Subtitle } from './Title';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

export default function DynamicCard({title, subtitle, text, photo} : {title: string, subtitle: string, text: string, photo?:string}) {
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
  return (
    <AnimatedCard
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        //@ts-ignore
        style={{ transform: props.xys.interpolate(trans) }}
    >
        <Subtitle title={title}/>
        <Text color='green.400' fontWeight='bold'>{subtitle}</Text>
        <Box paddingTop={8}>{text}</Box>
    </AnimatedCard>
  )
}


const CardContainer = styled.div`
    width: 45ch;
    height: 45ch;
    background: white;
    border-radius: 5px;
    background-size: cover;
    background-position: center center;
    box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
    transition: box-shadow 0.5s;
    will-change: transform;
    border: 15px solid white;

    &:hover {
        box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 0.4);

    }
    `;
const AnimatedCard = animated(CardContainer);