import React, { useCallback, useEffect, useState } from 'react'
import NavBar from './NavBar';
import MovieList from './MovieList';
import {db} from '../firebase/config'
import {getDocs, collection} from 'firebase/firestore';
import UserMovieForm from './UserMovieForm';

function Home() {
    const moviedata = [
        { movieName: 'The Shawshank Redemption', releaseDate: '1994-09-10', oscarGot: 'No' },
        { movieName: 'The Godfather', releaseDate: '1972-03-24', oscarGot: 'Yes' },
        { movieName: 'The Dark Knight', releaseDate: '2008-07-18', oscarGot: 'Yes' },
        // Add more movies as needed
    ];
    const [moviesData, setMovieData] = useState([]);

    const getDataRef = collection(db, 'moviedata');

    const movies = useCallback(async ()=>{
        try{
            // let array = new Array
            const data = await getDocs(getDataRef)
            const dataInArray  = data.docs.map((doc) => doc.data());
            setMovieData(dataInArray);
        }catch(err){
            console.error(err);
        }
    },[])


    useEffect(()=>{
        movies()
    },[movies])

    return (
        <>
            <NavBar/>
            <div className='w-3/5 m-auto'>
            
                <MovieList data ={moviesData}/>
                <UserMovieForm className="w-3/4 m-auto"/>
            </div>
        </>
        
    )
}

export default Home