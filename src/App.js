import {Route, Routes} from "react-router-dom";

import './App.css';
import {Layout} from "./components";
import {AlbumsPage, CommentsPage, PostPage, TodosPage} from "./pages";

function App() {
  return (
    <div>
      <Routes>
        <Route path={'/'} element={<Layout/>}>
          <Route path={'albums'} element={<AlbumsPage/>}/>
            <Route path={'comments'} element={<CommentsPage/>}>
              <Route path={':postId'} element={<PostPage/>}/>
            </Route>
          <Route path={'todos'} element={<TodosPage/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
