import { Avatar, Box, Button, Chip } from '@mui/material';
import React from 'react';
import { Link, useLocation } from 'react-router-dom'
import ConfirmBooking from '../Components/ConfirmBooking';
import Calendar from './Calendar';
import therapistImage from '../images/therapist1.png'


function TherapistProfile(props) {
    const location = useLocation()
    const { therapist } = location.state
    // console.log('therapist :>> ', therapist);

    return (
        <Box display='flex' sx={{ height: '100%' }}>
            <div
                style={{
                    padding: "20px 10px",
                    flex: 2,
                    margin: 5,
                    marginRight: 15,
                    borderRadius: 23,
                    color: "white",
                    height: '100%',
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: "column",
                    background: therapist.background,
                }}
            >
                <Box
                    sx={{
                        display: 'flex', alignItems: 'left',
                        justifyContent: 'start',
                        width: '100%', padding: '10px 20px'
                    }}>
                    <Avatar src={therapistImage} sx={{ bgcolor: "purple", width: 100, height: 100 }} />
                    <Box
                        display="flex" alignItems="center" flexDirection="column"
                        sx={{
                            display: 'flex', width: '100%',
                            justifyContent: 'center',
                            alignItems: 'flexStart',
                            padding: '0px 30px'

                        }}>
                        <h4
                            style={{
                                color: "#323331",
                                fontWeight: 600,
                                fontSize: 18,
                                padding: 0,
                                margin: 0,
                            }}
                        >
                            Akbar Hussain
                        </h4>
                        <p style={{ color: "grey", marginBottom: 5 }}>Therapist #22</p>
                        <p style={{
                            color: "rgb(226, 109, 128)", fontWeight: 600,
                            padding: '3px 10px', background: 'white',
                            border: '2px solid rgb(226, 109, 128)',
                            width: '191px', borderRadius: 12
                        }}>
                            Price per session £50
                        </p>
                    </Box>
                </Box>
                <Box sx={{ padding: '10px 20px' }}>
                    <h4
                        style={{
                            color: "#323331",
                            fontWeight: 600,
                            fontSize: 16,
                            padding: 0,
                            margin: 0,
                            marginBottom: 2
                        }}
                    >
                        Work experience
                    </h4>
                    <p
                        style={{
                            color: "#323331",
                            fontSize: 16,
                            padding: 0,
                            margin: 0,
                        }}
                    >
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae ducimus saepe blanditiis obcaecati eius, iste, provident, est voluptatem asperiores dolore nihil molestiae veritatis aliquam perferendis alias omnis officia? Modi, dolorem.
                    </p>
                </Box>
                <Box sx={{ padding: '10px 20px' }}>
                    <h4
                        style={{
                            color: "#323331",
                            fontWeight: 600,
                            fontSize: 16,
                            padding: 0,
                            margin: 0,
                            marginBottom: 2
                        }}
                    >
                        Educaiton
                    </h4>
                    <p
                        style={{
                            color: "#323331",
                            fontSize: 16,
                            padding: 0,
                            margin: 0,
                        }}
                    >
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae ducimus saepe blanditiis obcaecati eius, iste, provident, est voluptatem asperiores dolore nihil molestiae veritatis aliquam perferendis alias omnis officia? Modi, dolorem.
                    </p>
                </Box>
                <Box sx={{ padding: '10px 20px', float: 'left', width: '100%' }}>
                    <h4
                        style={{
                            color: "#323331",
                            fontWeight: 600,
                            fontSize: 16,
                            padding: 0,
                            margin: 0,
                            marginBottom: 4
                        }}
                    >
                        Highlights
                    </h4>
                    <Box display="flex" flexWrap='wrap'>
                        {[1, 2, 3, 4, 5].map(item => (
                            <Chip
                                label="4 Years experience"
                                variant="outlined"
                                style={{
                                    color: '#323331', background: '#d1ddfc', padding: '0.58rem',
                                    margin: "5px 10px 5px 0px", border: 'none', borderRadius: '0.75rem'
                                }}
                            />
                        ))}
                    </Box>
                </Box>
                <Box display="flex" alignItems="center" flexDirection="row">
                    <Link to="/therapists">
                        <Button
                            variant="contained"
                            style={{
                                borderRadius: 20,
                                color: "black",
                                background: "white",
                                width: 100, fontWeight: 600,
                                boxShadow: "none",
                                marginRight: 20
                            }}
                        >
                            Back
                        </Button>
                    </Link>
                </Box>
            </div>
            <Calendar therapist={therapist} />
        </Box>
    );
}

export default TherapistProfile;