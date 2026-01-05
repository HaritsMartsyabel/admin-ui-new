import React, { useContext, useEffect, useState } from 'react';
import MainLayout from '../components/Layouts/MainLayout';
import CardBalance from '../components/Fragments/CardBalance';
import CardGoal from '../components/Fragments/CardGoal';
import CardUpcomingBill from '../components/Fragments/CardUpcomingBill';
import CardRecentTransaction from '../components/Fragments/CardRecentTransaction';
import CardStatistic from '../components/Fragments/CardStatistic';
import CardExpenseBeakdown from '../components/Fragments/CardExpenseBeakdown';
import { transactions, bills, expensesBreakdowns, balances, expensesStatistics } from '../data';
import { goalService } from '../services/dataService';
import { AuthContext } from '../context/authContext';

// PERBAIKAN 1: Nama komponen WAJIB Huruf Besar (React Rule)
function Dashboard() {
  
  // PERBAIKAN 2: Panggil 'logout' dari AuthContext agar tidak error saat token expired
  const { logout } = useContext(AuthContext);

  // PERBAIKAN 3: Ganti useState({}) menjadi ada isinya.
  // Ini WAJIB dilakukan agar grafik tidak error "NaN" (Layar Merah) saat loading.
  const [goals, setGoals] = useState({ present_amount: 0, target_amount: 1 });

  const fetchGoals = async () => {
    try {
      const data = await goalService();
      setGoals(data);
    } catch (err) {
      console.error("Gagal mengambil data goals:", err);
      // PERBAIKAN 4: Penanganan error yang lebih aman
      if (err.status === 401) {
        logout();
      } else if (err.response && err.response.status === 401) {
        logout();
      }
    }
  };

  useEffect(() => {
    fetchGoals();
  }, []);
  
  console.log(goals);
  
  return (
    <>
      <MainLayout>
        <div className="grid sm:grid-cols-12 gap-6">
          <div className="sm:col-span-4">
           <CardBalance data={balances} />
          </div>
          <div className="sm:col-span-4">
            <CardGoal data={goals} />
          </div>
          <div className="sm:col-span-4">
            <CardUpcomingBill data={bills}/>
          </div>
              <div className="sm:col-span-4 sm:row-span-2">
            <CardRecentTransaction data={transactions} />
          </div>
          <div className="sm:col-span-8">
            <CardStatistic data={expensesStatistics} />
          </div>
          <div className="sm:col-span-8">
            <CardExpenseBeakdown data={expensesBreakdowns} />
          </div>
        </div>
      </MainLayout>
    </>
  )
}

export default Dashboard;