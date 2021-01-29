import React from 'react'; // we need this to make JSX compile
import Particles from 'react-particles-js';
import styled from '@emotion/styled';




export default () => 
	<WrapperStyle>
		<Particles
		params={{
			"particles": {
				"number": {
					"value": 20,
					"density": {
						"enable": true,
						"value_area": 800
					}
				},
				"line_linked": {
					"enable": false
				},
				"move": {
					"speed": 1,
					"out_mode": "out"
				},
				"shape": {
					"type": [
						"image",
					],
					"image": [
						{
							"src": '/img/oval-red.svg',
							"height": 5,
							"width": 5
						},
						{
							"src": '/img/oval-yellow.svg',
							"height": 5,
							"width": 5
						},
						{
							"src": '/img/oval-blue.svg',
							"height": 5,
							"width": 5
						}
					]
				},
				"size": {
					"value": 10,
					"random": false,
					"anim": {
						"enable": true,
						"speed": 4,
						"size_min": 10,
						"sync": false
					}
				}
			},
			"retina_detect": false
		}} />
	</WrapperStyle>

export const BubbleParticules = ({num } : {num? : number}) =>
<BubbleWrapperStyle>
<Particles
    params={{
	    "particles": {
	        "number": {
	            "value": num ? num : 100,
	            "density": {
	                "enable": false
	            }
	        },
	        "size": {
	            "value": 3,
	            "random": true,
	            "anim": {
	                "speed": 4,
	                "size_min": 0.3
	            }
	        },
	        "line_linked": {
	            "enable": false
	        },
	        "move": {
	            "random": true,
	            "speed": 1,
	            "direction": "top",
	            "out_mode": "out"
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "bubble"
	            },
	            "onclick": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        },
	        "modes": {
	            "bubble": {
	                "distance": 250,
	                "duration": 2,
	                "size": 0,
	                "opacity": 0
	            },
	            "repulse": {
	                "distance": 400,
	                "duration": 4
	            }
	        }
	    }
	}} />
	</BubbleWrapperStyle>

const WrapperStyle = styled.div`
height: 100%;
#tsparticles {
	max-height: 100%;
	max-width: 97%;
}
`;

const BubbleWrapperStyle = styled.div`
	height: 100%;
	#tsparticles {
		height: 100%;
		width: 200%;
	}
`;
