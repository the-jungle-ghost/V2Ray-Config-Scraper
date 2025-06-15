import React from 'react';

interface BypassListProps {
  list: string;
}

export function BypassList({ list }: BypassListProps) {
  return (
    <div className="bg-gray-50 p-3 rounded-md mt-2 overflow-x-auto">
      <code className="text-xs text-gray-700 font-mono whitespace-pre-wrap break-all preserve-ltr" dir="ltr">
        {list}
      </code>
    </div>
  );
} 