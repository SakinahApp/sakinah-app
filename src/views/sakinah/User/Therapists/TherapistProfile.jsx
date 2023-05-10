import { Avatar, Box, Button, Chip } from '@mui/material';
import React, { useState } from 'react';
import { Link,  useParams } from 'react-router-dom'
import Calendar from './Calendar';
import therapistImage from '../images/therapist1.png'
import { getDoc, doc } from "firebase/firestore"
import { db } from "../../../../Firebase"


function TherapistProfile(props) {
    const {id} = useParams()
const [therapist, setTherapist] = useState(null)

  
  async function fetchData(uid) {
    const docRef = doc(db, "therapist-profile", uid)
    const usersData = await getDoc(docRef)

    usersData.exists() ?
    setTherapist(usersData.data()) :
        console.log("No such document!")
}

  React.useEffect(() => {
    fetchData(id)
  }, [])

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
                    background: '#e0e1f1',
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
                            {therapist?.therapist_name || 'Name'}
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
                <Box sx={{ padding: '10px 20px', width:'100%'  }}>
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
                        {therapist?.bio}
                    </p>
                </Box>
                <Box sx={{ padding: '10px 20px', width:'100%' }}>
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
                        Education
                    </h4>
                    <p
                        style={{
                            color: "#323331",
                            fontSize: 16,
                            padding: 0,
                            margin: 0,
                        }}
                    >
                        {therapist?.education}
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
                        Top topics
                    </h4>
                    <Box display="flex" flexWrap='wrap'>
                        {therapist?.top_topics?.map(item => (
                            <Chip
                                label={item}
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