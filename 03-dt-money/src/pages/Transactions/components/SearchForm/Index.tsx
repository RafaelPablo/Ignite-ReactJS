import { SearchFormContainer } from "./styles";
import { MagnifyingGlass } from "phosphor-react";
import { useForm } from "react-hook-form";

export function SearchForm() {
    const { register, handleSubmit } = useForm();

    return (
        <SearchFormContainer>
            <input 
                type="text" 
                placeholder="Search for transactions"
                {...register('query')}
            />

            <button type="submit">
                <MagnifyingGlass size={20} />
                Buscar
            </button>
        </SearchFormContainer>
    )
}