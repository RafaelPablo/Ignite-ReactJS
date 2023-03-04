import { SummaryCard, SummaryContainer } from "./styles";
import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from 'phosphor-react';

export function Summary() {
    return (
        <SummaryContainer>
            <SummaryCard>
                <header>
                    <span>Income</span>
                    <ArrowCircleUp size={32} color="#00b37e"/>
                </header>

                <strong>C$ 1.200,00</strong>
            </SummaryCard>

            <SummaryCard>
                <header>
                    <span>Outcome</span>
                    <ArrowCircleDown size={32} color="#f75a68"/>
                </header>

                <strong>C$ 1.200,00</strong>
            </SummaryCard>

            <SummaryCard variant="green">
                <header>
                    <span>Total</span>
                    <CurrencyDollar size={32} color="#fff"/>
                </header>

                <strong>C$ 1.200,00</strong>
            </SummaryCard>

        </SummaryContainer>
    );
}