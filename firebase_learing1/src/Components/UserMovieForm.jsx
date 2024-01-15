import React, {useState} from 'react'
import Input from '../Components/UI/Input';
import Button from './UI/Button';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase/config';

function UserMovieForm() {
    const moviesCollectionRef = collection(db, "moviedata");
    const [newMovieData ,setMovieData] = useState({ name: '', email: '' });

    const handleInputChange = (e) => {
        e.preventDefaut();
        setMovieData({ ...newMovieData, [e.target.name]: e.target.value });
    };

    async function handlePushData(e){
        e.preventDefaut();
        await addDoc(moviesCollectionRef, newMovieData);
        console.log("This is Done here");
    }

    return (
        <div className='w-2/4 px-2'>
            <h2>Enter Movies Data : </h2>
            <div>
                <label>
                    Movie Name:
                    <Input
                        type="text"
                        name="movieName"
                        value={newMovieData.name}
                        clName={"border rounded"}
                        change={handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Relesed Date:
                    <Input
                        type="text"
                        name="releaseDate"
                        value={newMovieData.email}
                        clName={"border rounded"}
                        change={handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Oscar Got:
                    <Input
                        type="text"
                        name="oscarGot"
                        value={newMovieData.email}
                        clName={"border rounded"}
                        change={handleInputChange}
                    />
                </label>
                <br />
                <Button
                    click={handlePushData} 
                    type="submit" 
                    name={"Submit"}
                    clName={"border border-blue-600 bg-black text-white px-2 py-1 rounded my-2 w-full"}
                />
            </div>
        </div>
    )
}
export default UserMovieForm;