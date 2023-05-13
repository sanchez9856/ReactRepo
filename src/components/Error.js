import { useRouteError } from "react-router-dom";

const Error = () => {
  const errorObj = useRouteError();
  console.log(errorObj);
  return (
    <div>
        <h1>OOPS!</h1>
        <h2>{errorObj.status + " " + errorObj.statusText}</h2>
    </div>
  )
};

export default Error;
