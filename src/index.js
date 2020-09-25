import React from 'react'
import ReactDom from 'react-dom'
// import { ApolloClient } from 'apollo-boost'
// import { ApolloProvider } from 'react-apollo'
import { App } from './App'

// const client = new ApolloClient({
//  url: 'https://petgram-server-jrmfsd-okxluew9o.now.sh/graphql'
// })

ReactDom.render(
  <App />,
  document.getElementById('app'))
