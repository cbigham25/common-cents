import React from 'react';
import './landing.css';
import budget from '../../assets/budget.jpg'

function Landing() {
    return (
        <div>
            <section className='landingSection'>
                <div className='landingSubSection'>
                    <div className='landingTitle'>
                        <h1>
                            <span>The </span>
                            <span className='underline'>EASIEST</span>
                            <span> way to budget your life!</span>
                        </h1>
                    </div>
                    <p>
                        Tired of overspending but don't know where to start? Look no further! Fix your financial health today with the most simple approch to setting a budget. No prior knowledge needed!
                    </p>
                    <div className='headerButtons'>
                        <button><strong>Try It Now</strong></button>
                        <button><strong>View An Example</strong></button>
                    </div>
                </div>
                <div className='landingSubSection landingImageHeader'>
                    <img src={budget} alt="budget" />
                    <div className='landingImageHeaderSubtextContainer'>
                        <div className='landingImageHeaderSubtext'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='landingImageHeaderCheck'>
                                <path d="m12 0a12 12 0 1 0 12 12 12.014 12.014 0 0 0 -12-12zm6.927 8.2-6.845 9.289a1.011 1.011 0 0 1 -1.43.188l-4.888-3.908a1 1 0 1 1 1.25-1.562l4.076 3.261 6.227-8.451a1 1 0 1 1 1.61 1.183z"></path>
                            </svg>
                            <p>100% Free Forever</p>
                        </div>
                        <div className='landingImageHeaderSubtext'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='landingImageHeaderCheck'>
                                <path d="m12 0a12 12 0 1 0 12 12 12.014 12.014 0 0 0 -12-12zm6.927 8.2-6.845 9.289a1.011 1.011 0 0 1 -1.43.188l-4.888-3.908a1 1 0 1 1 1.25-1.562l4.076 3.261 6.227-8.451a1 1 0 1 1 1.61 1.183z"></path>
                            </svg>
                            <p>Easy to Use</p>
                        </div>
                        <div className='landingImageHeaderSubtext'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='landingImageHeaderCheck'>
                                <path d="m12 0a12 12 0 1 0 12 12 12.014 12.014 0 0 0 -12-12zm6.927 8.2-6.845 9.289a1.011 1.011 0 0 1 -1.43.188l-4.888-3.908a1 1 0 1 1 1.25-1.562l4.076 3.261 6.227-8.451a1 1 0 1 1 1.61 1.183z"></path>
                            </svg>
                            <p>Secure</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='landingTile'>
                    <h1>How does it work?</h1>
                    <div className='landingTileNumber'>
                        <div className='landingTileNumberTile'>
                            <h1>50</h1>
                        </div>
                        <div className='landingTileNumberTile'>
                            <h1>30</h1>
                        </div>
                        <div className='landingTileNumberTile'>
                            <h1>20</h1>
                        </div>
                    </div>
                    <p>The 50-30-20 principle is a simple approach to budgeting where 50 percent of your income goes to needs, 30 percent goes to wants, and 20 percent goes to debt and taxes. Common Cents implements this methodology for you in 2 simple steps.</p>
                    <div className='landingTileSteps'>
                        <div className='landingTileStepCard'>
                            <h1>1</h1>
                            <h2>Submit your income</h2>
                            <p>Common Cents will automatically determine your budget based on your monthly income</p>
                        </div>
                        <div className='landingTileStepCard'>
                            <h1>2</h1>
                            <h2>Enter your expenses</h2>
                            <p>In your budget dashboard you will be able to see a comprehensive breakdown of your monthly spending and how much you have left to spend in each category for the month.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Landing