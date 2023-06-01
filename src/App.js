import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import { RedStripe } from './RedStripe';
import { BlueStripe } from './BlueStripe';
import { RecoilRoot } from 'recoil';
import { GreenStripe } from './GreenStripe';

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        {/* We are telling Recoil we want to share data between RedStripe and BlueStripe. Any components outside of this scope will not be able to share data. */}
        <RecoilRoot>
          <RedStripe />
          <BlueStripe />
          <GreenStripe />
        </RecoilRoot>
      </QueryClientProvider>
    </div>
  );
}

export default App;
