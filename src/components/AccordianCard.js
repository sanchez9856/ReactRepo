import { useContext } from "react";
import UserContext from "../utils/UserContext";

const AccordianCard = ({ isVisible, showAccordian, accName, children }) => {
  const userInfo = useContext(UserContext);
  return (
    <div className="p-2 m-2 border-stone-500 border-2">
      {isVisible ? <p>{children}</p> : null}
      {/* <p>{userInfo.username}</p>
      <br />
      <p>{userInfo.email}</p>
      <br />
      <p>{userInfo.phoneNo}</p> */}
      <button
        type="submit"
        className="bg-red-400 border-2 border-stone-600 m-2"
        onClick={() => showAccordian(accName)}
      >
        Show
      </button>
    </div>
  );
};

export default AccordianCard;
