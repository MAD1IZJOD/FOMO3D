import { useEffect, useState } from 'react'
import ThreeScene from './ThreeScene'
import axios from 'axios'

export default function Feed() {
  const [posts, setPosts] = useState([])
  
  useEffect(() => {
    axios.get('/api/feed').then(res => {
      setPosts(res.data)
    })
  }, [])

  return (
    <div className="h-screen w-full">
      <div className="absolute top-4 right-4 text-white z-10">
        <span className="text-xs">🔥 24h LEFT TO VIEW</span>
      </div>
      <ThreeScene posts={posts} />
    </div>
  )
}