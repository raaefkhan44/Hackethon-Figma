export default function Footer() {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto flex flex-col items-center justify-center text-center space-y-2 sm:flex-row sm:space-y-0 sm:justify-between">
        <p className="text-sm">&copy; 2024 Foodluck. All rights reserved.</p>
        <nav className="flex space-x-4">
          <a href="/terms" className="hover:text-yellow-500 text-sm">
            Terms of Service
          </a>
          <a href="/privacy" className="hover:text-yellow-500 text-sm">
            Privacy Policy
          </a>
          <a href="/contact" className="hover:text-yellow-500 text-sm">
            Contact Us
          </a>
        </nav>
      </div>
    </footer>
  );
}
