const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-5 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} SmartLib. All rights reserved.</p>
        <p className="text-sm mt-2 md:mt-0">Made by Saurabh Kumar</p>
      </div>
    </footer>
  );
};

export default Footer;
