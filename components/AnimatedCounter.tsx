"use client";

import CountUp from "react-countup";

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div className="w-full">
      <CountUp duration={1} decimal="." decimals={2} end={amount} prefix="$" />
    </div>
  );
};

export default AnimatedCounter;
