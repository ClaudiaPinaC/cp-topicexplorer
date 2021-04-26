import { ApolloProvider } from '@apollo/client';
import { BaseClient } from './apollo-client';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { SearchTopic } from './components/SearchTopic';

function App() {
  return (
      <ApolloProvider client={BaseClient()}>
        <Header />
        <SearchTopic />
        <Footer />
      </ApolloProvider>
  );
}

export default App;
