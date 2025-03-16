import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Admin',
  description: 'Admin page',
};

export default function PageName() {
  return redirect('/admin/overview');
};
