import { supabase } from '../client'
import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import '../styles/Card.css'

const ReadPosts = () => {
    const [posts, setPosts] = useState([]);
    
    // updates posts if it changes
    useEffect(() => {
        const fetchPost = async() => {
            const {data} = await supabase
            .from('creators')
            // return all database entries back to use after insert to database
            .select()
            // order by when created
            .order('created_at', { ascending: true })

            // set state of posts
            setPosts(data);
        }
        fetchPost()
    }, []);

    return (
        <div className='ViewCreators'>
        <h1>View all crewmates</h1>
            {
                posts && posts.length > 0 ?
                // todo: fix index later
                posts.map((post,index) => 
                   <Card id={post.id} name={post.name} url={post.url} description={post.description}/>
                ) : <h2>{'No Creators Yet 😞'}</h2>
            }
        </div>
    )
}
export default ReadPosts