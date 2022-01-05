import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserKennel } from "../../store/kennel";
import { getdogs } from "../../store/dog";
import { Link } from "react-router-dom";

const KennelPage = () => {
    const user = useSelector(state => state.session.user)
    const kennel = useSelector(state => state?.kennel.kennel)
    const dogs = useSelector(state => state?.dogs)
    const dispatch = useDispatch()
    const {id} = useParams()

   useEffect(() => {
       dispatch(getUserKennel(user.id))
       dispatch(getdogs(user.id));
   }, [])
    

    return (
      <>
        <h1>{user.kennel_name}</h1>
        {kennel && (
          <span>
            Cleanliness: {kennel.cleanliness} Size: {kennel.size}
          </span>
        )}
        <table>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Breed</th>
          </tr>
          {dogs && (
            <>
              {Object.values(dogs).map((dog) => {
                return (
                  <>
                    <tr>
                      <td>
                        <Link to={`/dog/${dog.id}`}>{dog.name}</Link>
                      </td>
                      <td>{dog.gender}</td>
                      <td>{dog.age}</td>
                      <td></td>
                    </tr>
                  </>
                );
              })}
            </>
          )}
        </table>
      </>
    );
}

export default KennelPage;