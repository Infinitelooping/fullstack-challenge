import { Deal } from "./types"
import formatCurrency from "../helper/currencyFormatter";

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

        <div className="box m-2">
            <div className="is-flex is-align-items-center is-justify-content-space-between mb-3">
                <h1 className="title is-4 mb-1">{status}</h1>
                <span className="is-size-7">{formatCurrency(addValues())}</span>
            </div>
            <ul>
                {data.map((step) =>
                    <li className="box m-1 is-flex is-justify-content-space-between" key={step.name}>
                        <span className="mr-2">{step.name}</span>
                        <span>{formatCurrency(step.value)}</span>
                    </li>
                )}
            </ul>
        </div>
    );
}

export default DealStep;