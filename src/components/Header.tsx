export default function Header() {
  return (
    <header>
      <div className="flex items-center justify-between my-14 mx-40">
        <img src="/Logo.svg" alt="The logo of the company" />
        <nav>
          <ul className="flex items-center gap-10 pointer">
            <li><a href="/" className="hover:underline">About</a></li>
            <li><a href="/" className="hover:underline">Skills</a></li>
            <li><a href="/" className="hover:underline">Portfolio</a></li>
            <li><a href="/" className="hover:underline">Testimonial</a></li>
          </ul>
        </nav>
        <button type="button" className="outline outline-4 rounded py-4 px-6 outline-forestGreen pointer">Download CV</button>
      </div>
    </header>
  )
}
