import { useContext } from "react";
import { ExpenseTrackerContext } from "./context/context";
import { incomeCategories, expenseCategories, resetCategories } from "./constants/constants";

const useTransactions = (title) => {
    resetCategories();
    const { transactions } = useContext(ExpenseTrackerContext);
    const transactionsPerType = transactions.filter(t => t.type === title);
    let total = transactionsPerType.reduce((acc, currval) => acc += currval.amount, 0);
    const categories = title === "Income" ? incomeCategories : expenseCategories;

    transactionsPerType.forEach(element => {
        const category = categories.find(c => c.type === element.category);
        if(category) category.amount += element.amount;
    });

    const filteredCategories = categories.filter(c => c.amount> 0);

    const chartData = {
        datasets: [{
            data: filteredCategories.map(c => c.amount),
            backgroundColor: filteredCategories.map(c => c.color)
        }],
        labels: filteredCategories.map(c => c.type)
    };

    return {
        total,
        chartData
    }
}

export default useTransactions;