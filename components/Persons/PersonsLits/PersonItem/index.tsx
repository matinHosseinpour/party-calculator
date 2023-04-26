import React from 'react'

const PersonItem = ({data}: {data: any}) => {
  return (
    <div className={'flex flex-row gap-2'}>{`${data.first_name} ${data.last_name}`}</div>
  )
}

export default PersonItem