import { useQuery, gql } from '@apollo/client'
// import { graphql } from 'react-apollo'


const GET_USERS = gql`
{
  users{
  id
  name
  email
  mobile
  }
}  `
// console.log(this.props)

export const useUsers =()=> {
    const {error, data, loading} = useQuery(GET_USERS)

    return {
        error,
        data, 
        loading
    }
}