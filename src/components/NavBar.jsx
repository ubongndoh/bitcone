import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
export default function Navbar() {
	const mystyle = {
		color: 'white',
		// backgroundColor: '#017a5b',
	};

	return (
		<>
			{/* navbar */}
			<nav
				className='relative flex flex-wrap items-center justify-between py-3  mb-3  text-warmGray-50'
				style={mystyle}
			>
				<div className='lg:px-4 px-1 w-full  flex  items-center justify-between'>
					<div className=' flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
						<Link
							to='/'
							className=' lg:text-xl text-lg font-bold leading-relaxed inline-block lg:ml-10 md:ml-9 ml-0 py-2 whitespace-nowrap uppercase text-white'
						>
							<img src={logo} alt='' className='lg:h-12 lg:w-full h-8' />
						</Link>
					</div>
					<div className='flex items-center lg:py-2 py-3'>
						<ul className='flex  flex-row list-none '>
							<Link to='/'>
								<li className='lg:px-10 md:px-8 px-2 lg:text-base text-sm'>
									Home
								</li>
							</Link>
							<Link to='/about'>
								<li className='lg:px-10 md:px-8  px-2 lg:text-base text-sm'>
									About
								</li>
							</Link>
							<Link to='/roadmap'>
								<li className='lg:px-10 md:px-8  px-2 lg:text-base text-sm'>
									Roadmap
								</li>
							</Link>
						</ul>
					</div>
					{/* <div className='flex items-center  mr-20'>
						<ul className='flex  flex-row list-none '>
							<li className='lg:px-3 px-1 py-2 flex  items-center '>
								
							</li>
						</ul>
					</div> */}
				</div>
			</nav>
		</>
	);
}
