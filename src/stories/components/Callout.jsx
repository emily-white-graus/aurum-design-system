import React from 'react';
import { Info, CheckCircle, AlertTriangle, AlertCircle } from 'lucide-react';
import './callout.css';

/**
 * The Callout component is a non-disruptive content block used to surface supporting information in context. It provides users with helpful, advisory, or cautionary content that enriches the experience without demanding immediate action. Unlike alerts, callouts are used within flows, not interrupting them.
 * 
 * Purpose of callout components :
 * 
 * To offer relevant, visually distinct guidance that enhances clarity or draws attention to useful information in a page or feature.
 * 
 * @param {string} variant - The variant type: 'default', 'success', 'warning', or 'danger'
 * @param {string} children - The content to display in the callout
 * @param {string} className - Additional CSS classes
 */

export const Callout = (props) => {
  const { variant = 'default', children, className = '' } = props;

  const getIcon = () => {
    switch (variant) {
      case 'success':
        return <CheckCircle size={16} />;
      case 'warning':
        return <AlertCircle size={16} />;
      case 'danger':
        return <AlertTriangle size={16} />;
      default:
        return <Info size={16} />;
    }
  };

  return (
    <div className={`callout callout-${variant} ${className}`}>
      <div className="callout-icon">
        {getIcon()}
      </div>
      <div className="callout-content">
        {children}
      </div>
    </div>
  );
};