// import SockContainer from './sockContainer.jsx';
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { ApolloProvider, ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client"; 

const httpLink = createHttpLink({
    uri: "/graphql",
});

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: httpLink,
});

const App = () => {
    return (
        <ApolloProvider client={client}>

            <Header />
            <Outlet />
            <Footer />
        </ApolloProvider>
    );
};

export default App;
