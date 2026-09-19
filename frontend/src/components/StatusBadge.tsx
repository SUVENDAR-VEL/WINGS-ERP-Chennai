import React from 'react';

export const StatusBadge: React.FC<{ status: string }> = ({ status }) => {
  const isActive = status === 'ACTIVE';
  return (
    <span style={{
      padding: '4px 8px',
      borderRadius: '9999px',
      fontSize: '0.75rem',
      fontWeight: 600,
      backgroundColor: isActive ? '#D1FAE5' : '#FEE2E2',
      color: isActive ? '#065F46' : '#991B1B'
    }}>
      {status}
    </span>
  );
};
