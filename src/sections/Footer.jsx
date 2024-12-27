const Footer = () => {
    return (
      <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
        <div className="text-white-500 flex gap-2">
          <p>Terms & Conditions</p>
          <p>|</p>
          <p>Privacy Policy</p>
        </div>
  
        <div className="flex gap-3">
          <div className="social-icon">
            <a href="https://github.com/Sonudhukia143" ><img src="/assets/github.svg" alt="github" className="w-full h-full" ></img></a>
          </div>
          <div className="social-icon">
            <a href="https://www.linkedin.com/in/sonu-dhukia-web770"><img src="/assets/linkedin.svg" alt="twitter" className="w-full h-full" /></a>
          </div>
        </div>
  
        <p className="text-white-500">© 2024 Sonu WebDev. All rights reserved.</p>
      </footer>
    );
  };
  
  export default Footer;