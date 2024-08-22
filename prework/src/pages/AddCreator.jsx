import { supabase } from '../client'
import { React, useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

const AddCreator = () => {
    // const navigate = useNavigate();
    const [creator, setCreator] = useState({name: "", url: "", description: ""})

    const createCreator = async (event) => {
        event.preventDefault();
        const { data, error } = await supabase
        // which table
        .from('creators')
        // the create in CRUD
        .insert({name: creator.name, url: creator.url, description: creator.description})
        // return the database entry back once inserted into database
        .select();
        if (error) {
            throw new Error(`Error inserting creator: ${error.message}`);
        }

    }
    const handleChange = (event) => {
        const {name, value} = event.target;
        setCreator( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    return (
        <div>
        <form>
            <label htmlFor="name">Name</label> <br />
            <input type="text" id="name" name="name" onChange={handleChange} /><br />

            <label htmlFor="url">URL</label><br />
            <input type="text" id="url" name="url" onChange={handleChange} /><br />
            <br/>

            <label htmlFor="description">Description</label><br />
            <input type="text" id="description" name="description" onChange={handleChange}/>
            <input type="submit" value="Submit" onClick={createCreator} />
        </form>
        </div>
    )
}
export default AddCreator