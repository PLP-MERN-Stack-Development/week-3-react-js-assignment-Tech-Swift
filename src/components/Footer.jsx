function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center mt-8">
      <div>
        &copy; {new Date().getFullYear()} My Task Manager. All rights reserved.
      </div>
      <div className="mt-2 space-x-4">
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
          GitHub
        </a>
        <a href="/about" className="hover:underline">About</a>
      </div>
    </footer>
  );
}

export default Footer;