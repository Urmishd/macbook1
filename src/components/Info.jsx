import React from 'react'
import TextField from '@mui/material/TextField';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import { TbReportAnalytics } from 'react-icons/tb';
const Info = () => {
    return (
        <div>
            <div className='infopage'>
                <form action="">
                    <div className='d-flex justify-content-between'>
                        <TextField id="standard-basic" label="Gender" variant="standard" value='male' />
                        <TextField id="standard-basic" label="Birthday" variant="standard" value='Feb 24th, 2023' />
                        <TextField id="standard-basic" label="Phone Number" variant="standard" value='+91 9999988888' />
                        <TextField id="standard-basic" label="Registered Date" variant="standard" value='Feb 24th, 2023' />
                    </div>
                    <div className='d-flex justify-content-between mt-4'>
                        <TextField id="standard-basic" label="Street Address" variant="standard" value='JL. Diponegoro No. 21' />
                        <TextField id="standard-basic" label="City" variant="standard" value='Cilacap' />
                        <TextField id="standard-basic" label="Zip Code" variant="standard" value='380001' />
                        <TextField id="standard-basic" label="Member Status" variant="standard" value='Active Member' />
                    </div>

                </form>
            </div>
            <div>
                <div className='mt-5'>
                    <ButtonGroup className='border'>
                        <Button className='text-primary' variant="light">Upcoming Appointments</Button>
                        <Button variant="light">Past Appointments</Button>
                        <Button variant="light">Medical Records</Button>
                    </ButtonGroup>
                </div>
            </div>
            <div className='canal rounded mt-4 p-3'>
                <div className='d-flex align-items-center justify-content-between border-bottom'>
                    <div><p>Root Canal Treatment</p></div>
                    <div><p className='show'>Show Previous Treatments</p></div>
                </div>
                <div className='d-flex justify-content-between mt-3 bg-light'>
                    <div>
                        <h2>26 Nov'19</h2>
                        <p>09.00-10.00</p>
                    </div>
                    <div className='brd'></div>
                    <div>
                        <p>Treatment</p>
                        <h5>Open Access</h5>
                    </div>
                    <div className='brd'></div>
                    <div className='row'>
                        <div className='col-4'>
                            <p>Dentist</p>
                            <h5>Drg.Adam H.</h5>
                        </div>
                        <div className='col-4'>
                            <p>Nurse</p>
                            <h5>Jessicamila</h5>
                        </div>
                        <div className='d-flex justify-content-center align-items-center col-4'>
                        <a href="#"><TbReportAnalytics size={25} /></a>
                            <a className='pt-2 text-decoration-none' href='#'><h6>Note</h6></a>
                           
                        </div>
                    </div>

                </div>
                <div className='d-flex justify-content-between mt-3 bg-light'>
                    <div>
                        <h2>26 Nov'19</h2>
                        <p>09.00-10.00</p>
                    </div>
                    <div className='brd'></div>
                    <div>
                        <p>Treatment</p>
                        <h5>Open Access</h5>
                    </div>
                    <div className='brd'></div>
                    <div className='row'>
                        <div className='col-4'>
                            <p>Dentist</p>
                            <h5>Drg.Adam H.</h5>
                        </div>
                        <div className='col-4'>
                            <p>Nurse</p>
                            <h5>Jessicamila</h5>
                        </div>
                        <div className='d-flex justify-content-center align-items-center col-4'>
                            <a href="#"><TbReportAnalytics size={25} /></a>
                            <a className='pt-2 text-decoration-none' href='#'><h6>Note</h6></a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Info