import React, { useEffect, useState, useContext } from "react";
import MainLayout from "../components/Layouts/MainLayout";
import CardExpense from "../components/Fragments/CardExpense";
import { expenseService } from "../services/dataService";
import { ThemeContext } from "../context/themeContext";
import LogoutBackdrop from "../components/Elements/LogoutBackdrop";

const ExpensePage = () => {
  const { theme } = useContext(ThemeContext);

  const [loading, setLoading] = useState(true);
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        setLoading(true);
        const data = await expenseService();
        console.log("Expenses API:", data);
        setExpenses(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error(err);
        setError(err?.msg || "Gagal memuat data expenses");
      } finally {
        setLoading(false);
      }
    };

    fetchExpenses();
  }, []);

  return (
    <MainLayout>
      <LogoutBackdrop
        open={loading}
        text="Loading Data"
        color={theme?.color || "#299D91"}
      />

      <div className="px-8 py-6">
        <h2 className="text-[18px] font-semibold text-gray-600 mb-4">
          Expenses Comparison
        </h2>

        {error ? (
          <p className="text-red-500 text-sm">{error}</p>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {expenses.map((exp, index) => (
              <CardExpense
                key={index}
                category={exp.category}
                amount={exp.amount}
                percentage={exp.percentage}
                trend={exp.trend}
                detail={exp.detail}
              />
            ))}
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default ExpensePage;
