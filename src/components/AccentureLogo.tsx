import Image from 'next/image';
import React from 'react';

const AccentureLogo = ({ className }: { className?: string }) => (
  <Image src="/ACN.svg" alt="Accenture Logo" className={className} width={80} height={80} />
);

export default AccentureLogo;
