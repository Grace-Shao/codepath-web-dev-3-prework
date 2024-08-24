import { supabase } from '../client'
import { React, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';


const EditPost = () => {
    const {id} = useParams();
    const [post, setPost] = useState({id: null, title: '', content: ''});
    const navigate = useNavigate();


    // Define the updatePost function
    const updatePost = async (e) => {
        e.preventDefault();
        // Update the record in the 'Posts' table with the new values
        await supabase
            .from('creators')
            .update({name: post.name, url: post.url, description: post.description})
            .eq('id', id)

        // Navigate back to the home page
        navigate('/');
    }
    const deletePost = async (e) => {
        e.preventDefault();
        await supabase
            .from('creators')
            .delete()
            .eq('id', id);
        navigate('/');
    }
    const handleChange = (e) => {
        const {name, value} = e.target;
        // return prev and update the value of the name
        setPost((prev) => ({
            ...prev,
            [name]: value
        }))
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
                <input type="submit" value="Submit" onClick={updatePost} />
                <button className="deleteButton" onClick={deletePost}>Delete</button>
            </form>
        </div>
    )
}
export default EditPost;