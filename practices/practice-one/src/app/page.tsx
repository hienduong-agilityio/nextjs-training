import { redirect } from 'next/navigation';

// Constants
import { ROUTE } from '@/constants';

export default function Homepage() {
  redirect(ROUTE.PRODUCTS);
}
