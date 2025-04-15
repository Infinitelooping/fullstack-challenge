import { Deal } from "./types"

type DealStepProps = { status: string, data: Deal[] }

const DealStep = ({ status, data }: DealStepProps) => {

    const addValues = () => {
        let totalValue = 0
        data.forEach((step) => {
            totalValue += step.value
        })
        return totalValue
    }

    return (

        <div>
            <div>
                <h1>{status}</h1>
                <span>{addValues()}</span>
            </div>
            <ul>
                {data.map((step) =>
                    <li key={step.name}>
                        <span>{step.name}</span>
                        <span>{step.value}</span>
                    </li>
                )}
            </ul>
        </div>
    );
}

export default DealStep;