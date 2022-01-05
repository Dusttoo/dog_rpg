import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserKennel } from "../../store/kennel";
import { getdogs } from "../../store/dog";

const DogProfile = () => {
  const user = useSelector((state) => state.session.user);
  const dogs = useSelector((state) => state?.dogs);
  const breeds = useSelector((state => state.breeds))

  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(dogs[id])
  //age, birthday, breed, callname,description, gender, image, owner

  useEffect(() => {
    dispatch(getUserKennel(user?.id));
    dispatch(getdogs(user?.id));
  }, []);

  return (
    <>
      <h1>{dogs[id].name}</h1>
      <span>{dogs[id].age}</span>
      <span>{breeds[dogs[id].breed].name}</span>
    </>
  );
};

export default DogProfile;
