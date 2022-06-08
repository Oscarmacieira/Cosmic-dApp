import { useMoralis } from "react-moralis"

export function useWalletAddress() {
  
  const { user } = useMoralis()

  const account = user?.get('accounts') ? user.get('accounts')[0] : null;

  return {
    address: account || null,
    shortAddress: 
      account 
        ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` 
        : null
  
  }
}