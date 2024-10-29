//import { useState } from 'react';
//import { backend } from '../../../declarations/backend';
import { useEffect, useState } from 'react';
//import { backend } from '../../../declarations/backend';
import { goldtoken } from '../../../declarations/goldtoken';
export default function GoldToken() {
    const [tokenSymbol, setTokenSymbol] = useState<string | undefined>('');
    const [tokenName, setTokenName] = useState<string | undefined>('');
    const [totalSupply, setTotalSupply] = useState<number | undefined>();
    const [loading, setLoading] = useState(false);

    const fetchTokenSymbol = async () => {
        try {
            setLoading(true);
            const symbol = await goldtoken.icrc1_symbol();
            setTokenSymbol(symbol); // Convert BigInt to number
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };
    const fetchTokenName = async () => {
        try {
            setLoading(true);
            const name = await goldtoken.icrc1_name();
            setTokenName(name); // Convert BigInt to number
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };
    const fetchTotalSupply = async () => {
        try {
            setLoading(true);
            const totalSupply = await goldtoken.icrc1_total_supply();
            setTotalSupply(+totalSupply.toString()); // Convert BigInt to number
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    // Fetch the count on page load
    useEffect(() => {
        fetchTokenSymbol();
        fetchTokenName();
        fetchTotalSupply();
    }, []);
    return (
        <div className="h-screen   rounded-lg shadow-md text-md shadow-slate-500 bg-zinc-600">
            {loading && (
                <div className="flex flex-col items-center justify-center w-full h-64">
                    {/* <FontAwesomeIcon className="w-4 h-4" icon={faCircleNotch} spin /> */}
                    <h4>Loading...</h4>
                </div>
            )}




            <div className="ml-12 mt-6 items-center">
                <h4 >Symbol: {tokenSymbol}</h4>
                <h4 >Name: {tokenName}</h4>
                <h4 >Supply: {totalSupply}</h4>
            </div>


        </div>
    )

}