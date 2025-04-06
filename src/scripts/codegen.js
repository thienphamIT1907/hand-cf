// generate-types.js
import { config } from 'dotenv';
import { exec } from 'child_process';
import { promisify } from 'util';
import fs from 'fs/promises';

// Initialize dotenv to load environment variables
config();

// Promisify exec for async/await usage
const execPromise = promisify(exec);

/**
 * Generates TypeScript types from Supabase schema
 */
async function generateSupabaseTypes() {
  try {
    // Get project ID from environment variables
    const projectId = process.env.VITE_SUPABASE_PROJECT_ID;

    if (!projectId) {
      throw new Error('VITE_SUPABASE_PROJECT_ID not found in .env file');
    }

    // Define output file path
    const outputPath = './src/types/supabase.ts';

    // Ensure output directory exists
    await fs.mkdir('./src/types', { recursive: true });

    // Supabase CLI command to generate types
    const command = `npx supabase gen types typescript --project-id ${projectId} > ${outputPath} && prettier --write ${outputPath}`;

    console.log('Generating Supabase types...');

    // Execute the command
    const { stdout, stderr } = await execPromise(command);

    if (stderr) {
      console.error('Error output:', stderr);
    }

    if (stdout) {
      console.log('Command output:', stdout);
    }

    console.log(`Types successfully generated at ${outputPath}`);

    // Optional: Add header comment to generated file
    const header = `// Auto-generated Supabase types\n// Generated on: ${new Date().toISOString()}\n\n`;
    const content = await fs.readFile(outputPath, 'utf8');
    await fs.writeFile(outputPath, header + content);

    console.log('Added header to generated types file');
  } catch (error) {
    console.error('Error generating Supabase types:', error.message);
    process.exit(1);
  }
}

// Run the function
generateSupabaseTypes();
