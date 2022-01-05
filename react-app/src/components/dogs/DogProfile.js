import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserKennel } from "../../store/kennel";
import { getdogs } from "../../store/dog";

const DogProfile = () => {
  const user = useSelector((state) => state.session.user);
  const dogs = useSelector((state) => state?.dogs);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getUserKennel(user?.id));
    dispatch(getdogs(user?.id));
  }, []);

  return (
    <>
      <h1>Dog Page</h1>
    </>
  );
};

export default DogProfile;
