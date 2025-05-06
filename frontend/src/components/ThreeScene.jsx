import { Canvas } from '@react-three/fiber'
import { OrbitControls, Image } from '@react-three/drei'

export default function ThreeScene({ posts }) {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      
      {posts.map((post, i) => (
        <Image
          key={post.id}
          url={post.imageUrl}
          position={[(i % 5) * 2.5 - 5, Math.floor(i / 5) * -3, 0]}
          scale={[2, 1.5, 1]}
          transparent
        />
      ))}
      
      <OrbitControls 
        enableZoom={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 3}
      />
    </Canvas>
  )
}