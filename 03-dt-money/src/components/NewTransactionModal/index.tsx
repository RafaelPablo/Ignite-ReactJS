import * as Dialog from "@radix-ui/react-dialog";
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from "./styles";
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import * as z from 'zod';
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../lib/axios";

const newTransactionFormSchema = z.object({
    description: z.string(),
    price: z.number(),
    category: z.string(),
    type: z.enum(['income', 'outcome']),
})

type NewTransactionsFormInputs = z.infer<typeof newTransactionFormSchema>;

export function NewTransactionModal() {
    const {
        control,
        register,
        handleSubmit,
        formState: { isSubmitting },
        reset
    } = useForm<NewTransactionsFormInputs>({
        resolver: zodResolver(newTransactionFormSchema),
        defaultValues: {
            type: 'income'
        }
    })

    async function handleCreateNewTransaction(data: NewTransactionsFormInputs) {
        const { description, price, category, type } = data;

        await api.post('transactions', {
            description,
            price,
            category,
            type,
            createdAt: new Date(),
        })

        reset();
    }

    return (
        <Dialog.Portal>
            <Overlay />
            
            <Content>
                <Dialog.Title>New transaction</Dialog.Title>

                <CloseButton>
                    <X size={24}/>
                </CloseButton>

                <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
                    <input 
                        type="text" 
                        placeholder="Description"
                        required
                        {...register('description')}
                    />
                    <input 
                        type="number" 
                        placeholder="Price"
                        required
                        {...register('price', {valueAsNumber: true})}
                    />
                    <input 
                        type="text" 
                        placeholder="Category"
                        required
                        {...register('category')}
                    />

                <Controller
                    control={control}
                    name="type"
                    render={({ field }) => {
                        return (
                            <TransactionType 
                                onValueChange={field.onChange} 
                                value={field.value}
                            >
                                <TransactionTypeButton variant="income" value="income">
                                    <ArrowCircleUp size={24} />
                                    Income
                                </TransactionTypeButton>
            
                                <TransactionTypeButton variant="outcome" value="outcome">
                                    <ArrowCircleDown size={24} />
                                    Outcome
                                </TransactionTypeButton>
                            </TransactionType>
                        )
                    }}   
                />
                    <button type="submit" disabled={isSubmitting}>
                        Register
                    </button>
                </form>

            </Content>
        </Dialog.Portal>
    )
}