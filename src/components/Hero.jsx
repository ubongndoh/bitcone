import React from 'react';
//import img from '../assets/real-estate.png';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const Hero = ({ img }) => {
	const settings = {
		dots: true,
		arrows: false,
		infinite: true,
		//speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		speed: 2000,
		//dotsClass: { dotstyle },
	};
	const particlesInit = async (main) => {
		console.log(main);

		// you can initialize the tsParticles instance (main) here, adding custom shapes or presets
		// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
		// starting from v2 you can add only the features you need reducing the bundle size
		await loadFull(main);
	};
	const particlesLoaded = (container) => {
		console.log(container);
	};

	return (
		<div className='container-style mb-14'>
			<Particles
				className=' '
				id='tsparticles'
				init={particlesInit}
				loaded={particlesLoaded}
				options={{
					background: {
						color: {
							// value: '#0d47a1',
						},
					},
					fullScreen: {
						enable: false,
						zIndex: 0,
					},

					fpsLimit: 10,
					interactivity: {
						events: {
							onClick: {
								enable: true,
								mode: 'push',
							},
							// onHover: {
							// 	enable: true,
							// 	mode: 'repulse',
							// },
							resize: true,
						},
						modes: {
							push: {
								quantity: 2,
							},
							repulse: {
								distance: 200,
								duration: 0.4,
							},
						},
					},
					particles: {
						color: {
							value: '#fff',
						},
						links: {
							color: '#0000ff',
							distance: 150,
							enable: true,
							opacity: 0.2,
							width: 1,
						},
						collisions: {
							enable: true,
						},
						move: {
							direction: 'none',
							enable: true,
							outModes: {
								default: 'bounce',
							},
							random: false,
							speed: 2,
							straight: false,
						},
						number: {
							density: {
								enable: true,
								area: 800,
							},
							value: 120,
						},
						opacity: {
							value: 0.2,
						},
						shape: {
							type: 'circle',
						},
						size: {
							value: { min: 1, max: 5 },
						},
					},
					detectRetina: true,
				}}
			/>
			<div
				className=' lg:h-screen  h-96'
				style={{
					backgroundImage: `url(${img})`,
					backgroundRepeat: 'no-repeat',
					height: '90vh',
					backgroundSize: 'cover',
					width: '100%',
					backgroundPosition: 'center',
					//height: '450px',
				}}
			>
				<div className='  text-slate-100   lg:pt-40 pt-10 lg:px-20 px-10'>
					<Slider {...settings}>
						<div>
							<div className='lg:text-4xl text-2xl font-bold '>
								Development of world-class <br /> Buildings for Low Income{' '}
								<br /> Earners
							</div>
							<div className=' lg:my-12 my-3 '>
								{' '}
								We harness the power of Blockchain Technologies to develoop
								world- <br /> class buildings for...
							</div>
							<Link to='/about'>
								<button className=' mt-2  hover:scale-105 btn font-medium text-lg   px-6 py-1 rounded-lg'>
									View More
								</button>
							</Link>
						</div>
						<div>
							<div className='lg:text-4xl text-2xl font-bold '>
								The NFT Marketplace
							</div>
							<div className=' lg:my-12 my-3 '>
								{' '}
								Uren NFTs are visual building properties issued to direct
								<br /> investors instead of shares
							</div>
							<Link to='/about'>
								<button className=' mt-2  hover:scale-105 btn font-medium text-lg   px-6 py-1 rounded-lg'>
									View More
								</button>
							</Link>
						</div>
						<div>
							<div className='lg:text-4xl text-2xl font-bold '>
								We bring strategies and <br /> invent models to accelerate{' '}
								<br /> Real Estate development
							</div>

							<div className=' lg:my-12 my-3 '>
								{' '}
								Uren Platforms is for listing leasing, selling, buying and
								investigating . <br /> ownerships of properties and property
								(ies) document
							</div>
							<Link to='/about'>
								<button className=' mt-2  hover:scale-105 btn font-medium text-lg   px-6 py-1 rounded-lg'>
									View More
								</button>
							</Link>
						</div>
					</Slider>
				</div>
			</div>
		</div>
	);
};

export default Hero;
