import React, { useState, useEffect } from 'react'
import AllSummary from './AllSumary.js'
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { getAllTransactionsSummaryStart, getAllTransactionsSummarySuccess, getAllTransactionsSummaryFailure } from "../../app/allTransactionsSummarySlice.js"
import { getAllTransactionsStart, getAllTransactionsSuccess, getAllTransactionsFailure } from '../../app/allTransactionsSlice'
import AllTransactions from './AllTransactions.js';
import './AdminSummary.css'
import { useNavigate } from "react-router-dom";


function AdminSummary() {
    // const currentUser = useSelector((state) => state.auth.user);
    // const accessToken = useSelector((state) => state.auth.accessToken);
    // const dispatch = useDispatch();
    // const summary = useSelector((state) => state.allTransactionsSummary.summary);
    // const transactions = useSelector((state) => state.allTransactions.allTransactions);
    // // const [summary, setsummary]= useState({})

    // console.log(currentUser)

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             if (accessToken) {
    //                 dispatch(getAllTransactionsStart());
    //                 const decodedToken = jwtDecode(accessToken);

    //                 // Fetch transactions
    //                 const transactionsResponse = await axios.get(`http://127.0.0.1:5000/summary/all-transactions`, {
    //                     headers: {
    //                         Authorization: `Bearer ${accessToken}`,
    //                     },
    //                 });
    //                 dispatch(getAllTransactionsSuccess(transactionsResponse.data));

    //                 // Fetch user summary
    //                 dispatch(getAllTransactionsSummaryStart());
    //                 const summaryResponse = await axios.get('http://127.0.0.1:5000/summary/transactions/summary', {
    //                     headers: {
    //                         Authorization: `Bearer ${accessToken}`,
    //                     },
    //                 });
    //                 dispatch(getAllTransactionsSummarySuccess(summaryResponse.data));
    //             }
    //         } catch (error) {
    //             dispatch(getAllTransactionsFailure(error.message));
    //             dispatch(getAllTransactionsSummaryFailure(error.message));
    //         }
    //     };

    //     fetchData();
    // }, [accessToken, dispatch]);

    const [summary, setSummary] = useState({});
    const [transactions, setTransactions] = useState([]);
    const [summaryLoading, setSummaryLoading] = useState(true); 
    const [transactionsLoading, setTransactionsLoading] = useState(true);

    const accessToken = useSelector((state) => state.auth.accessToken);
    const decodedToken = accessToken ? jwtDecode(accessToken) : null;
    const navigate = useNavigate();
    
  
        

    useEffect(() => {
        const fetchSummary = async () => {
            try {
                if (accessToken) {
                    const summaryResponse = await axios.get('http://127.0.0.1:5000/summary/transactions/summary', {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                        },
                    });
                    setSummary(summaryResponse.data);
                    setSummaryLoading(false); // Summary fetching completed, set loading to false
                }
            } catch (error) {
                console.error('Error fetching summary:', error.message);
                setSummaryLoading(false); // Error occurred, set loading to false
            }
        };

        const fetchTransactions = async () => {
            try {
                if (accessToken) {
                    const transactionsResponse = await axios.get(`http://127.0.0.1:5000/summary/all-transactions`, {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                        },
                    });
                    setTransactions(transactionsResponse.data);
                    setTransactionsLoading(false); // Transactions fetching completed, set loading to false
                }
            } catch (error) {
                console.error('Error fetching transactions:', error.message);
                setTransactionsLoading(false); // Error occurred, set loading to false
            }
        };

        fetchSummary();
        fetchTransactions();
    }, [accessToken]);

    if (decodedToken && !decodedToken.is_admin) {
        return navigate("/unauthorized" );
    }

    console.log('all summary:', summary);
    console.log('all transactions: ', transactions);

    return (
        <>
            <div className='admin-summary'>
                <div className='summary'>
                    {summaryLoading ? (
                        <p>Loading summary...</p>
                    ) : (
                        <AllSummary summary={summary} />
                    )}
                </div>
                <div className='transactions-table'>
                    {transactionsLoading ? (
                        <p>Loading transactions...</p>
                    ) : (
                        <AllTransactions transactions={transactions} />
                    )}
                </div>
            </div>
        </>
    );
}


export default AdminSummary