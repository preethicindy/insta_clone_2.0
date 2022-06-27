import React from 'react'
import Post from './Post'

function Posts() {
  const posts = [
    {
      id: 1234,
      username: 'realjs',
      userImg: 'https://links.papareact.com/3ke',
      image:
        'https://firebasestorage.googleapis.com/v0/b/instagram-clone-react-e123e.appspot.com/o/images%2Fhusky.jpeg?alt=media&token=632a1c1e-08ac-42ef-a5d8-cbf19d18eee7',
      caption: 'Husky love <3',
    },
    {
      id: 1234,
      username: 'nextjs',
      userImg: 'https://links.papareact.com/3ke',
      image:
        'https://firebasestorage.googleapis.com/v0/b/instagram-clone-react-e123e.appspot.com/o/images%2FLauren%26Charlie2.jpeg?alt=media&token=fd0a3635-8562-471b-8cfb-27c9271a6a05',
      caption: 'Lovely day!',
    },
  ]
  return (
    <div className="">
      {posts.map((post) => (
        <Post
          key={post.id}
          username={post.username}
          userImg={post.userImg}
          image={post.image}
          caption={post.caption}
        />
      ))}
    </div>
  )
}

export default Posts
