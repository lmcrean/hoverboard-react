import React, { useState } from 'react';
import { EndpointRow as BaseEndpointRow, testCredentialsManager } from '../../../page-components';

export default function EndpointRow() {
  const [randomCredentials, setRandomCredentials] = useState<{ email: string, password: string, username: string } | null>(null);

  const generateRandomCredentials = () => {
    // Create a more robust random string
    const randomString = Math.random().toString(36).substring(2, 8);
    const timestamp = Date.now().toString(36);
    const email = `user_${randomString}${timestamp.slice(0,4)}@example.com`;
    
    // Create a stronger password (at least 8 chars with mix of letters, numbers)
    const password = `Pass${randomString}${Math.floor(Math.random() * 1000)}!`;
    
    // Create a proper name
    const username = `TestUser${randomString.slice(0,3).toUpperCase()}`;
    
    const credentials = { email, password, username };
    
    // Store credentials using the credential manager
    testCredentialsManager.storeCredentials(credentials);
    
    setRandomCredentials(credentials);
    return credentials;
  };

  return (
    <>
      <BaseEndpointRow 
        method="POST"
        endpoint="/api/auth/signup"
        expectedOutput={{ 
          user: { 
            id: "user-id", 
            email: "user@example.com" 
          }, 
          token: "jwt-token" 
        }}
        requiresParams={true}
        inputFields={[
          {
            name: "email",
            label: "Email",
            type: "email",
            required: true,
            placeholder: "user@example.com",
            defaultValue: randomCredentials?.email || ""
          },
          {
            name: "password",
            label: "Password",
            type: "password",
            required: true,
            placeholder: "Min 8 characters",
            defaultValue: randomCredentials?.password || ""
          },
          {
            name: "username",
            label: "Username",
            type: "text",
            required: true,
            placeholder: "Your username",
            defaultValue: randomCredentials?.username || ""
          }
        ]}
      />
      
      <tr>
        <td colSpan={3}>
          <div className="flex items-center ml-4 mt-2 mb-4">
            <button 
              onClick={() => generateRandomCredentials()}
              className="px-3 py-1 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2"
            >
              Generate Random User
            </button>
            
            {randomCredentials && (
              <div className="ml-4 p-2 bg-gray-800 rounded text-xs">
                <div>Email: <span className="text-green-400">{randomCredentials.email}</span></div>
                <div>Password: <span className="text-green-400">{randomCredentials.password}</span></div>
                <div>Username: <span className="text-green-400">{randomCredentials.username}</span></div>
              </div>
            )}
          </div>
        </td>
      </tr>
    </>
  );
} 