import React from 'react';

interface VectorLogoProps {
  vectorId: 'loop' | 'monogram' | 'synapse' | 'pulse';
  primaryBlue?: string;
  secondaryBlue?: string;
  accentOrange?: string;
  accentWarm?: string;
  size?: number;
  className?: string;
  animated?: boolean;
}

export const SocioTechnicalLoopMark: React.FC<Omit<VectorLogoProps, 'vectorId'>> = ({
  primaryBlue = '#0B192C',
  secondaryBlue = '#1E3E62',
  accentOrange = '#F97316',
  accentWarm = '#FB923C',
  size = 120,
  className = '',
  animated = false,
}) => {
  const gradientId = `loop-grad-${primaryBlue.replace('#', '')}-${accentOrange.replace('#', '')}`;
  const orangeGradId = `orange-grad-${accentOrange.replace('#', '')}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`transition-all duration-300 ${className}`}
    >
      <defs>
        <linearGradient id={gradientId} x1="20" y1="30" x2="180" y2="170" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={primaryBlue} />
          <stop offset="55%" stopColor={secondaryBlue} />
          <stop offset="100%" stopColor={accentOrange} />
        </linearGradient>

        <linearGradient id={orangeGradId} x1="70" y1="50" x2="150" y2="150" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={accentOrange} />
          <stop offset="100%" stopColor={accentWarm} />
        </linearGradient>

        <filter id="soft-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Code Bracket Left { */}
      <path
        d="M 68 45 
           C 52 45, 42 55, 42 70 
           L 42 85 
           C 42 94, 34 100, 24 100 
           C 34 100, 42 106, 42 115 
           L 42 130 
           C 42 145, 52 155, 68 155"
        stroke={secondaryBlue}
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Code Bracket Right } */}
      <path
        d="M 132 45 
           C 148 45, 158 55, 158 70 
           L 158 85 
           C 158 94, 166 100, 176 100 
           C 166 100, 158 106, 158 115 
           L 158 130 
           C 158 145, 148 155, 132 155"
        stroke={secondaryBlue}
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* The Central Socio-Technical Infinity Flow */}
      <path
        d="M 65 100 
           C 65 72, 90 62, 100 75 
           C 110 88, 135 128, 145 100 
           C 155 72, 125 65, 100 100 
           C 75 135, 45 128, 55 100 
           C 65 72, 90 62, 100 75"
        stroke={`url(#${orangeGradId})`}
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#soft-glow)"
        className={animated ? 'animate-pulse' : ''}
      />

      {/* Human Silhouette / Empathic Resonance Nodes */}
      {/* Node 1: Left Developer Node */}
      <g>
        <circle cx="78" cy="82" r="9" fill={accentWarm} />
        <path
          d="M 66 104 C 66 94, 90 94, 90 104"
          stroke={accentOrange}
          strokeWidth="4"
          strokeLinecap="round"
        />
      </g>

      {/* Node 2: Right Developer Node */}
      <g>
        <circle cx="122" cy="118" r="9" fill={accentOrange} />
        <path
          d="M 110 140 C 110 130, 134 130, 134 140"
          stroke={accentWarm}
          strokeWidth="4"
          strokeLinecap="round"
        />
      </g>

      {/* Central Spark / Nexus Node */}
      <circle cx="100" cy="100" r="5" fill="#FFFFFF" />
      <circle cx="100" cy="100" r="7" stroke={accentOrange} strokeWidth="2.5" />
    </svg>
  );
};

export const HumanPrismSEMark: React.FC<Omit<VectorLogoProps, 'vectorId'>> = ({
  primaryBlue = '#0B192C',
  secondaryBlue = '#1E3E62',
  accentOrange = '#EA580C',
  accentWarm = '#F97316',
  size = 120,
  className = '',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`transition-all duration-300 ${className}`}
    >
      <defs>
        <linearGradient id="se-dark-grad" x1="40" y1="30" x2="160" y2="170" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={secondaryBlue} />
          <stop offset="100%" stopColor={primaryBlue} />
        </linearGradient>
        <linearGradient id="se-orange-grad" x1="70" y1="40" x2="140" y2="160" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={accentWarm} />
          <stop offset="100%" stopColor={accentOrange} />
        </linearGradient>
      </defs>

      {/* Stylized 'S' Ribbon */}
      <path
        d="M 125 50 
           C 75 42, 45 68, 52 98 
           C 56 118, 85 116, 110 124 
           C 135 132, 142 152, 120 162 
           C 95 172, 60 160, 52 145"
        stroke="url(#se-dark-grad)"
        strokeWidth="16"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Stylized 'E' Architectural Spine & Bars with Human Profile Contour */}
      <path
        d="M 148 50 L 172 50"
        stroke={secondaryBlue}
        strokeWidth="14"
        strokeLinecap="round"
      />
      <path
        d="M 148 100 L 168 100"
        stroke={accentWarm}
        strokeWidth="12"
        strokeLinecap="round"
      />
      <path
        d="M 148 150 L 172 150"
        stroke={secondaryBlue}
        strokeWidth="14"
        strokeLinecap="round"
      />

      {/* Central Human Connection Arch (Empathy Bridge) */}
      <path
        d="M 85 85 Q 105 100, 85 115"
        stroke="url(#se-orange-grad)"
        strokeWidth="10"
        strokeLinecap="round"
      />
      
      {/* Head of Human Node */}
      <circle cx="108" cy="85" r="9" fill={accentWarm} />
      <circle cx="128" cy="115" r="7" fill={accentOrange} />

      {/* Synergy Connector line */}
      <line x1="108" y1="94" x2="128" y2="108" stroke={accentOrange} strokeWidth="3" strokeDasharray="2 3" />
    </svg>
  );
};

