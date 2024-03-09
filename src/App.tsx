import './App.css';
import { useFetch } from './hooks/useFetch';

function App() {
  // Assuming 'medGasmi' is meant to be a static string. If it's dynamic, define it accordingly.
  const userName = 'medGasmi';
  const { loading, data, error } = useFetch(`https://api.github.com/users/${userName}`);
  
  if (loading) return <h1>loading...</h1>;
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  
  return (
    <div className="githubUser">
      <img src={data.avatar_url} alt="" />
      <p>this is my dream software {data.login}</p>
    </div>
  );
}

export default App; 
