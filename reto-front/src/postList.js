//Importe la libreria de axios para acceder al json
import axios from 'axios';


//Funcion para hacer la solicitud a la API
async function fetchPosts() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data;
  }

  //Componente de funcionalidad con el estado
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    fetchPosts().then(data => setPosts(data));
  }, []);

  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
