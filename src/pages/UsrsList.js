import React from 'react'
import { useUsers } from '../hooks/useUsers'
import {Link} from 'react-router-dom'



function UsrsList() {
 
  const{error, data, loading} = useUsers()
  // console.log(this.props)
  return (
    <div className='UserList'>
      {data?.users?.map((user) =>{
        return(
        <div key={user.id}>
          <Link to={`/${user.id}`}>
            <h2>{user.name}</h2>
          </Link>
          <p>{user.email}</p>
          <p>{user.mobile}</p>
        </div>)
      })}
    </div>
  )
}

export default UsrsList
