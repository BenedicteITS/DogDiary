import { useEffect, useState } from "react"
import type { RegisterData } from "../components/RegisterCard"
import FormItem from "../components/FormItem"


const IllnessList = () => {
  const [entries, setEntries] = useState<RegisterData[]>([])


  //Get items from localStorage 
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("registeredIllness") || "[]")
    setEntries(stored)
  }, [])

  //Delete item from localStorage based on index

  const handleDelete = (indexToDelete: number) => {
    const updated = entries.filter((_, index) => index !== indexToDelete)
    setEntries(updated)
    localStorage.setItem("registeredIllness", JSON.stringify(updated))
  }

  return (
    <div>
      <h1 className="text-center m-1 p-4 text-2xl">Registrerte sykdommer</h1>
      {entries.length === 0 && <p>Ingen registreringer funnet.</p>}
        <section className="">
            <ul>
                {entries.map((entry, index) => (
                <li key={index}>
                       <div>
                        <FormItem {...entry} onDelete={() => handleDelete(index)}/>
                </div>
                </li>
                ))}
            </ul>
        </section>
    </div>
  )
}

export default IllnessList