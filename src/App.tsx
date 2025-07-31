import "./App.css";
import Layout from "./components/layout/layout";
import { Button } from "./components/ui/button";
import { ThemeProvider } from "./lib/theme-provider";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <Layout>
        {/* {children} */}asdas
        <div className="flex min-h-svh flex-col items-center justify-center">
          <Button>Click meeeee222</Button>
        </div>
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
