import { useState, type ChangeEvent } from "react"

interface RegisterData {
    name: string
    date: string
    symptoms?: string
    isEating?: boolean
    normalPoop?: boolean
    temperature?: string
    freeText?: string

}

const RegisterCard= () => {

    const [formData, setFormData] = useState<RegisterData>({
        name: "",
        date:"",
        symptoms:"",
        isEating: false,
        normalPoop: false,
        temperature: "",
        freeText: ""
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value, type, checked} = e.target
   
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
        symptoms:"",
        isEating: false,
        normalPoop: false,
        temperature: "",
        freeText: ""
        })

        alert("Du har loggført sykdom")

    }

return(
    <div>
        <form onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold">Registrer sykdom</h2>
            {/*Name-field*/}
            <input 
            type="text"
            name="name"
            placeholder="Dyrets navn"
            value={formData.name}
            onChange={handleChange}
            className="border p-2"
            required
             />
        </form>
    </div>
)
}

export default RegisterCard