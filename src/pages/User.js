import React from 'react'
import {useUser} from "../hooks/useUser"
import { useParams } from 'react-router-dom'

function User() {
 const {id} = useParams()

  const {data, loading, error } = useUser(id)
  console.log({error, data, loading})
  return (
    <div key={data?.user.id}>
      USER
       <h1>{data?.user.name}</h1>
      <p>{data?.user.email}</p>
      <p>{data?.user.mobile}</p>
      <div>
        {data?.user.addresses.map((address )=> {
          return (
          <div key={address.id}>
            {address.name} -<b>{address.description}</b>
          </div>
          )
        })}
      </div> {/**/}
    </div>
  )
}

export default User
