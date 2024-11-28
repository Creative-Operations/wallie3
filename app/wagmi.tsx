import { useContractRead } from 'wagmi';
import { USDTAbi } from '../abi/USDTAbi';
 
const USDTAddress = '0x...';
 
function App() {
  const result = useReadContract({
    abi: USDTAbi,
    address: USDTAddress,
    functionName: 'totalSupply',
  });
}