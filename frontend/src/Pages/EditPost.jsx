import { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import Editor from '../components/Editor';

function EditPost() {

    const { id } = useParams();

    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const [files, setFiles] = useState('');
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        // console.log(id);
        fetch(`http://localhost:4000/post/${id}`)
            .then(response => {
                response.json().then(postInfo => {
                    setTitle(postInfo.title);
                    setContent(postInfo.content);
                    setSummary(postInfo.summary);
                })
            })
    }, [])

    async function updatePost(e) {
        e.preventDefault();
        const data = new FormData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('content', content);
        data.set('id', id);
        if (files?.[0]) {
            data.set('file', files?.[0]);
        }

        const response = await fetch('http://localhost:4000/post', {
            method: 'PUT',
            body: data,
            credentials: 'include',
        });
        if (response.ok) {
            setRedirect(true);
        }
    }

    if (redirect) {
        return <Navigate to={'/post/' + id} />
    }

    return (
        <form onSubmit={updatePost}>
            <input
                type="text"
                placeholder={'Title'}
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <input
                type="summary"
                placeholder={'Summary'}
                value={summary}
                onChange={e => setSummary(e.target.value)}
            />
            <input
                type="file"
                onChange={e => setFiles(e.target.files)}
            />
            <Editor value={content} onChange={setContent} />
            <button style={{ marginTop: '8px' }}>Update post</button>

        </form>
    )
}

export default EditPost;