import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ozoilv1a8j01xnfl1g1d5d/master',
    cache: new InMemoryCache()
})