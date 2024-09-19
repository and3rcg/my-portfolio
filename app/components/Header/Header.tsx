import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className="md:hidden lg:block mb-6 py-4">
        <div className="container mx-auto flex justify-between">
            <div>
                <Link href="/" className="text-4xl">Anderson Caminha</Link>
            </div>
            <div className="flex gap-8 items-center">
                <Link href={"https://www.linkedin.com/in/anderson-cg"} target="_blank">My LinkedIn</Link>
                <Link href={"https://github.com/and3rcg"} target="_blank">My GitHub</Link>
                <Link href={"/projects"}>Projects</Link>
                <Link href={"/#contact"} className="p-2 border-2 rounded-md border-primary-300">Contact me</Link>
            </div>
        </div>
    </header>
  )
}

export default Header
