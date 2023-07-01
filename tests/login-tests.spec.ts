import { test, expect } from '@playwright/test';
import { LoginPage } from '../tasks/task01/task01'
import { AuthenticationService } from '../tasks/task01/authentication-service';

const service: AuthenticationService = new AuthenticationService()

test('Positive authentication using valid credentials', async () => {
   expect(LoginPage.login('username', 'password', service), 'Verify that user is logged in').toBe(true);
});

test('Negative authentication using valid "username" and invalid "password"', async () => {
   expect(LoginPage.login('username', 'invalid', service), 'Verify that user is not logged in').toBe(false);
});

test('Negative authentication using invalid "username" and valid "password"', async () => {
   expect(LoginPage.login('invalid', 'password', service), 'Verify that user is not logged in').toBe(false);
});

test('Negative authentication using invalid "username" and invalid "password"', async () => {
   expect(LoginPage.login('invalid', 'invalid', service), 'Verify that user is not logged in').toBe(false);
});

