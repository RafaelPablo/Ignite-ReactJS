import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm/Index";
import { PricehHighLight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {
    return (
        <div>
            <Header />
            <Summary />

            <TransactionsContainer>
                <SearchForm />

                <TransactionsTable>
                    <tbody>
                        <tr>
                            <td width="50%">Website development</td>
                            <td>
                            <PricehHighLight variant="income">
                            $ 500,00
                            </PricehHighLight>
                            </td>
                            <td>Sell</td>
                            <td>04/13/2022</td>
                        </tr>
                        <tr>
                            <td width="50%">Website development</td>
                            <td>
                            <PricehHighLight variant="outcome">
                            -$ 500,00
                            </PricehHighLight>
                            </td>
                            <td>Cancelation</td>
                            <td>04/26/2023</td>
                        </tr>
                        <tr>
                            <td width="50%">Hamburguer</td>
                            <td>
                            <PricehHighLight variant="outcome">
                            -$ 50,00
                            </PricehHighLight>
                            </td>
                            <td>Night out</td>
                            <td>01/13/2023</td>
                        </tr>
                        <tr>
                            <td width="50%">Grocery</td>
                            <td>
                            <PricehHighLight variant="outcome">
                            -$ 800,00
                            </PricehHighLight>
                            </td>
                            <td>Food</td>
                            <td>04/13/2023</td>
                        </tr>
                        <tr>
                            <td width="50%">Salary</td>
                            <td>
                            <PricehHighLight variant="income">
                            $ 1000,00
                            </PricehHighLight>
                            </td>
                            <td>Fix</td>
                            <td>06/13/2023</td>
                        </tr>
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
}