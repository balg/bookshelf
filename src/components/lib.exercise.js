import {keyframes} from '@emotion/core'
import styled from '@emotion/styled/macro'
import {Dialog as ReachDialog} from '@reach/dialog'
import {FaSpinner} from 'react-icons/fa'
import * as colors from 'styles/colors'
import * as mq from 'styles/media-queries'

const buttonVariants = {
  primary: {
    background: colors.indigo,
    color: colors.base,
  },
  secondary: {
    background: colors.gray,
    color: colors.text,
  },
}
const Button = styled.button(
  {
    padding: '10px 15px',
    border: '0',
    lineHeight: '1',
    borderRadius: '3px',
  },
  ({variant = 'primary'}) => buttonVariants[variant],
)

const Input = styled.input({
  borderRadius: '3px',
  border: `1px solid ${colors.gray}`,
  background: colors.gray,
  padding: '8px 12px',
})

const CircleButton = styled.button({
  borderRadius: '30px',
  padding: '0',
  width: '40px',
  height: '40px',
  lineHeight: '1',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: colors.base,
  color: colors.text,
  border: `1px solid ${colors.gray}`,
  cursor: 'pointer',
})

const Dialog = styled(ReachDialog)({
  maxWidth: '450px',
  borderRadius: '3px',
  paddingBottom: '3.5em',
  boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.2)',
  margin: '20vh auto',
  [mq.small]: {
    width: '100%',
    margin: '10vh auto',
  },
})

const FormGroup = styled.div({
  display: 'flex',
  flexDirection: 'column',
})

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const Spinner = styled(FaSpinner)`
  animation: ${spin} 1s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite;
`

export {Button, Input, CircleButton, Dialog, FormGroup, Spinner}
