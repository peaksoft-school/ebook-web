import { useEffect, useState } from 'react'
import { sendRequest } from '../../../utils/helpers'
import classes from './Users.module.css'
import UserList from './UserList/UserList'

const Users = () => {
   const [users, setUsers] = useState([])

   const getAllUsers = async () => {
      const url = { url: 'api/clients/getAll' }
      const response = await sendRequest(url)
      await setUsers(response)
   }

   const sendRequestDeleteClient = async (id) => {
      const userUrl = { url: `api/clients/delete/${id}`, method: 'DELETE' }
      await sendRequest(userUrl)
   }

   useEffect(() => {
      getAllUsers()
   }, [])

   return (
      <div className={classes.box}>
         <div className={classes.containerTitle}>
            <p>
               <b>№</b>
            </p>
            <p className={classes.mediumBox}>
               <b>Ф.И.</b>
            </p>
            <p className={classes.mediumBox}>
               <b>Почта</b>
            </p>
         </div>
         <hr className={classes.line} />
         <div className={classes.containerList}>
            <UserList
               sendRequestDeleteClient={sendRequestDeleteClient}
               userlist={users}
            />
         </div>
      </div>
   )
}

export default Users
