//import { useState } from 'react';
//import { backend } from '../../../declarations/backend';
import {  useEffect, useState } from 'react';
import { backend } from '../../../declarations/backend';
export default function Rate() {
    const [treasuryRate, setTreasuryRate] = useState<string | undefined>();
    const [goldRate, setGoldRate] = useState<string | undefined>();
    const [btcRate, setBTCRate] = useState<string | undefined>();
    const [loading, setLoading] = useState(false);

    const fetchTreasyRate = async () => {
        try {
            //setLoading(true);
            const treasuryRateData = await backend.get_us_treasury_rate();

            const treasuryRate_Data = JSON.parse(treasuryRateData);  

            console.log(treasuryRate_Data.data[0].avg_interest_rate_amt);
            setTreasuryRate(treasuryRate_Data.data[0].avg_interest_rate_amt); 

        } catch (err) {
            console.error(err);
        }  finally {
            setLoading(false);
        } 
    };
    const fetchGoldRate = async () => {
        try {
            //setLoading(true);
            const goldRateData = await backend.get_us_gold_rate();

            const goldRate_Data = JSON.parse(goldRateData);

            console.log(goldRate_Data.price);
            setGoldRate(goldRate_Data.price);

        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const fetchBTCRate = async () => {
        try {
            //setLoading(true);
            const btcRateData = await backend.get_us_btc_rate();

            const btcRate_Data = JSON.parse(btcRateData);

            console.log(btcRate_Data.price);
            setBTCRate(btcRate_Data.price);

        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };
     useEffect(() => {
        fetchTreasyRate();
        fetchGoldRate();
        fetchBTCRate();
    }, );
 
    return(
        <div className="h-screen   rounded-lg shadow-md text-md shadow-slate-500 bg-zinc-600">
            <div className="ml-12 mt-6 items-center">
                    {loading ? (
                        <div className="features-content">
                            <h4 className="feature-title">Getting Treasury Rate</h4>

                        </div>  
                    ) : (
                            <div className="features-content">
                            <h4 className="feature-title">Rate in %: {treasuryRate}</h4>

                            </div> 
                    )} 

                </div>
            <div className="ml-12 mt-6 items-center">
                {loading ? (
                    <div className="features-content">
                        <h4 className="feature-title">Getting Gold Rate</h4>

                    </div>
                ) : (
                    <div className="features-content">
                            <h4 className="feature-title">Rate in USD: {goldRate}</h4>

                    </div>
                )}

            </div>
            <div className="ml-12 mt-6 items-center">
                {loading ? (
                    <div className="features-content">
                        <h4 className="feature-title">Getting BTC Rate</h4>

                    </div>
                ) : (
                    <div className="features-content">
                            <h4 className="feature-title">Rate in USD: {btcRate}</h4>
                    </div>
                )}

            </div>
        </div>
    )

}