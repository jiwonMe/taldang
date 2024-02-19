import React from 'react'
import SignatureCanvas from 'react-signature-canvas'
import styled from 'styled-components'
import Button from '../Button'

const SignatureInput = () => {
  const sigCanvas = React.useRef<SignatureCanvas>(null)

  const clear = () => {
    sigCanvas.current?.clear()
  }

  return (
    <>
      <SignaturePad
        ref={sigCanvas}
        canvasProps={{
          className: 'signature-canvas',
          style: {
            width: '100%',
            height: '15em',
            border: '1px solid #676767',
            borderRadius: '8px',
            backgroundColor: 'white'
          }
        }}
        clearOnResize={false}
      />
      <a onClick={clear}>지우기</a>
    </>
  )
}

export default SignatureInput

const SignaturePad = styled(SignatureCanvas)`
`;