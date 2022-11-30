import {Container, Typography} from "@mui/material";
import Image from 'mui-image'
import {Person} from "../models/Person";
import MoviePosterBox from "./MoviePosterBox";
import {getPerson} from "../middleware/getPerson";
import {useEffect, useState} from "react";
import NotFound from '../assets/error-404.png'
import {useSearchParams} from "react-router-dom";

const PersonPage = ()=>{
    const [param] = useSearchParams()
    const personId = param.get("personId")
    const [person, setPerson] = useState<Person>()
    const initLoad = async() => {
        if (personId != null){
            setPerson(await getPerson(parseInt(personId)))
        }else {
            setPerson(undefined)
        }

    }
    useEffect(()=>{
        initLoad()
    })
    const url = person?.profile_path !=null ?  `https://image.tmdb.org/t/p/w500${person.profile_path}`:NotFound

    return(
        <Container>
            {person != undefined ?
                <Container sx={{
                    display: "flex",
                    flexDirection: "column"
                }}>
                    <Container sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        height: '30rem',
                        width:'50rem'
                    }}>
                        <Container sx={{

                        }}>
                            <Image src={url}/>
                        </Container>
                        <Container>
                            <Typography>{person.name}</Typography>
                            <Container>
                                <Typography>{`Birthday ${person.deathday != null ? "and deathday":''}:`}</Typography>
                                <Typography>{`${person.birthday} ${person.deathday !=null ? person.deathday: ''}`}</Typography>
                            </Container>
                            <Container>
                                <Typography>Known for being:</Typography>
                                <Typography>{person.known_for_department}</Typography>
                            </Container>
                            <Container>
                                <Typography>Popularity:</Typography>
                                <Typography>{person.popularity}</Typography>
                            </Container>
                        </Container>
                    </Container>
                    <Typography>
                        {person.biography}
                    </Typography>
                    <Container sx={{
                        display: "flex",
                        flexDirection: "row",
                        height:"5rem"
                    }}>
                        {person.known_for != undefined && true ? person.known_for.map((item)=>{
                            return <MoviePosterBox id={item.id} poster_path={item.poster_path} title={item.title} vote_average={item.vote_average}/>
                        }) : ''}
                    </Container>
                </Container>
                :
                <Typography>Oops!</Typography>
            }
        </Container>
    )
}

export default PersonPage