export const CollaborativeSynapseMark: React.FC<Omit<VectorLogoProps, 'vectorId'>> = ({
  primaryBlue = '#071224',
  secondaryBlue = '#1E3E62',
  accentOrange = '#FF6B35',
  accentWarm = '#FFA07A',
  size = 120,
  className = '',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`transition-all duration-300 ${className}`}
    >
      <defs>
        <linearGradient id="syn-poly" x1="100" y1="20" x2="100" y2="180" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={secondaryBlue} />
          <stop offset="100%" stopColor={primaryBlue} />
        </linearGradient>
      </defs>

      {/* Hexagonal Outer Chamber */}
      <polygon
        points="100,24 165,60 165,140 100,176 35,140 35,60"
        stroke="url(#syn-poly)"
        strokeWidth="10"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Socio-Technical Network Mesh */}
      <line x1="100" y1="65" x2="65" y2="125" stroke={secondaryBlue} strokeWidth="4" />
      <line x1="100" y1="65" x2="135" y2="125" stroke={secondaryBlue} strokeWidth="4" />
      <line x1="65" y1="125" x2="135" y2="125" stroke={accentWarm} strokeWidth="5" />
      <line x1="100" y1="65" x2="100" y2="110" stroke={accentOrange} strokeWidth="5" />

      {/* Three Collaborating Human Nodes (Triangle of Social Dynamics) */}
      {/* Top Node (Leader / Architect) */}
      <g>
        <circle cx="100" cy="58" r="10" fill={accentOrange} />
        <circle cx="100" cy="58" r="4" fill="#FFFFFF" />
      </g>

      {/* Bottom Left Node (Peer Developer / Mentee) */}
      <g>
        <circle cx="62" cy="128" r="9" fill={accentWarm} />
        <circle cx="62" cy="128" r="3.5" fill="#FFFFFF" />
      </g>

      {/* Bottom Right Node (Reviewer / Community) */}
      <g>
        <circle cx="138" cy="128" r="9" fill={accentOrange} />
        <circle cx="138" cy="128" r="3.5" fill="#FFFFFF" />
      </g>

      {/* Central DevEx Spark Node */}
      <circle cx="100" cy="110" r="6" fill="#FFA07A" />
      <path
        d="M 92 148 L 100 142 L 108 148"
        stroke={accentWarm}
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const DevExPulseMark: React.FC<Omit<VectorLogoProps, 'vectorId'>> = ({
  primaryBlue = '#0B192C',
  secondaryBlue = '#1E3E62',
  accentOrange = '#F97316',
  accentWarm = '#FB923C',
  size = 120,
  className = '',
  animated = false,
}) => {
  const bracketColor = primaryBlue || secondaryBlue;
  const pulseGradId = `pulse-grad-${accentOrange.replace('#', '')}-${accentWarm.replace('#', '')}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`transition-all duration-300 ${className}`}
    >
      <defs>
        <linearGradient id={pulseGradId} x1="38" y1="100" x2="162" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={accentOrange} />
          <stop offset="50%" stopColor={accentWarm} />
          <stop offset="100%" stopColor={accentOrange} />
        </linearGradient>
        {animated && (
          <filter id="pulse-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        )}
      </defs>

      {/* Left Code Bracket < */}
      <path
        d="M 52 70 L 25 100 L 52 130"
        stroke={bracketColor}
        strokeWidth="13"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Right Code Bracket > */}
      <path
        d="M 148 70 L 175 100 L 148 130"
        stroke={bracketColor}
        strokeWidth="13"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Human Vitality / Heartbeat Pulse flowing through the code */}
      <path
        d="M 38 100 
           L 70 100 
           L 82 72 
           L 95 132 
           L 110 88 
           L 120 114 
           L 130 100 
           L 162 100"
        stroke={`url(#${pulseGradId})`}
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter={animated ? 'url(#pulse-glow)' : undefined}
        className={animated ? 'animate-pulse' : ''}
      />

      {/* Empathy Human Head on the Pulse Peak */}
      <circle cx="95" cy="56" r="9" fill={accentWarm} />
      <circle cx="95" cy="56" r="4" fill="#FFFFFF" />

      {/* Social Connection Node */}
      <circle cx="110" cy="74" r="6" fill={accentOrange} />
    </svg>
  );
};

export const HumanLogicWaveMark = DevExPulseMark;

export const VectorLogo: React.FC<VectorLogoProps> = ({
  vectorId,
  primaryBlue,
  secondaryBlue,
  accentOrange,
  accentWarm,
  size = 120,
  className = '',
  animated = false,
}) => {
  switch (vectorId) {
    case 'loop':
      return (
        <SocioTechnicalLoopMark
          primaryBlue={primaryBlue}
          secondaryBlue={secondaryBlue}
          accentOrange={accentOrange}
          accentWarm={accentWarm}
          size={size}
          className={className}
          animated={animated}
        />
      );
    case 'monogram':
      return (
        <HumanPrismSEMark
          primaryBlue={primaryBlue}
          secondaryBlue={secondaryBlue}
          accentOrange={accentOrange}
          accentWarm={accentWarm}
          size={size}
          className={className}
        />
      );
    case 'synapse':
      return (
        <CollaborativeSynapseMark
          primaryBlue={primaryBlue}
          secondaryBlue={secondaryBlue}
          accentOrange={accentOrange}
          accentWarm={accentWarm}
          size={size}
          className={className}
        />
      );
    case 'pulse':
      return (
        <DevExPulseMark
          primaryBlue={primaryBlue}
          secondaryBlue={secondaryBlue}
          accentOrange={accentOrange}
          accentWarm={accentWarm}
          size={size}
          className={className}
          animated={animated}
        />
      );
    default:
      return null;
  }
};
