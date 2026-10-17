/**
 * test-runner.js
 * Automated Unit & Smoke Tests for NETRA Core CI/CD Pipeline
 */

import { readFileSync, existsSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

let passed = 0
let failed = 0

function assert(condition, message) {
  if (condition) {
    console.log(`  ✅ PASS: ${message}`)
    passed++
  } else {
    console.error(`  ❌ FAIL: ${message}`)
    failed++
  }
}

console.log('\n========================================')
console.log('🧪 RUNNING NETRA CORE AUTOMATED TESTS')
console.log('========================================\n')

// 1. Check required configuration files
console.log('▶️ [Suite 1: Build & Config Verification]')
assert(existsSync(resolve(__dirname, 'package.json')), 'package.json exists')
assert(existsSync(resolve(__dirname, 'vite.config.js')), 'vite.config.js exists')
assert(existsSync(resolve(__dirname, 'index.html')), 'index.html exists')
assert(existsSync(resolve(__dirname, 'src/App.jsx')), 'src/App.jsx entrypoint exists')

// 2. Validate package.json dependencies
const pkg = JSON.parse(readFileSync(resolve(__dirname, 'package.json'), 'utf-8'))
assert(pkg.dependencies['react'] !== undefined, 'React dependency declared')
assert(pkg.dependencies['leaflet'] !== undefined, 'Leaflet GIS dependency declared')
assert(pkg.dependencies['@supabase/supabase-js'] !== undefined, 'Supabase SDK declared')
assert(pkg.dependencies['recharts'] !== undefined, 'Recharts visualization declared')

// 3. Verify mock data integrity
console.log('\n▶️ [Suite 2: Core Data & GIS Telemetry Verification]')
try {
  const roadCachePath = resolve(__dirname, 'src/services/roadNetworkCache.json')
  assert(existsSync(roadCachePath), 'roadNetworkCache.json exists')
  const roadCache = JSON.parse(readFileSync(roadCachePath, 'utf-8'))
  assert(Object.keys(roadCache).length > 0, `Road network cache contains ${Object.keys(roadCache).length} road segments`)
} catch (e) {
  assert(false, `Road cache load failed: ${e.message}`)
}

// 4. Verify SQL migration schemas
console.log('\n▶️ [Suite 3: Database & Migration Schema Verification]')
assert(existsSync(resolve(__dirname, 'supabase_schema_and_seed.sql')), 'Supabase base schema exists')
assert(existsSync(resolve(__dirname, 'supabase_prevention_schema.sql')), 'AI prevention schema exists')

console.log('\n========================================')
console.log(`📊 TEST SUMMARY: ${passed} Passed, ${failed} Failed`)
console.log('========================================\n')

if (failed > 0) {
  process.exit(1)
} else {
  console.log('🎉 All NETRA automated pipeline tests passed successfully!\n')
  process.exit(0)
}
