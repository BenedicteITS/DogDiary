import type { FC } from "react";
import type { RegisterData } from "./RegisterCard";

const FormItem : FC<RegisterData> = ({name, date, isEating, normalPoop, temperature, freeText}) => {
    return (
        <div className="border-2 pb-3 m-2 p-2 pl-4 rounded-xl max-w-100">
                    <p>Navn: {name}</p>
                    <p>Dato: {date}</p>
                    <p>Spiser: {isEating}</p>
                    <p>Avføring: {normalPoop}</p>
                    <p>Temperatur: {temperature}</p>
                    <p>Annet: {freeText}</p>
        </div>
    )
}

export default FormItem