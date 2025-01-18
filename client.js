import { createClient } from '@libsql/client';
import { loadEnvFile } from 'node:process'

loadEnvFile('.env')

const url = process.env.URL
const authToken = process.env.AUTH_TOKEN

export const db = createClient({ url, authToken })