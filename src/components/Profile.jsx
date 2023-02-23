import React from 'react'
import Avatar from '@mui/material/Avatar'
import { faker } from '@faker-js/faker'
import Button from '@mui/material/Button';
import { TbReportAnalytics } from 'react-icons/tb';
const Profile = () => {
    return (
        <div>
            <div className='mt-5'>
                <div className='d-flex flex-column align-items-center'>
                    <Avatar
                        alt="Remy Sharp"
                        src={faker.image.avatar()}
                        sx={{ width: 100, height: 100 }}

                    />
                    <h2 className='mt-3'>Diane Cooper</h2>
                    <p> diane.cooper@example.com</p>
                    <div>
                        <div className='d-flex'>
                            <div className='bor'>
                                <h5 className='event1 d-flex flex-column align-items-center'><div>15</div>Past</h5>
                            </div>
                            <div>
                                <h5 className='event d-flex flex-column align-items-center'><div>02</div>Upcoming</h5>
                            </div>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <Button sx={{ width: "300px" }} variant="outlined">Send Message</Button>
                    </div>

                </div>
                <div>
                    <h6 className='mt-5'>Files / Documents</h6>
                    <div className='d-flex flex-column text-center'>
                        <div className='files d-flex justify-content-around align-items-center'>
                            <TbReportAnalytics />
                            Check Up Results.pdf
                            </div>
                        <div className='files mt-1  d-flex justify-content-around align-items-cente'>
                            <TbReportAnalytics />
                            Check Up Results.pdf
                            </div>
                        <div className='files mt-1 d-flex justify-content-around align-items-cente'>
                            <TbReportAnalytics />
                            Medical Prescription.pdf
                            </div>
                        <div className='files mt-1 d-flex justify-content-around align-items-cente'>
                            <TbReportAnalytics />
                            Dental X-Ray Result.pdf
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile