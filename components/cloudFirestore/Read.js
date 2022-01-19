import { getFirestore, collection, getDocs } from "firebase/firestore"

const ReadToCloudFirestore = ()=>{

    const readData = async ()=>{
        const query = await getDocs(collection(getFirestore(), "myCollection"))
        query.forEach(doc=>{
            console.log(doc.data())
        })
    }

    return (
        <button onClick={readData}>read data</button>
    )
}

export default ReadToCloudFirestore