export function Header() {
  return (
    <header>
      <h1 className="name">Jayeon Hwang</h1>
      <p>Software Developer</p>
      <p>HTML | CSS | Javascript | Ruby on Rails </p>

      <div className="icons">
        <a href="https://www.linkedin.com/in/jay512" target='_blank' className="linkedin">
          <img src="../logos/icon-linkedin.png" alt="inkedin" className="icon" />
        </a>
        <a href="https://github.com/jayeonhwang" target='_blank' className="github">
          <img src="../logos/icons-github.png" alt="github" className="icon" />
        </a>
        <a href="mailto:jayeon512@gmail.com" target='_blank' className="email">
          <img src="../logos/icons-email.png" alt="email" className="icon" />
        </a>
      </div>

      <nav>
        <a href="#">Projects</a> | <a href="#">About</a> | <a href="#">Contact</a>
      </nav>
    </header>
  )
}  