import { ApolloClient, InMemoryCache } from "@apollo/client";

import { ApolloProvider } from "@apollo/react-hooks";
import React from "react";
import type { ReactElement } from "react";

/**
 * Creates a component with an instance of the ApolloClient for connecting to the GraphQL endpoint.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function withApolloClient<P>(Component: React.ComponentType<P>): React.ComponentType<P> {
    const graphqlUri = process.env.GRAPHQL_ENDPOINT;
    console.log(`GraphQL Endpoint: ${graphqlUri}`);
    
    const client = new ApolloClient({
        uri: "http://localhost:5000/",
        cache: new InMemoryCache()
    });

    return class WithApolloClient extends React.Component<P> {
        public render(): ReactElement {
            return (
                <ApolloProvider client={client}>
                    <Component {...this.props} />
                </ApolloProvider>
            );
        }
    };
}
