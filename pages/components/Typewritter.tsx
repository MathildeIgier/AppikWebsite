import React from 'react'; // we need this to make JSX compile
import dynamic from 'next/dynamic'

const TypeWriterEffect = dynamic(() => import('react-typewriter-effect'), { ssr: false }) as any



const TypewritterComponent = () => 
    <TypeWriterEffect
        startDelay={2000}
        cursorColor="#3F3D56"
        multiText={[
        'Imagine Once',
        'Deploy Everywhere',
        ]}
        multiTextDelay={3000}
        typeSpeed={30}
    />

    export default TypewritterComponent;