import useOnline from "../hooks/useOnline";

const AboutUs = () => {
  const isOnline = useOnline();

  return isOnline ? (
    <div className="aboutus-container">
      <h1>About Us</h1>
      <h3>Hi this is the about us page of food delivering app demo website</h3>
    </div>
  ) : (
    <div>
      <h1>Oops! Something went wrong</h1>
      <p>Please check your internet connection</p>
    </div>
  );
};

export default AboutUs;
