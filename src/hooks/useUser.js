import { gql, useQuery } from "@apollo/client";
import {} from "@apollo/client";

const GET_USER = gql`
  query GetUser($id: Int!) {
    user(id: $id) {
      id
      name
      email
      mobile
      addresses {
        id
        name
        description
      }
    }
  }
`;

export const useUser = (id) => {
  const { data, error, loading } = useQuery(GET_USER, {
    variables: {
      id: parseInt(id)
    },
  });
  return {
    data,
    error,
    loading,
  };
};
