import { getFirestore, collection, setDoc, addDoc } from "firebase/firestore"
import { useEffect } from "react"

const WriteToCloudFirestore = () => {

    const sendData = async()=>{
        try {
            const docRef = await addDoc(collection(getFirestore(), "myCollection"),
            {
                    number : 0,
                    string : "Ben",
                    boolean : true,
                    array : [1,2,3],
                    null : null,
                }
            )
        } catch (error) {
            console.log(error)
            alert(error)
        }
    }

    return (
        <button onClick={sendData}>send data</button>
    )
}

export default WriteToCloudFirestore