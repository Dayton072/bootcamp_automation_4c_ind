import { test, expect } from '@playwright/test';
import userData from '../../data/user.json';

test('Login Valid @p0 @positive @smoketest', async ({ request }) => {
  const baseURL = process.env.API_BASE_URL || 'http://localhost:3000';

  // Gunakan param 'request', jangan 'page'
  const response = await request.post(`${baseURL}/api/v1/auth/login`, {
    data: { 
      auth: { 
        email: userData ['regular_user']['email'],
        password: userData ['regular_user']['password'] 
      } 
    },
    headers: { 
      'Content-Type': 'application/json',
      'Accept': 'application/json' 
    }
  });

  // Validasi status code (harusnya 200 OK jika login berhasil)
  console.log(await response.status());
  expect(response.status()).toBe(200);
});

test('login invalid email @p1 @negative @api', async ({ request }) => {
  const baseURL = process.env.API_BASE_URL || 'http://localhost:3000';

  // Gunakan param 'request', jangan 'page'
  const response = await request.post(`${baseURL}/api/v1/auth/login`, {
    data: { 
      auth: { 
        email: userData ['invalid_email_user']['email'],
        password: userData ['invalid_email_user']['password'] 
      } 
    },
    headers: { 
      'Content-Type': 'application/json',
      'Accept': 'application/json' 
    }
  });

  // Validasi status code (harusnya 401 Unauthorized jika email tidak valid)
  console.log(await response.status());
  expect(response.status()).toBe(401);
});

test('login invalid password @p1 @negative @api', async ({ request }) => {
  const baseURL = process.env.API_BASE_URL || 'http://localhost:3000';

  // Gunakan param 'request', jangan 'page'
  const response = await request.post(`${baseURL}/api/v1/auth/login`, {
    data: { 
      auth: { 
        email: userData ['invalid_password_user']['email'],
        password: userData ['invalid_password_user']['password'] 
      } 
    },
    headers: { 
      'Content-Type': 'application/json',
      'Accept': 'application/json' 
    }
  });

  // Validasi status code (harusnya 401 Unauthorized jika password tidak valid)
  console.log(await response.status());
  expect(response.status()).toBe(401);
});