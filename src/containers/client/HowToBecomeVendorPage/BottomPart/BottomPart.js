import { useState } from 'react'
import classes from './BottomPart.module.css'
import StartSection from './StartSection/StartSection'
import Conditions from './Conditions/Conditions'
import Button from '../../../../components/UI/Button/Button'
import VendorRegistration from '../../../../components/auth/registration/vendorRegistrationForm/VendorRegistrationForm'

const BottomPart = () => {
   const [vendor, setVendor] = useState(false)
   const HowToBecomeVendor = () => {
      setVendor((vendor) => !vendor)
   }
   return (
      <div className={classes.bottomPartContainer}>
         <StartSection />
         <Conditions />
         <div className={classes.containerForButton}>
            <Button
               className={classes.button}
               variant="variantBecomeToSeller"
               onClick={HowToBecomeVendor}
            >
               Стать продавцом
            </Button>
         </div>
         {vendor && <VendorRegistration onClose={HowToBecomeVendor} />}
      </div>
   )
}

export default BottomPart
