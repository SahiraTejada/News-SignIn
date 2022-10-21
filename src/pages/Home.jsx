import React from 'react'
import Card from '../components/Card'
import { post } from './data'

const Home = () => {
  return (
    <div className='home'>{post.map(post=>(
        <Card ket= {post.id}post={post}/>
    ))}</div>
  )
}

export default Home