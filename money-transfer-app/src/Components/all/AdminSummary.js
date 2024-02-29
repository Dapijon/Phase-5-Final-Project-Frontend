import React, { useState, useEffect } from 'react'
import AllSummary from './AllSumary.js'
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { getAllTransactionsSummaryStart, getAllTransactionsSummarySuccess, getAllTransactionsSummaryFailure } from "../../app/allTransactionsSummarySlice.js"
import { getAllTransactionsStart, getAllTransactionsSuccess, getAllTransactionsFailure } from '../../app/allTransactionsSlice'


function AdminSummary() {
    const currentUser = useSelector((state) => state.auth.user);
    const accessToken = useSelector((state) => state.auth.accessToken);
    const dispatch = useDispatch();
    const summary = useSelector((state) => state.allTransactionsSummary.summary);
    const transactions = useSelector((state) => state.allTransactions.allTransactions);
    // const [summary, setsummary]= useState({})

    console.log(currentUser)

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                dispatch(getAllTransactionsStart());
                const decodedToken = jwtDecode(accessToken);
                // const userId = decodedToken.userId;
                console.log('token', decodedToken);

                const response = await axios.get(`http://127.0.0.1:5000/summary/all-transactions`, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                });
                console.log('response', response.data)
                dispatch(getAllTransactionsSuccess(response.data));
            } catch (error) {
                dispatch(getAllTransactionsFailure(error.message));
            }
        };

        const fetchUserSummary = async () => {
            try {
                dispatch(getAllTransactionsSummaryStart());
                const response = await axios.get('http://127.0.0.1:5000/summary/transactions/summary', {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                });
                dispatch(getAllTransactionsSummarySuccess(response.data));
                // setsummary(response.data)

            } catch (error) {
                dispatch(getAllTransactionsSummaryFailure(error.message));
            }
        };

        if (accessToken) {
            fetchTransactions();
            fetchUserSummary();
        }
    }, [accessToken, dispatch]);

    console.log('all summary:', summary)
    console.log('all tran: ', transactions)


    return (
        <>
            <div className='admin-summary'>
                <div>AdminSummary</div>
                <AllSummary />
            </div>

        </>
    )
}

export default AdminSummary