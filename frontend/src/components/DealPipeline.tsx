import { useEffect, useState } from "react";
import DealStep from "./DealStep";
import axios from 'axios';
import { Deal } from "./types";

const getDealsByOrganization = async (organizationId: number) => {
    try {
        const response = await axios.get(`http://localhost:3000/api/accounts/deals/${organizationId}`);
        return response.data;
    } catch (error) {
        return [];
    }
};

const DealPipeline = () => {
    const [deals, setDeals] = useState<Deal[]>([])
    const organizationId = 1;

    useEffect(() => {
        getDealsByOrganization(organizationId)
            .then((deals) => {
                setDeals(deals)
            })
            .catch((error) => {
                console.error('Failed to fetch deals:', error);
            });
        console.log(deals)
    }, [])

    const pipeline = [{ status: 'Build Proposal', data: deals.filter((deal) => deal.status === 'build' ) }, { status: 'Pitch Proposal', data: deals.filter((deal) => deal.status === 'pitch' ) }, { status: 'Negotiation', data: deals.filter((deal) => deal.status === 'negotiation' ) }]

    return (
        <div className="is-flex is-justify-content-center">
            {pipeline.map((step) =>
            <div key={step.status}>
                <DealStep status={step.status} data={step.data} />
            </div>
            )}
        </div>
    );
}

export default DealPipeline;