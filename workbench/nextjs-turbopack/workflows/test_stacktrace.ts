// Test workflow to verify stack traces
async function functionThatThrows() {
  'use workflow';
  throw new Error('This is a test error from functionThatThrows');
}

export async function testStackTrace() {
  'use workflow';
  console.log('Starting testStackTrace workflow');
  // Call another function to see if stack trace preserves call hierarchy
  await functionThatThrows();
}
