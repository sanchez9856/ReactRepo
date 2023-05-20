import useOnline from "../hooks/useOnline";

const Contact = () => {
  const isOnline = useOnline();
  return isOnline ? (
    <div>
      <h1>Contact Us</h1>
      <h3>Phone No: 2342423424</h3>
      <h3>Email : xyz@abc.com</h3>
    </div>
  ) : (
    <div>
      <h1>Oops! Something went wrong</h1>
      <p>Please check your internet connection</p>
    </div>
  );
};

export default Contact;
