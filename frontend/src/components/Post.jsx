import React from 'react'

const Post = () => {
    return (
        <div className='post'>
            <div className='image'>
                <img src="https://techcrunch.com/wp-content/uploads/2024/05/Screenshot-2024-05-14-at-12.04.58%E2%80%AFPM.png?resize=1200,674" alt="" />
            </div>
            <div className='texts'>
                <h2>Google I/O 2024: Here's everything Google just announced</h2>
                <p className='info'>
                    <span className='author'>John Doe</span>
                    <time>2023-12-06 09:45</time>
                </p>
                <p className='summary'>Google I/O keynote day! Google kicked off its developer conference each year with a rapid-fire stream of announcements, including many unveilings of recent things it's been working on</p>
            </div>
        </div>
    )
}

export default Post