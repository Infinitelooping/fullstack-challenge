import { useEffect, useState } from "react";
import axios from 'axios';
import { Deal } from "./types";
import formatCurrency from "../helper/currencyFormatter";

const getDealsByOrganization = async (organizationId: number) => {
    try {
        const response = await axios.get(`http://localhost:3000/api/accounts/deals/${organizationId}`);
        return response.data;
    } catch (error) {
        return [];
    }
};

const Header = () => {
    const [totalValue, setTotalValue] = useState<number>(0)
    const organizationId = 1;

    const calculateTotals = (deals:Deal[]) => {
        let total = 0
        deals.forEach((step) => {
            total += step.value
        })
        setTotalValue(total)
    };

    useEffect(() => {
        getDealsByOrganization(organizationId)
            .then((deals) => {
                calculateTotals(deals);
            })
            .catch((error) => {
                console.error('Failed to fetch deals:', error);
            });
    }, [])


    return (
        <nav className="mb-5">
            <div className="is-flex is-align-items-center">
                <h1 className="title is-1 mb-1 pr-3">Deals</h1>
                <span className="is-size-5">Total: {formatCurrency(totalValue)}</span>
            </div>
        </nav>
    );
}

export default Header;