// This file contains all the data to be shared in our Recoil scope
import { atom } from "recoil"

export const userNameAtom = atom({
    // Specifies a unique key for out atom name
    key: 'atomUserName',
    // Gives the atom a default value
    default: ""
})


// The RedStripe component will write to the username atom, and the BlueStripe component reads from the username atom.