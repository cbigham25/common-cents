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
                        <button>Try It Now</button>
                        <button>View An Example</button>
                    </div>
                </div>
                <div className='landingSubSection landingImageHeader'>
                    <img src={budget} alt="budget" />
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
                            <h2>Enter your income</h2>
                        </div>
                        <div className='landingTileStepCard'>
                            <h1>2</h1>
                            <h2>Enter your expenses</h2>
                        </div>
                    </div>
                    <p>and Common Cents does the rest! In your budget dashboard you will be able to see a comprehensive breakdown of your monthly spending and how much you have left to spend in each category.</p>
                </div>
            </section>
        </div>
    )
}

export default Landing