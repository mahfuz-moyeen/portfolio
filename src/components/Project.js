import React from 'react';
import project01 from '../Image/project01.png'
import project02 from '../Image/project02.png'
import project03 from '../Image/project03.png'
const Project = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='text-3xl text-center text-gray-300 my-10'>My Project</h1>

            <div className='w-11/12 mx-auto'>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>

                    <div className="card w-full mx-auto bg-accent text-gray-300 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={project01} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center">
                            <h2 className="card-title">Dronezia</h2>
                            <span className='badge badge-outline'>Fullstack</span>
                            <p className='text-left'>It is a warhouse website. <br />
                                <ul className='list-disc'>
                                    <li>User can see all product</li>
                                    <li>User can update product stock quantity (increase/decrease),Name,price etc</li>
                                    <li>Add new product delete his product to server</li>
                                </ul>
                            </p>
                            <div className="card-actions flex-col">
                                <p>Use: react.js React Router,DaisyUI, Node.js, Mongodb, Html5,css3</p>
                                <a href="https://dronezia.web.app/" className="btn btn-primary">Live Site</a>
                            </div>
                        </div>
                    </div>

                    <div className="card w-full bg-accent text-gray-300 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={project02} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Tesla-m3</h2>
                            <span className='badge badge-outline'>front-end</span>
                            <p className='text-left'>It is a Reviews website.<br />
                                <ul className='list-disc'>
                                    <li>User can product Reviews</li>
                                    <li>user can user Dashboard some chart</li>
                                </ul>

                            </p>
                            <div className="card-actions flex-col">
                                <p>Use: react.js React Router, Html5,css3</p>
                                <a href="https://tesla-m3.netlify.app/" className="btn btn-primary">Live Site</a>
                            </div>
                        </div>
                    </div>
                    <div className="card w-full bg-accent text-gray-300 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={project03} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Mr time watch shop</h2>
                            <span className='badge badge-outline'>Js,htlm,css</span>
                            <p className='text-left'>a Random chooses product website.<br />
                                <ul className='list-disc'>
                                    <li>User can chooses 4 product</li>
                                    <li>user can tap choose 1 for me then user got e random product</li>
                                </ul>
                            </p>
                            <div className="card-actions flex-col">
                                <p>use: js, ES6, html5, css3</p>
                                <a href="https://mr-time-watch-shop.netlify.app/" className="btn btn-primary">Live Site</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Project;