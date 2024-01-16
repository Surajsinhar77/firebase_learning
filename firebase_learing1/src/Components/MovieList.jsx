import React, { useMemo } from 'react';
import { db } from '../firebase/config';
import { doc, deleteDoc } from "firebase/firestore"
import Table from 'react-bootstrap/Table';
import Button from './UI/Button';

const MovieList = ({ data }) => {

    const onDeleteRow = async (movieId) => {
        console.log("Inside on DeleteRow function ", movieId)
        try {
            const databaseRef = doc(db, "moviedata", movieId);
            await deleteDoc(databaseRef);
            console.log(`Movie with ID ${movieId} deleted successfully`);
            alert("Movie is SucessFull Deleted");
        } catch (error) {
            console.error('Error deleting movie:', error);
            alert("Error While Deleting the movie");
        }
    };

    return (
        <div className="container mx-auto my-5 border">
            <table>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Movie Name</th>
                        <th>Relesed Year</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item,index)=>
                        <tr key={index}>
                            <td>{index}</td>
                            <td>{item.movieName}</td>
                            <td>{item.releaseDate}</td>
                            <td><Button click={()=>onDeleteRow(item.id)} clName={"border px-2 py-1 rounded bg-red-600 text-white"} name={"Delete"} /></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default MovieList;
