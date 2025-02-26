import { CardTitle } from '@/components/ui/card';
import { useMemo, useState } from 'react';

interface PollSummarySubCardProps {
  pollSummary: number[];
}

const PollSummarySubCard = ({ pollSummary }: PollSummarySubCardProps) => {
  const pollSummaryTop = useMemo(() => {
    return pollSummary.indexOf(Math.max(...pollSummary));
  }, [pollSummary]);

  return (
    <div className='mt-8'>
      <CardTitle className='font-extrabold uppercase text-primary'>
        📊 Poll Summary
      </CardTitle>
      <div className='mt-8 flex flex-col rounded-md border-2 border-secondary p-8'>
        {pollSummary.map((value, index) => {
          return (
            <div key={index + 1}>
              {index + 1}: {value ?? 0} {pollSummaryTop === index && '👑'}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PollSummarySubCard;
