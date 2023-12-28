import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Projects
      </Link>
      <ul>
        <CustomLink to="/Youtube">Youtube</CustomLink>
        <CustomLink to="/Hangman">Hangman</CustomLink>
        <CustomLink to="/Hungrypets">Hungry pets</CustomLink>
        <CustomLink to="/Milkman">Milkman</CustomLink>
        <CustomLink to="/Cloner">Cloner</CustomLink>
        <CustomLink to="/Diary">Diary</CustomLink>
        <CustomLink to="/Spammer">Spammer</CustomLink>
        <CustomLink to="/Reddit">Reddit</CustomLink>
        <CustomLink to="/Register">Register</CustomLink>
        <CustomLink to="/Login">Login</CustomLink>
        <CustomLink to="/Youtube">Youtube</CustomLink>
        <CustomLink to="/Hangman">Hangman</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
