import {
  ContactShadows,
  Environment,
  Float,
  PresentationControls,
} from '@react-three/drei'
import './App.css'
import Macbook from './components/Macbook'

function App() {
  return (
    <>
      <Environment preset={'city'} />
      <color args={['#241a1a']} attach={'background'} />
      <PresentationControls
        global
        polar={[-1.4, 0.2]}
        rotation={[0.13, 0.1, 0]}
        azimuth={[-1, 0.7]}
        config={{
          mass: 2,
          tension: 400,
        }}
        snap={{
          mass: 4,
          tension: 500,
        }}
      >
        <Float rotationIntensity={0.2}>
          <Macbook position-y={-1.2} position-z={2} />
        </Float>
      </PresentationControls>
      <ContactShadows position-y={-1.4} opacity={0.4} blur={3} />
    </>
  )
}

export default App
