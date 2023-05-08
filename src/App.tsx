import { PostsComponent } from "./pages/posts";
import { ErrorBoundary } from "./hoc/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <PostsComponent />
    </ErrorBoundary>
  );
}

export default App;
