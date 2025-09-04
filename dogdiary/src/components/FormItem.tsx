import type { FC } from "react";
import type { RegisterData } from "./RegisterCard";

interface FormItemProps extends RegisterData {
    onDelete?: () => void;
}

const FormItem : FC<FormItemProps> = ({name, date, isEating, normalPoop, temperature, freeText, onDelete}) => {
    return (
        <div className=" relative border-2 pb-3 m-2 p-2 pl-4 rounded-xl max-w-100">
                    <p>Navn: {name}</p>
                    <p>Dato: {date}</p>
                    <p>Spiser: {isEating ? "Ja" : "Nei"}</p>
                    <p>Avføring: {normalPoop}</p>
                    <p>Temperatur: {temperature}</p>
                    <p>Annet: {freeText}</p>
                    {onDelete && (
                        <button 
                        onClick={onDelete} 
                        className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1"
                        >Slett</button>
                    )}
        </div>
    )
}

export default FormItem