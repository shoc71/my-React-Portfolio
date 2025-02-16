import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light text-dark">
      <h1 className="display-1 fw-bold">404</h1>
      <p className="lead mb-4">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link to="/" className="btn btn-info btn-lg">
        Go back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
