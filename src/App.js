import MainMenu from "./parts/MainMenu";
import Todos from "./parts/Todos";
import {useParams, useRoutes} from "react-router-dom";
import Albums from "./parts/Albums";
import Comments from "./parts/Comments";
import Body from "./parts/component/Body";
import Post from "./parts/component/Post";

function App() {
    let routes = [
        {
            path: '/',
            element: <MainMenu/>,
            children: [
                {element: <Todos/>, path: 'todos'},
                {element: <Albums/>, path: 'albums'},
                {element: <Comments/>, path: 'comments'},
                {element: <Post/>, path: 'posts'}
            ]
        }
    ]

    let element = useRoutes(routes)
    return (
        <div>
            {element}
        </div>
    );
}

export default App;
