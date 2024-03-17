import React, { useCallback, useEffect, useState } from 'react'
import NavBar from './NavBar';
import MovieList from './MovieList';
import {db} from '../firebase/config'
import {getDocs, collection} from 'firebase/firestore';
import UserMovieForm from './UserMovieForm';
import Button from './UI/Button';

function Home() {
    const [moviesData, setMovieData] = useState([]);
    const getDataRef = collection(db, 'moviedata');
    const movies = useCallback(async ()=>{
        try{
            const data = await getDocs(getDataRef);
            const dataInArray  = data.docs.map((doc)=>({
                ...doc.data(),
                id:doc.id 
            }));
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