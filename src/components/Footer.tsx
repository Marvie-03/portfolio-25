import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <>
    <footer className="py-8 bg-zinc-900 text-zinc-400 text-center">
    <div className="container mx-auto px-4">
      <p>© {new Date().getFullYear()} Marvellous Modupe. All rights reserved.</p>
      <div className="flex justify-center gap-4 mt-4">
        <a href="https://github.com/Marvie-03" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-blue-500 transition-colors">
          <Github size={20} />
        </a>
        <a href="https://www.linkedin.com/in/kayveengee" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-blue-500 transition-colors">
          <Linkedin size={20} />
        </a>
        <a href="https://x.com/kayveengee" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-blue-500 transition-colors">
          <Twitter size={20} />
        </a>
        <a href="mailto:kayveengee@gmail.com" className="text-zinc-400 hover:text-blue-500 transition-colors">
          <Mail size={20} />
        </a>
      </div>
    </div>
  </footer>
  </>
  )
}

export default Footer