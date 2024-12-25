import React from 'react';
import { VPNConfig } from '../types/config';

interface ConfigDetailsProps {
  config: VPNConfig;
}

export function ConfigDetails({ config }: ConfigDetailsProps) {
  if (!config.decoded) return null;

  const hasDetails = config.decoded.add || config.decoded.port || config.decoded.net;
  if (!hasDetails) return null;

  return (
  );
}