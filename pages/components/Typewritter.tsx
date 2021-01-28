import React from 'react'; // we need this to make JSX compile
import TypeWriterEffect from 'react-typewriter-effect';



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