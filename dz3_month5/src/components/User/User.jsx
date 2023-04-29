import { useSelector } from "react-redux";
const User = () => {
  const { name, age, gender } = useSelector((state) => state.user);
  return (
    <>
      <div className="inner">
        <h2>Name: {name}</h2>
        <p>Age: {age}</p>
        <p>Gender: {gender}</p>
      </div>
    </>
  );
};

export default User;
