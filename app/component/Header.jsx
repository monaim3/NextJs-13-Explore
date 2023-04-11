import Link from "next/link"


function Header() {
  return (
    <div>
   <div className="navbar bg-slate-600 text-white">
  <div className="flex-1">
    <Link href='/' className="btn btn-ghost normal-case text-xl">Next UI</Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><Link href='/'>Home</Link></li>
      <li><Link href='/about'>About</Link></li>
      <li><Link href='/code'>Code</Link></li>
    </ul>
  </div>
</div>
    </div>
  )
}

export default Header