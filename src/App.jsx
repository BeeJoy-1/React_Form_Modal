import { useEffect, useState } from "react"
import { getDatabase, ref, onValue, set, push } from "firebase/database";
import Modal from "./Modal/Modal";

function App() {
 
  const db = getDatabase();

  let [name,setName] = useState()
  let [email,setEmail] = useState()
  let [roll,setRoll] = useState()
  let [box,setBox] = useState()
  let [boy,setBoy] = useState()
  let [girl,setGirl] = useState()
  let [show,setShow] = useState(false)

  // useEffect(() => {
  //   const formRef = ref(db, "Form/");
  //   onValue(formRef, (snapshot) => {
  //     const box = snapshot.val();
  //   })
  // })

  let handleSubmit = () => {
    set(push(ref(db, "Form")),{
      user: name,
      mail: email,
      ID : roll,
      School: box,
    })

    setName("")
    setEmail("")
    setRoll("")
    setBoy("")
    setGirl("")
    setBox("")
    setShow(true)
  }

  return (
    <>
      <Modal mod = {show} hide = {setShow} >

      </Modal>

      <div className="py-[50px]">
        <div className="w-[1170px] mx-auto">
          <div className="drop-shadow-md shadow-lg w-[600px] mx-auto mt-[150px]">
            <h1 className="text-center text-[40px] italic ">Form Practice</h1>
            <div className="pb-[40px] pt-[20px] px-[50px] flex flex-col">
              <input onChange={(e) => setName(e.target.value)} value={name} className="mb-[10px] p-[8px] w-[500px] px-[10px] outline-blue-300 text-[#959595]" type="text" placeholder="Name" />
              <input onChange={(e) => setEmail(e.target.value)} value={email} className="mb-[10px] p-[8px] w-[500px] px-[10px] outline-blue-300 text-[#959595]" type="email" placeholder="Email" />
              <input onChange={(e) => setRoll(e.target.value)} value={roll} className="mb-[10px] p-[8px] w-[500px] px-[10px] outline-blue-300 text-[#959595]" type="number" placeholder="Roll" />
              <select onChange={(e) => setBox(e.target.value)} value={box} className=" mb-[8px] w-[500px] h-[40px] px-[5px] outline-blue-300 text-[#959595]" name="" id="">
                <option value="">Choose Your School...</option>
                <option value="MGSC">MGSC</option>
                <option value="SCPSC">SCPSC</option>
                <option value="JU">JU</option>
                <option value="BKSP">BKSP</option>
                <option value="Savar Model">Savar Model</option>
                <option value="none">Others....</option>
              </select>
              <div className="flex flex-col justify-center gap-y-[5px] mx-[10px] mt-[20px]">
                <h2 className="text-[20px]">Your Gender -</h2>
                <div className="flex gap-x-[5px]">
                  <input onChange={(e) => setBoy(e.target.value)} value={boy} type="radio" name="radio" id="" checked/>
                  <label className="text-[15px]" htmlFor="Boy">Boy</label>
                </div>
                <div className="flex gap-x-[5px]">
                  <input onChange={(e) => setGirl(e.target.value)} value={girl} type="radio" name="radio" id="" />
                  <label className="text-[15px]" htmlFor="Girl">Girl</label>
                </div>
              </div>
              <div className="flex justify-center">
                <button onClick={handleSubmit} className="bg-blue-500 mt-[30px] py-[8px] px-[25px] border-npne rounded-[3px] text-white">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
