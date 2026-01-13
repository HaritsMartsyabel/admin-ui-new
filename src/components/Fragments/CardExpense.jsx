import React from "react";
import Icon from "../Elements/Icon";

const categoryIconMap = {
  housing: Icon.House,
  food: Icon.Food,
  transportation: Icon.Transport,
  entertainment: Icon.Movie,
  shopping: Icon.Shopping,
  others: Icon.Other,
};

const formatDate = (dateStr) => {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  if (Number.isNaN(d.getTime())) return dateStr;
  return d.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

const CardExpense = ({ category, amount, percentage, trend, detail }) => {
  const isUp = trend === "up";
  const key = category?.toLowerCase();
  const CategoryIcon = categoryIconMap[key] || Icon.Other;

  return (
    <div
      className="w-full overflow-hidden rounded-xl bg-white shadow-sm"
      style={{
        boxShadow: "0 6px 18px rgba(17, 24, 39, 0.06)",
      }}
    >
      <div className="flex items-start justify-between px-5 pt-4 pb-3 bg-[#EFEFEF]">
        <div className="flex items-start gap-3">
          <div className="h-10 w-10 rounded-md bg-[#E2E2E2] flex items-center justify-center">
            <CategoryIcon size={22} color="#7A7A7A" />
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-600 capitalize">
              {category}
            </p>
            <p className="text-xl font-extrabold text-black">${amount}</p>
          </div>
        </div>

        <div className="flex flex-col items-end text-[11px] gap-1 mt-1">
          <div className="flex items-center gap-1">
            <span
              className={`font-semibold ${
                isUp ? "text-[#F04438]" : "text-[#12B76A]"
              }`}
            >
              {percentage}%
            </span>
            {isUp ? (
              <Icon.ArrowUp size={13} color="#F04438" />
            ) : (
              <Icon.ArrowDown size={13} color="#12B76A" />
            )}
          </div>

          <p className="text-[11px] text-gray-500">
            Compare to the last month
          </p>
        </div>
      </div>

      <div className="px-5 pb-4 pt-3 bg-white">
        {detail?.map((item, idx) => {
          const name =
            item.name || item.title || item.item || `Item ${idx + 1}`;
          const itemAmount = item.amount ?? item.value ?? 0;
          const date =
            item.date || item.created_at || item.createdAt || "2023-05-17";

          return (
            <div
              key={item.id || idx}
              className={`flex items-center justify-between text-sm ${
                idx === 0 ? "" : "pt-3 border-t border-gray-100"
              }`}
            >
              <span className="text-[13px] font-semibold text-gray-700">
                {name}
              </span>
              <div className="text-right text-[13px]">
                <p className="font-semibold text-[#111827]">${itemAmount}</p>
                <p className="text-[11px] text-gray-400">{formatDate(date)}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardExpense;
