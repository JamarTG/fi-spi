
export const getRiskColor = (riskLevel: string) => {
  switch (riskLevel) {
    case 'high': return '#ff4444';
    case 'medium': return '#ff8800';
    case 'low': return '#ffdd00';
    default: return '#888888';
  }
};

export const getIntensityOpacity = (intensity: string) => {
  switch (intensity) {
    case 'extreme': return 0.8;
    case 'severe': return 0.6;
    case 'moderate': return 0.4;
    case 'low': return 0.2;
    default: return 0.3;
  }
};