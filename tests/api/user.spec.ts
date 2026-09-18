import { test, expect } from '@playwright/test';
import dataTest from '../../data/user.json'
import { auth, getCurrentUser } from '../../helpers/api'
import userSchema from '../../json-schema/user-json-schema.json';
const { Validator } = require('jsonschema');

test('User successfully get current user', async ({ request }) => {
  // Precondition
  const baseURL = process.env.API_BASE_URL || 'http://localhost:3000';
  const email = dataTest['regular_user']['email']
  const password = dataTest['regular_user']['password']

  const access_token = await auth(request, baseURL, email, password)

  console.log(access_token)
  const response = await getCurrentUser(request, baseURL, access_token)

  console.log(await response)

  const validator = new Validator();
  const result = validator.validate(response, userSchema);
  expect(result.errors).toHaveLength(0);
});

