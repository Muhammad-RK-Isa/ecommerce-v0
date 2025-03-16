import type * as React from 'react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      This text is from the AdminLayout component.
      {children}
    </div>
  );
};
