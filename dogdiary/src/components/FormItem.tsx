import type { FC } from "react";
import type { RegisterData } from "./RegisterCard";

interface FormItemProps extends RegisterData {
    onDelete?: () => void;
}

const FormItem = ({name, date, isEating, normalPoop, temperature, freeText, onDelete}: FormItemProps) => {
    return (
        <div className="flex justify-center ">
            <div className=" border-2 pb-3 m-2 p-2 pl-4 rounded-xl max-w-sm w-full shadow-lg bg-white">
                        <p>Navn: {name}</p>
                        <p>Dato: {date}</p>
                        <p>Spiser: {isEating ? "Ja" : "Nei"}</p>
                        <p>Avføring: {normalPoop}</p>
                        <p>Temperatur: {temperature}</p>
                        <p>Annet: {freeText}</p>
                        <div className="relative">
                            {onDelete && (
                                <button 
                                onClick={onDelete} 
                                className=" bottom-1 left-1 bg-stone-400 hover:bg-red-200 text-white px-1 py-1 rounded-md border-1 border-stone-500 transition-colors duration-100"
                                >Slett</button>
                            )}
                        </div>
            </div>
        </div>
    )
}

export default FormItem