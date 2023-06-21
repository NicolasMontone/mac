import { useRef } from 'react'
import { useGLTF, Html } from '@react-three/drei'
import { Group } from 'three'

export default function Macbook(props: JSX.IntrinsicElements['group']) {
  const group = useRef<Group | null>(null)
  const computer = useGLTF('/model.gltf')
  return (
    <primitive object={computer.scene} {...props} ref={group}>
      <rectAreaLight
        width={2.5}
        height={1.65}
        color={'#fff'}
        intensity={2.5}
        position-y={1.4}
      />
      <Html
        transform
        wrapperClass={'screen'}
        distanceFactor={1.17}
        position={[0, 1.56, -1.4]}
        rotation-x={-0.256}
      >
        <iframe src={'https://nicolasmontone.com/'} />
      </Html>
    </primitive>
  )
}

useGLTF.preload('/model.gltf')
