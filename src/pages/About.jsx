import React from 'react';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import img from '../assets/—Pngtree—light.png';
import img2 from '../assets/blokch1.png';
import { Link } from 'react-router-dom';
const About = () => {
	return (
		<>
			<NavBar />

			<header>
				<div
					className=' lg:h-screen  h-96'
					style={{
						backgroundImage: `url(${img})`,
						backgroundRepeat: 'no-repeat',
						height: '70vh',
						backgroundSize: 'cover',
						width: '100%',
						backgroundPosition: 'center',
						//height: '450px',
					}}
				>
					<div
						className=''
						style={{
							backgroundImage: `url(${img2}) `,

							backgroundRepeat: 'no-repeat',
							height: '100%',
							//width: '40px',
							//backgroundSize: 'cover',

							width: '100%',
							backgroundPosition: 'top right',
							//height: '450px',
						}}
					>
						<div className='lg:pl-40 pl-10 pt-10'>
							<div className='lg:text-6xl text-4xl font-bold  '>
								UREN TECHNOLOGIES <br /> TOKEN(UTT)
							</div>
							<div className=' lg:my-14 my-3 lg:text-2xl text-xl lg:text-slate-200'>
								{' '}
								Uren Technology is harnessing the power of <br /> Blockchain in
								developing affordable homes, <br /> cities and enhancing fraud
								free Real Estate <br /> investment in the wider world, and
								creating <br /> wealth for investors. Our technology cuts <br />{' '}
								across Android, IOS, Web and other operating <br /> systems
							</div>
						</div>
					</div>
				</div>
			</header>
			<section>
				<div className='grid lg:grid-cols-2 grid-cols-1'>
					<div className='px-20 mt-10 '>
						<h2 className=' font-black lg:text-6xl text-4xl my-10'>
							Uren Technology
						</h2>
						<p className='my-12 text-lg font-light text-slate-200'>
							Application is used to discover vacant accommodations for rent,
							lease or sales in cities and beyond. Uren Market place is a
							virtual property market for NFTs where Uren NFTs are sold by
							second traders alongside other BRC-20 NFTs.{' '}
						</p>
					</div>
					<div className='px-20 mt-10'>
						<h2 className='  font-black lg:text-6xl text-4xl my-10'>
							Uren NFTs{' '}
						</h2>
						<p className='my-12 text-lg font-light text-slate-200'>
							Uren NFTs are visual building properties issued to direct
							investors instead of shares, and holders are entitled to annual
							dividend paid in Uren token and serves as the governance token.
							The holder of the Uren NFT also automatically has right to the
							building plan of the NFT property which can be developed
							physically by Uren technology or any building company.
						</p>
					</div>
				</div>
				<div className='grid lg:grid-cols-2 grid-col-1'>
					<div className='px-20'>
						<h2 className=' font-black  lg:text-6xl text-4xl  my-10'>
							Uren (URT){' '}
						</h2>
						<p className='my-12 text-lg font-light text-slate-200'>
							Uren (URT) is a token issued under BRC-20 Protocol for day to day
							transactions in the Uren Ecosystem and is growing to become a
							basic token for Real Estate investment.
						</p>
					</div>
					<div className='px-20'>
						<h2 className=' font-black  lg:text-6xl text-4xl  my-10'>
							Uren Real Estate{' '}
						</h2>
						<p className='my-12 text-lg font-light text-slate-200'>
							Uren is a Real Estate is harnessing the power of Blockchain to
							developing affordable homes cities and enhancing fraud free Real
							Estate investment in the wider world. It cuts across Android, IOS,
							Web and other operating systems. User admission follow the
							principle of KYC which verifies a user in order to use the
							platform. Also verified housing agents, Real estate companies and
							agencies list their properties and buyers or renters discover
							these properties, go through their description and book an in-app
							video tour with the seller or agent to have a clearer view of the
							property, before payment. The Dashboard contains property document
							and other vital information and documents.
						</p>
					</div>
				</div>
			</section>
			<section>
				<div class='flex justify-center my-10'>
					<div class='block  px-14 py-8 rounded-lg shadow-lg text-white lg:w-3/5 w-full bg-blue-700'>
						<h5 class=' lg:text-6xl text-4xl  font-black my-4 text-center'>
							To use this service
						</h5>
						<p class=' lg:text-center text-xl font-light mb-4 text-slate-200'>
							In the future, Uren will expand to acquiring and building
							properties which will be available for sales on discounted price
							using the token, this will eventually lead into developing estates
							for sales in the long run. In most major cities of developing
							country, it has become obvious that there is a high demand for
							accommodation since 2000s, this is due to the Rural to Urban
							migration in search of better life. More than before technologies
							and globalization has made it possible for people to see the life
							they cannot obtain in their local environments and are migrating
							to get a better living. Therefore, Uren is an attempt to offer
							better and easy accommodation offers.
						</p>
						<Link to='# ' className='flex justify-center'>
							<button class='border hover:scale-105 drop-shadow-md font-bold text-3xl  my-10  px-4 py-3 rounded-lg'>
								White paper
							</button>
						</Link>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
};

export default About;
