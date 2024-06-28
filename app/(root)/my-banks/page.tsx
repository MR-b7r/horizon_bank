import React from "react";
import HeaderBox from "@/components/HeaderBox";
import { getAccount, getAccounts } from "@/lib/actions/bank.action";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import BankCard from "@/components/BankCard";

const MyBanks = async () => {
  const loggedIn = await getLoggedInUser();
  const accounts = await getAccounts({ userId: loggedIn?.$id });

  if (!accounts) return;
  const accountsData = accounts?.data;

  return (
    <div className="transactions">
      <div className="transactions-header">
        <HeaderBox
          title="My Bank Accounts"
          subtext="Effortlessly Mangage Your Banking Activities"
        />
      </div>

      <div className="space-y-4">
        <h2 className="header-2">Your cards</h2>
        <div className="flex flex-wrap gap-6">
          {accountsData.map((a: Account) => (
            <BankCard key={a.id} account={a} userName={loggedIn?.firstName} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyBanks;
