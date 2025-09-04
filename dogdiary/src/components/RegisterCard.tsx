import { useState, type ChangeEvent } from "react"

export interface RegisterData {
    name: string
    date: string
    isEating?: boolean
    normalPoop?: string
    temperature?: string
    freeText?: string

}

const RegisterCard= () => {

    const [formData, setFormData] = useState<RegisterData>({
        name: "",
        date:"",
        isEating: false,
        normalPoop: "",
        temperature: "",
        freeText: ""
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const {name, value, type} = e.currentTarget
        const checked = type === "checkbox" ? (e.currentTarget as HTMLInputElement).checked : undefined   
    setFormData(prev => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }))
   
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        const existing = JSON.parse(localStorage.getItem("registeredIllness")|| "[]")
    
        const updated = [...existing, formData]

        localStorage.setItem("registeredIllness", JSON.stringify(updated))

        setFormData({
            name: "",
            date:"",
            isEating: false,
            normalPoop: "",
            temperature: "",
            freeText: ""
        })

        alert("Du har loggført sykdom")

    }

return(
    <div className="border-2 m-1 p-5 rounded-2xl bg-indigo-100">
        <form onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold">Registrer sykdom</h2>
            {/*Name-field*/}
            <p>Navn: </p>
            <input 
                type="text"
                name="name"
                placeholder="Dyrets navn"
                value={formData.name}
                onChange={handleChange}
                className="border p-2 rounded-xl bg-white"
                required
             />
             {/*Date-field*/}
             <p>Dato:</p>
             <input 
                type="date" 
                name="date"
                placeholder="Dato" 
                value={formData.date}
                onChange={handleChange}
                className="border p-2 rounded-xl bg-white" 
             />
             {/*IsEating-field*/}
             <p>Har dyret matlyst?</p>
                <input 
                type="checkbox" 
                name="isEating" 
                onChange={handleChange}
                className="border p-2 " 
             />
              {/*Poop-field*/}
             <p>Hvordan er avføringen:</p>
             <select 
                name="normalPoop"
                value={formData.normalPoop || ""}
                onChange={handleChange}
              >
                <option value="">Velg et alternativ</option>
                <option value="normal">Normal avføring</option>
                <option value="loose">Litt løs</option>
                <option value="verryLoose">Vanndig</option>
                <option value="blood">Blodig</option>
              </select>
              {/*Temperature-field*/}
            <p>Målt temperatur: </p>
                <input 
                type="text"
                name="temperature"
                placeholder="Temperatur"
                value={formData.temperature}
                onChange={handleChange}
                className="border p-2 rounded-xl bg-white"
                required
                />
              {/*Freetext-field*/}
            <p>Notater: </p>
                <textarea 
                name="freeText"
                placeholder="Notater"
                value={formData.freeText}
                onChange={handleChange}
                className="border p-2 rounded-xl size-60 w-100 bg-white"
                required
             />
        </form>
        <button type="button" onClick={handleSubmit}className="mt-4 p-2 bg-blue-500 text-white rounded-xl"> Lagre </button>
    </div>
)
}

export default RegisterCard