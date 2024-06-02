import { useEffect, useState } from 'react'

function App() {

  const [enabled, setEnabled] = useState(false)

  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMove = ({ clientX, clientY }) => setPosition({ x: clientX, y: clientY })
    if (enabled) addEventListener('pointermove', handleMove)
    //cleanup de useEffect; se ejecutara cuando el componente se desmonta y cuando cambien las dependencias,
    //antes de volver a ejecutar el efecto
    return () => removeEventListener('pointermove', handleMove)
  }, [enabled])

  return (
    <main>
      <div style={{
        position: 'absolute',
        backgroundColor: '#09f',
        border: '3px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      />

      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivar' : 'Activar'} Seguimiento
      </button>
    </main>
  )
}

export default App