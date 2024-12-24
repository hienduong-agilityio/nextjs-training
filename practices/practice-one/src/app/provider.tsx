import { ToastContainer } from '@/components';

const Providers = ({ children }: { children: React.ReactNode }) => (
  <>
    {children}
    <ToastContainer />
  </>
);

export default Providers;
