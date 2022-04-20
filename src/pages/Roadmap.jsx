import React from 'react';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import img from '../assets/—Pngtree—light.png';
import roadmap from '@/assets/roadmap.png';
import Tabs from "../components/tapComponent/Tab";
import TabPane from "../components/tapComponent/Tab-pane";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Roadmap = () => {
    return (
        <div>
            <Navbar />

            <header>
                <div
                    className=' lg:h-screen  h-96'
                    style={{
                        backgroundImage: `url(${img})`,
                        backgroundRepeat: 'no-repeat',
                        height: '40vh',
                        backgroundSize: 'cover',
                        width: '100%',
                        backgroundPosition: 'center',

                    }}
                >
                    <div
                        className=''
                        style={{
                            backgroundImage: `url(${roadmap}) `,

                            backgroundRepeat: 'no-repeat',
                            height: '100%',


                            width: '100%',
                            backgroundPosition: 'top right',

                        }}
                    >
                        <div className='pl-40 pt-28 '>
                            <div className='lg:text-4xl text-2xl font-bold  '>
                                Roadmap
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div>
                <Tabs>

                    <TabPane name="2022" key="1">
                        <div className='flex justify-center text-4xl my-10 font-black'>2022: Development Stage</div>
                        <VerticalTimeline>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work mb-10"
                                contentStyle={{ background: '#08091A', color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                                date="Q2:"
                                iconStyle={{ background: '#08091A', color: '#fff' }}
                            // icon={<WorkIcon />}
                            >
                                <h3 className="vertical-timeline-element-title">Initial seed funding ii.</h3>
                                <h4 className="vertical-timeline-element-subtitle">BRISE Audit </h4>
                                <p>
                                    Website launch
                                </p>

                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="Q3:"
                                contentStyle={{ background: '#08091A', color: '#fff' }}
                                iconStyle={{ background: '#08091A', color: '#fff' }}
                            // icon={<WorkIcon />}
                            >
                                <h3 className="vertical-timeline-element-title">Token Launch</h3>
                                <h4 className="vertical-timeline-element-subtitle">DEX Listing</h4>
                                <p>
                                    Uren Android App development
                                </p>
                                <p>Web App development  </p>
                                <p>App Early bird testing</p>
                                <p>Debugging and upgrades</p>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="Q4:"
                                contentStyle={{ background: '#08091A', color: '#fff' }}
                                iconStyle={{ background: '#08091A', color: '#000' }}
                            // icon={<WorkIcon />}
                            >
                                <h3 className="vertical-timeline-element-title">Apps listing on website,
                                    Google PlayStore e.t.c</h3>
                                <h4 className="vertical-timeline-element-subtitle">Property Listing and Apps Use
                                    fully commence  </h4>
                                <p>
                                    Marketing campaign launch
                                    (with AMAs and interviews)

                                </p>
                                <p>Partnership</p>
                            </VerticalTimelineElement>


                        </VerticalTimeline>
                    </TabPane>
                    <TabPane name="2023" key="2">

                        <div className='flex justify-center text-4xl my-10 font-black'>2023 : Project Expansion Stage</div>
                        <VerticalTimeline>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work mb-10"
                                contentStyle={{ background: '#08091A', color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                                date="Q1:"
                                iconStyle={{ background: '#08091A', color: '#fff' }}
                            // icon={<WorkIcon />}
                            >
                                <h3 className="vertical-timeline-element-title">CEX Listing</h3>


                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work mb-10"
                                contentStyle={{ background: '#08091A', color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                                date="Q2:"
                                iconStyle={{ background: '#08091A', color: '#fff' }}
                            // icon={<WorkIcon />}
                            >
                                <h3 className="vertical-timeline-element-title">Architectural drawing and
                                    renderings of the property
                                    release with public BOQ of
                                    the project
                                </h3>
                                <h4 className="vertical-timeline-element-subtitle">NFT Marketplace Development </h4>


                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="Q3:"
                                contentStyle={{ background: '#08091A', color: '#fff' }}
                                iconStyle={{ background: '#08091A', color: '#fff' }}
                            // icon={<WorkIcon />}
                            >
                                <h3 className="vertical-timeline-element-title">NFT Presale</h3>
                                <h4 className="vertical-timeline-element-subtitle">Continued Advert and Marketing
                                    Campaign</h4>
                                <p>
                                    First buyback and burn
                                </p>
                                <p>Uren DEX development and launch</p>

                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="Q4:"
                                contentStyle={{ background: '#08091A', color: '#fff' }}
                                iconStyle={{ background: '#08091A', color: '#000' }}
                            // icon={<WorkIcon />}
                            >
                                <h3 className="vertical-timeline-element-title">Uren CEX Developmet and Beta
                                    Testing</h3>
                                <h4 className="vertical-timeline-element-subtitle">Investors Benefit Implementation
                                    takes effect  </h4>
                                <p>
                                    Bounty Program

                                </p>
                                <p>CEX full launch</p>
                                <p>Internationalization and Establishment
                                    of branches
                                </p>
                                <p>Patent Applications (More to unfold)</p>
                            </VerticalTimelineElement>


                        </VerticalTimeline>
                    </TabPane>

                    <TabPane name="2024" key="3">
                        <div className='flex justify-center text-4xl my-10 font-black'>2024: Real Estate Project
                            Commencement
                        </div>
                        <VerticalTimeline>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work mb-10"
                                contentStyle={{ background: '#08091A', color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                                date="Q1:"
                                iconStyle={{ background: '#08091A', color: '#fff' }}
                            // icon={<WorkIcon />}
                            >
                                <h3 className="vertical-timeline-element-title">Estate development project
                                    begins in Nigeria</h3>


                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="Q4:"
                                contentStyle={{ background: '#08091A', color: '#fff' }}
                                iconStyle={{ background: '#08091A', color: '#fff' }}
                            // icon={<WorkIcon />}
                            >
                                <h3 className="vertical-timeline-element-title">Property construction progress AMA
                                    schedule release with live footage
                                    of the property (this will be
                                    a continues scheduled AMAs)
                                </h3>


                            </VerticalTimelineElement>



                        </VerticalTimeline>
                    </TabPane>
                    <TabPane name="2025" key="4">
                        <div className='flex justify-center text-4xl my-10 font-black'>2025: Uren Chain
                        </div>
                        <VerticalTimeline>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work mb-10"
                                contentStyle={{ background: '#08091A', color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                                date="Q1:"
                                iconStyle={{ background: '#08091A', color: '#fff' }}
                            // icon={<WorkIcon />}
                            >
                                <h3 className="vertical-timeline-element-title">First URent Estate launch and
                                    listing.</h3>


                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="Q4:"
                                contentStyle={{ background: '#08091A', color: '#fff' }}
                                iconStyle={{ background: '#08091A', color: '#fff' }}
                            // icon={<WorkIcon />}
                            >
                                <h3 className="vertical-timeline-element-title">Uren Chain
                                </h3>


                            </VerticalTimelineElement>



                        </VerticalTimeline>
                    </TabPane>
                </Tabs>
            </div>
            <Footer />
        </div>
    );
};

export default Roadmap;
