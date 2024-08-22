import { useEffect, useState } from 'react';
import {useParams, Link } from 'react-router-dom';
import { supabase } from '../client'

const DetailedInfoCrewmate = () => {
    const {id} = useParams();
    const [info, setInfo] = useState({id: null, title: '', content: ''});

    useEffect (() => {
        const fetchData = async() => {
            console.log('fetching data')
            const {data} = await supabase
            .from('creators')
            .select()
            .eq('id', id)
            console.log(data);
            setInfo(data[0]);
        }
        fetchData()
    }, []);
    return (
        <div>
            <h1>{info.name}</h1>
            <p>URL: {info.url}</p>
            <p>{info.description}</p>
            {/* {info.speed <= 2 ? <p>This crewmate is a bit slow</p> : <p>This crewmate is speedy</p>}
            <p><Link to={"/"}>Go back</Link></p> */}
        </div>
    )
}
export default DetailedInfoCrewmate