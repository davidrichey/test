import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'

function InlineErrorInner(props) {
  const {message, show} = props
  if(!show) { return null; }

  return (
    <div className="MemberHub-InlineError">
      <FontAwesomeIcon icon={faExclamationCircle}/> {message}
    </div>
  )
}
export const MHInlineError = InlineErrorInner;
