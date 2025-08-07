import { Router } from "./lib/Router"
import { ThemeProvider } from "./lib/theme-provider"
import { BrowserRouter } from "react-router"

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
