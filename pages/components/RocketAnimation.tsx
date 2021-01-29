import React, { useState } from 'react'; // we need this to make JSX compile
import Lottie from 'react-lottie'
import animationData from '../../src/json/rocket.json'
import { Box, Button } from '@chakra-ui/react';



export default () => {
    const [isPaused, setIsPaused] = useState(false)

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

    return <div className="controlled">
        <Lottie options={defaultOptions}
              height={200}
              width={200}
              isPaused={isPaused}
        />
      </div>
}
