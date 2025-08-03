import Image from 'next/image';
import React from 'react';

const FUBLogo = ({ className }: { className?: string }) => (
  <Image src="/Fub_siegel.svg" alt="Freie Universität Berlin Logo" className={className} width={80} height={80} />
);

export default FUBLogo;
