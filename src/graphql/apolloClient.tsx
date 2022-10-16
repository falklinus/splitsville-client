import {ApolloClient, InMemoryCache, createHttpLink} from '@apollo/client'
import {setContext} from '@apollo/client/link/context'

const SERVER_URI = !process.env.NODE_ENV || process.env.NODE_ENV === 'development' ? 'http://localhost:3001' : 'https://splitsville-server.herokuapp.com/'

const httpLink = createHttpLink({
  uri: SERVER_URI,
})

const authLink = setContext((_, {headers}) => {
  const token = localStorage.getItem('split_token')
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
})

const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

export default apolloClient
