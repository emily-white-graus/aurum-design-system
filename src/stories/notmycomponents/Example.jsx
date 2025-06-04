import React from 'react';
import * as Form from '@radix-ui/react-form';
import * as Label from '@radix-ui/react-label';
import * as Checkbox from '@radix-ui/react-checkbox';
import { Check } from 'lucide-react';
import './example.css';

/**
 * Color is fundamental to creating intuitive user experiences and establishing brand recognition. Monzo's refreshed palette transforms traditional banking interactions by introducing warmth, optimism, and human connection.
 */

export const Example = (props) => {
  const { isLoading, success, onSubmit } = props;

  return (
    <div className="login-page">
      <div className="login-card" >
        <div className="login-header">
          <h1 className="login-title">Login to your account</h1>
          <p className="login-description">Enter your credentials to access your account</p>
        </div>

        {success ? (
          <div className="success-message">
            <p>Login successful! Redirecting...</p>
          </div>
        ) : (
          <Form.Root className="form-root" onSubmit={onSubmit}>
            <Form.Field name="email" className="form-field">
              <div className="field-header">
                <Form.Label className="field-label">Email</Form.Label>
                <Form.Message match="valueMissing" className="error-message">
                  Please enter your email
                </Form.Message>
                <Form.Message match="typeMismatch" className="error-message">
                  Please enter a valid email
                </Form.Message>
              </div>
              <Form.Control asChild>
                <input
                  type="email"
                  className="form-input"
                  required
                  placeholder="you@example.com"
                />
              </Form.Control>
            </Form.Field>
            
            <Form.Field name="password" className="form-field">
              <div className="field-header">
                <Form.Label className="field-label">Password</Form.Label>
                <Form.Message match="valueMissing" className="error-message">
                  Please enter your password
                </Form.Message>
              </div>
              <Form.Control asChild>
                <input
                  type="password"
                  className="form-input"
                  required
                  placeholder="••••••••"
                />
              </Form.Control>
            </Form.Field>
            
            <div className="form-options">
              <div className="remember-me">
                <Checkbox.Root id="remember" className="checkbox-root">
                  <Checkbox.Indicator className="checkbox-indicator">
                    <Check size={12} />
                  </Checkbox.Indicator>
                </Checkbox.Root>
                <Label.Root htmlFor="remember" className="checkbox-label">
                  Remember me
                </Label.Root>
              </div>
              <button type="button" className="forgot-password">
                Forgot password?
              </button>
            </div>
            
            <Form.Submit asChild>
              <button
                disabled={isLoading}
                className="submit-button"
              >
                {isLoading ? 'Signing in...' : 'Sign in'}
              </button>
            </Form.Submit>
          </Form.Root>
        )}
        
        <div className="signup-section">
          <p className="signup-text">
            Don't have an account?{' '}
            <button className="signup-link">
              Sign up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};