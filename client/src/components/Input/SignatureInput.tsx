import React from 'react'
import SignatureCanvas from 'react-signature-canvas'
import styled from 'styled-components'

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
      <A onClick={clear}>지우기</A>
    </>
  )
}

export default SignatureInput

const SignaturePad = styled(SignatureCanvas)`
`;

const A = styled.a`
  display: block;
  margin-top: 4px;
  text-align: right;
  font-size: 12px;
  color: #676767;
  cursor: pointer;
  text-decoration: underline;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-right: 10px;
  box-sizing: border-box;
`;