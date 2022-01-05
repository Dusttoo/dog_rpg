import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getBreedGroups } from "../../store/group";
import { getUserKennel } from "../../store/kennel";


const KennelPage = () => {
    const user = useSelector(state => state.session.user)
    const kennel = useSelector(state => state?.kennel.kennel)
    const dispatch = useDispatch()
    const {id} = useParams()
    console.log(kennel)

   useEffect(() => {
       dispatch(getUserKennel(id))
       dispatch(getBreedGroups())
   }, [])
    

    return (
      <>
        <h1>{user.kennel_name}</h1>
        {kennel && (
          <span>
            Cleanliness: {kennel.cleanliness} Size: {kennel.size}
          </span>
        )}
      </>
    );
}

export default KennelPage;