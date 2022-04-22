import React from 'react';
import { Link } from 'react-router-dom';

import group1 from '@/assets/Group30.png';
import group2 from '@/assets/Group31.png';
import group3 from '@/assets/Group34.png';

import twitter from '@/assets/twitter.png';
import insta from '@/assets/insta.png';
import reddit from '@/assets/reddit.png';
import discord from '@/assets/discord.png';
import roadmap from '@/assets/roadmap.png';

const Main = () => {
	return (
		<>
			<main className=' overflow-hidden pb-20 text-warmGray-50 card '>
				{/* cards */}
				<section className=' my-40'>
					{/* row 1 */}
					<div className=' grid lg:grid-cols-2 grid-cols-1  gap-4 my-10 lg:mx-auto mx-0 lg:px-64 px-0 '>
						<div className='mx-auto flex border-b-2 rounded-b-lg '>
							<div className=' rounded-lg shadow-lg bg-white lg:max-w-sm max-w-xs py-5 card1 '>
								<div>
									<img className=' mx-auto h-20 w-20' src={group1} alt='' />
								</div>
								<div className='p-6 text-center '>
									<h5 className='text-white text-3xl font-black mb-8 text-center'>
										Revolutionizing and Empowering Real Estate Development.
									</h5>
									<p className='text-white text-lg font-normal mb-6'>
										We bring strategies and invent models to accelerate Real
										Estate development in cities of developing nations through
										the use of Technology.
									</p>
									<p className='text-white text-lg font-normal mb-2'>
										Uren Platforms is for listing leasing, selling, buying and
										investigating ownerships of properties and property (ies)
										document
									</p>
								</div>
							</div>
						</div>

						<div className=' mx-auto flex border-b-2 rounded-b-lg'>
							<div className='rounded-lg shadow-lg  lg:max-w-sm max-w-xs py-5 card2  '>
								<a href='#!'>
									<img className='rounded-t-lg mx-auto' src={group2} alt='' />
								</a>
								<div className='p-6 text-center '>
									<h5 className='text-white text-3xl font-black mb-8 text-center'>
										Development of World-class Buildings for Low Income Earners
									</h5>
									<p className='text-white text-lg font-normal mb-6'>
										We harness the power of Blockchain Technology to develop
										world-class buildings for developing cities, we also invest
										into some big names within the company to make available
										home for low income earners.
									</p>
								</div>
							</div>
						</div>
					</div>
					{/* row 2 */}
					<div className=' grid lg:grid-cols-2 grid-cols-1   gap-4 my-10 lg:mx-auto mx-0 lg:px-64 px-0'>
						<div className='flex mx-auto border-b-2 rounded-b-lg '>
							<div className='rounded-lg shadow-lg  lg:max-w-sm max-w-xs py-5 card3 '>
								<a href='#!'>
									<img className='rounded-t-lg mx-auto' src={group3} alt='' />
								</a>
								<div className='p-6 text-center '>
									<h5 className='text-white text-3xl font-black mb-8 text-center'>
										Grow your income and Portfolio
									</h5>
									<p className='text-white text-lg font-normal mb-6'>
										Buying, selling, renting or leasing property(ies) using the
										Uren platform accrues reward and even more if the payments
										are made using Uren token. Also, investors can invest
										directly into the Uren technologies by owning Non-fungible
										Token (NFTs) which shall serve as the governance token, and
										earn yields from the annual benefit of the company. The NFTs
										can also be sold at any time.
									</p>
								</div>
							</div>
						</div>

						<div className='flex mx-auto border-b-2 rounded-b-lg '>
							<div className='rounded-lg shadow-lg  lg:max-w-sm max-w-xs py-5 card1 '>
								<a href='#!'>
									<img className='rounded-t-lg mx-auto' src={group1} alt='' />
								</a>
								<div className='p-6 text-center '>
									<h5 className='text-white text-3xl font-black mb-8 text-center'>
										Revolutionizing and Empowering Real Estate Development.
									</h5>
									<p className='text-white text-lg font-normal mb-6'>
										We bring strategies and invent models to accelerate Real
										Estate development in cities of developing nations through
										the use of Technology.
									</p>
									<p className='text-white text-lg font-normal mb-6'>
										Uren Platforms is for listing leasing, selling, buying and
										investigating ownerships of properties and property (ies)
										document
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
			<section className='mt-40'>
				<div>
					<h3 className=' font-black text-center lg:text-4xl text-2xl  my-10'>
						Our Community
					</h3>
					<p className=' lg:px-20 px-5 lg:font-normal font-light lg:text-lg text-base lg:text-center text-left'>
						We are home to one of the fastest-growing communities at the
						intersection of variety gaming, <br /> esports, and blockchain. We
						are intentional about building an international community that is{' '}
						<br />
						currently supported in 18 languages with more to come.
					</p>
				</div>
				<div className=' grid lg:grid-cols-4 grid-cols-2  lg:mx-20 mx-3 my-20  gap-0'>
					<div className='flex flex-col justify-center py-6 items-center mx-10 my-10 border rounded-lg shadow-xs '>
						<div className='p-3  rounded-full '>
							<img alt='...' src={twitter} className=' h-8 w-10  ' />
						</div>
						<div className=' text-center'>
							{/* <p className='text-lg font-semibold text-gray-50  my-2 '>100k</p> */}
							{/* <p className='mb-2 text-sm font-medium text-gray-50  '>Follow</p> */}
							<a
								href='https://twitter.com/Urentech1'
								target='_blank'
								rel='noopener noreferrer'
							>
								<button className='border hover:scale-105  font-medium text-lg  shadow-cla-blue lg:px-4 px-2 py-1 rounded-lg'>
									Follow
								</button>
							</a>
						</div>
					</div>
					<div className='flex flex-col justify-center py-6  items-center mx-10 my-10 border rounded-lg shadow-xs '>
						<div className='p-3  rounded-full '>
							<img alt='...' src={insta} className=' h-10 w-10  ' />
						</div>
						<div className=' text-center'>
							{/* <p className='text-lg font-semibold text-gray-50 my-2 '>200k</p> */}
							{/* <p className='mb-2 text-sm font-medium text-gray-50  '>Join</p> */}
							<button className='border hover:scale-105 drop-shadow-md font-medium text-lg  shadow-cla-blue px-4 py-1 rounded-lg'>
								Join
							</button>
						</div>
					</div>
					<div className='flex flex-col justify-center  py-6 items-center mx-10 my-10 border rounded-lg shadow-xs '>
						<div className='p-3  rounded-full '>
							<img alt='...' src={discord} className=' h-8 w-10  ' />
						</div>
						<div className=' text-center'>
							{/* <p className='text-lg font-semibold text-gray-50 my-2  '>150k</p> */}
							{/* <p className='mb-2 text-sm font-medium text-gray-50  '>Join</p> */}
							<a
								href='https://discord.com/channels/967060409234362389/967060510954631180'
								target='_blank'
								rel='noopener noreferrer'
							>
								<button className=' border hover:scale-105 drop-shadow-md font-medium text-lg  shadow-cla-blue px-4 py-1 rounded-lg'>
									Join
								</button>
							</a>
						</div>
					</div>
					<div className='flex flex-col justify-center py-6  items-center mx-10 my-10 border rounded-lg shadow-xs '>
						<div className='p-3  rounded-full '>
							<img alt='...' src={reddit} className=' h-10 w-10  ' />
						</div>
						<a
							href='https://www.reddit.com/user/Urentech'
							target='_blank'
							rel='noopener noreferrer'
						>
							<div className=' text-center'>
								{/* <p className='text-lg font-semibold text-gray-50  my-2 '>100k</p> */}
								{/* <p className='mb-2 text-sm font-medium text-gray-50  '>Join</p> */}
								<button className=' border hover:scale-105 drop-shadow-md font-medium text-lg  shadow-cla-blue px-4 py-1 rounded-lg'>
									Join
								</button>
							</div>
						</a>
					</div>
				</div>
			</section>
			<section>
				<div className=' grid lg:grid-cols-2 grid-cols-1   lg:mt-10  mt-5 card'>
					<div className=' px-20 mt-7 '>
						<h3 className='text-4xl  font-bold  '>Our Roadmap</h3>
						<p className=' text-base leading-relaxed mt-10 mb-4 text-warmGray-50'>
							We harness the power of Blockchain Technology to develop
							world-class buildings for developing cities
						</p>
						{/* <div className='btn'>View Road Map</div> */}
						<Link to='/roadmap'>
							<button class='btn hover:scale-105 drop-shadow-md font-medium text-lg my-10  px-4 py-1 rounded-lg'>
								View Road Map
							</button>
						</Link>
					</div>

					<div className='  '>
						<div className='  '>
							<img alt='...' src={roadmap} className='lg:h-full h-96 mx-2' />
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Main;
