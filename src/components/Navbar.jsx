import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { useTheme } from "../context/ThemeContext"

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  return (
    <nav className="bg-white dark:bg-gray-900 shadow px-6 py-4 flex items-center justify-between">
      <div className="text-xl font-bold text-blue-600 dark:text-blue-300">Tech-Swift</div>
      <div className="flex items-center space-x-4">
        <Link to="/">
          <Button variant="link">Home</Button>
        </Link>
        <Link to="/about">
          <Button variant="link">About</Button>
        </Link>
        <Button variant="secondary" size="sm" onClick={toggleTheme} aria-label="Toggle theme">
          {theme === 'dark' ? '🌙' : '☀️'}
        </Button>
      </div>
    </nav>
  )
}
