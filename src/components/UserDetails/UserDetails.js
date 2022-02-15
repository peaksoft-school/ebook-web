import { useState } from 'react'
import { Tabs, Tab, TabPanel } from '../UI/tabs/Tabs'

import UserProfile from '../UserProfile/UserProfile'
import BreadCrumbs from '../UI/BreadCrumbs/BreadCrumbs'
import HistoryOperation from '../HistoryOperation/HistoryOperation'
import classes from './UserDetails.module.css'

const UserDetails = () => {
   const [activeTab, setActiveTab] = useState('Профиль')

   const handleChange = (value) => {
      setActiveTab(value)
   }

   return (
      <div className={classes.userDetailsContainerForContent}>
         <BreadCrumbs />
         <Tabs>
            <Tab
               changeTab={handleChange}
               isActive={activeTab}
               label="Профиль"
            />
            <Tab changeTab={handleChange} isActive={activeTab} label="Книги" />
         </Tabs>

         <TabPanel check="Профиль" value={activeTab}>
            <UserProfile />
         </TabPanel>
         <TabPanel check="Книги" value={activeTab}>
            <HistoryOperation />
         </TabPanel>
      </div>
   )
}

export default UserDetails
