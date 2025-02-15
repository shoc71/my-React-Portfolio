function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-3">
      <div className="container-fluid p-3">
        {/* Flex container with space between */}
        <div className="d-flex justify-content-between align-items-center flex-wrap">
          {/* Brand & Description */}
          <div className="mb-3">
            <h5>YourBrand</h5>
          </div>

          {/* Social Media */}
          <div className="mb-3">
            <h5>Follow Me</h5>
            <div className="d-flex">
              <a href="https://facebook.com" className="text-light me-2">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://twitter.com" className="text-light me-2">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="https://instagram.com" className="text-light me-2">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://linkedin.com" className="text-light me-2">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://github.com" className="text-light me-2">
                <i className="bi bi-github"></i>
              </a>
              <a href="https://stack-overflow.com" className="text-light">
                <i className="bi bi-stack-overflow"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="text-center">
          <small>
            &copy; {new Date().getFullYear()} Mystery Orbs. All rights reserved.
          </small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
