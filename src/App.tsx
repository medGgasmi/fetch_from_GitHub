import './App.css';
import { useFetch } from './hooks/useFetch';

function App() {
  const userName = 'medGasmi';
  const { loading, data, error } = useFetch(`https://api.github.com/users/${userName}`);
  
  if (loading) return <h1>loading...</h1>;
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  // Ensure data is not undefined before accessing its properties
  if (!data) return <div>No data found</div>;
  
  return (
    <div className="githubUser">
      {/* Now safe to assume data is not undefined */}
      <img src={data.avatar_url} alt={data.login} />
      <p>this is my dream software {data.login}</p>
    </div>
  );
}

export default App;
