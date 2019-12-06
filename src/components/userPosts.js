import React, {useState, useEffect} from 'react';

function UserPosts() {
    const [posts, setPosts] = useState([]);
    const [postsStatus, setPostStatus] = useState('loading');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                if (response.ok === false) {
                    throw new Error('Error Fetch Posts')
                }
                return response.json();
            })
            .then(data => {
                setPostStatus('success');
                setPosts(data);
            })
            .catch(error => {
                setPostStatus('error');
                setErrorMessage(error.message);
            })
    }, [])

    return (
        <div>
            {postsStatus === 'loading' && <h1>Loading....</h1>}
            {postsStatus === 'error' && <h1>{errorMessage}</h1>}
            {postsStatus === 'success' && posts.map(post => {
                return (
                    <h6 key={post.id}>{post.title}</h6>
                )
            })}
        </div>
    )
}

export default UserPosts;