import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const TerminalTelemetry = () => {
    return (
        <>
            <section className='terminal-telemetry-section'>
                <div className='container'>
                    <div className='row text-center'>
                        <div className='col-12'>
                            <h2 className='head01'>Terminal Telemetry Solutions</h2>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='terminal-wrap'>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <h3>Real-Time terminal monitoring</h3>
                                        <p className='fs-18'>Mswipe’s terminal telemetry system provides real-time monitoring of terminal status like battery health, charging status, signal strength and device memory utilisation. This ensures smooth
                                            operations and troubleshooting if required.</p>
                                    </div>
                                    <div className='col-md-6 d-flex align-items-center justify-content-end'>
                                        <div className='img'>
                                            <Image width={485} height={285} src="/images/terminal/01.svg" />
                                            <div className='sub-title'><Image width={257} height={83} src="/images/terminal/wisepospro.svg" /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='terminal-wrap'>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <h3>Remote firmware updates</h3>
                                        <p className='fs-18'>Easily push firmware updates from the back-end, keeping terminals up-to-date without any disruption to service.</p>
                                    </div>
                                    <div className='col-md-6 d-flex align-items-center justify-content-end'>
                                        <div className='img'>
                                            <Image width={485} height={285} src="/images/terminal/02.svg" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='terminal-wrap'>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <h3>Proactive troubleshooting</h3>
                                        <p className='fs-18'>Detects and resolves issues remotely, minimizing downtime and ensuring continuous, reliable performance for customers.</p>
                                    </div>
                                    <div className='col-md-6 d-flex align-items-center justify-content-end'>
                                        <div className='img'>
                                            <Image width={485} height={285} src="/images/terminal/03.svg" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12 d-flex align-items-center justify-content-center'>
                            <Link href="" type="submit" className="btn btn-primary btn-submit d-flex align-items-center justify-content-center w-fit-content">Partner with Mswipe <img src="/images/icons/greater-arrow-right-w.svg" alt="" /></Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TerminalTelemetry