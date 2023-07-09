import {Layout} from "./modules/layout/Layout";
import {Route, Routes, BrowserRouter} from "react-router-dom";
import {AuthorPage} from "./pages/author-page/AuthorPage";
import {IndexPage} from "./pages/index-page/IndexPage";

function App() {
  return (
      <BrowserRouter>
          <Layout>
                <Routes>
                    <Route path="/" element={<IndexPage />} />

                    <Route path=":authorLogin" element={<AuthorPage />} />
                </Routes>
          </Layout>
      </BrowserRouter>
  );
}

export default App;
