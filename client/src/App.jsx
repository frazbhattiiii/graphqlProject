import {
    BrowserRouter ,
    Routes ,
    Route ,
} from "react-router-dom";
import Home from "./Pages/Home";
import {ApolloProvider,ApolloClient,InMemoryCache} from "@apollo/client";
import Project from "./Pages/Project";
import ProjectInfo from "./Pages/ProjectInfo";

const cache = new InMemoryCache({
    typePolicies:{
        Query:{
            fields:{
                clients:{
                    merge(existing,incoming){
                        return incoming;
                    }
                },
                projects:{
                    merge(existing,incoming){
                        return incoming;
                    }
                }
            }
        }
    }
});

const  client = new ApolloClient({
    uri:`${process.env.REACT_APP_SERVER_URL}/graphql`,
    cache,
});
function App() {
    return (
        <ApolloProvider client={client}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home/> }/>
                <Route path="/projects" element={ <Project/> }/>
                <Route path="/projects/:id" element={ <ProjectInfo/> }/>
            </Routes>
        </BrowserRouter>
        </ApolloProvider>
    );
}

export default App;