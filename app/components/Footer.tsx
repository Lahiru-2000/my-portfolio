

const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center px-6">
          {/* Footer Text */}
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Lahiru Dev. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  