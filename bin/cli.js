#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const prompts = require('prompts');

async function main() {
  // Ask for confirmation
  const confirmResponse = await prompts({
    type: 'confirm',
    name: 'value',
    message: 'Do you want to copy the prompt templates to your project?',
    initial: true
  });

  if (!confirmResponse.value) {
    console.log('Installation cancelled.');
    process.exit(0);
  }

  // Ask for target directory
  const targetDirResponse = await prompts({
    type: 'text',
    name: 'value',
    message: 'Where should the prompts be copied to?',
    initial: 'prompts'
  });

  const targetDir = targetDirResponse.value || 'prompts';
  const cwd = process.cwd();
  const targetPath = path.join(cwd, targetDir);

  // Ask if user wants to add the prompt folder to .gitignore
  const gitignoreResponse = await prompts({
    type: 'confirm',
    name: 'value',
    message: `Include ${targetDir} folder to .gitignore?`,
    initial: true
  });

  // Source directory (where prompts are stored in the npm package)
  const sourceDir = path.join(__dirname, '..', 'prompts');

  // Check if source directory exists
  if (!fs.existsSync(sourceDir)) {
    console.error('Error: Source prompts directory not found.');
    process.exit(1);
  }

  // Create target directory if it doesn't exist
  if (!fs.existsSync(targetPath)) {
    fs.mkdirSync(targetPath, { recursive: true });
    console.log(`\nCreated directory: ${targetDir}/`);
  }

  // Copy all files from source to target
  const files = fs.readdirSync(sourceDir);

  if (files.length === 0) {
    console.log('No prompt files found to copy.');
    process.exit(0);
  }

  console.log(`\nCopying ${files.length} file(s) to ${targetDir}/...\n`);

  files.forEach(file => {
    const sourcePath = path.join(sourceDir, file);
    const destPath = path.join(targetPath, file);

    // Only copy files, not directories
    if (fs.statSync(sourcePath).isFile()) {
      fs.copyFileSync(sourcePath, destPath);
      console.log(`  ✓ ${file}`);
    }
  });

  console.log(`\nSuccessfully copied prompts to ${targetDir}/`);

  // Add to .gitignore if confirmed
  if (gitignoreResponse.value) {
    const gitignorePath = path.join(cwd, '.gitignore');
    let gitignoreContent = '';
    
    // Read existing .gitignore or create new one
    if (fs.existsSync(gitignorePath)) {
      gitignoreContent = fs.readFileSync(gitignorePath, 'utf8');
    }
    
    // Check if the target directory is already in .gitignore
    const gitignoreLines = gitignoreContent.split('\n');
    const targetDirInGitignore = gitignoreLines.some(line =>
      line.trim() === targetDir || line.trim() === `${targetDir}/`
    );
    
    if (!targetDirInGitignore) {
      // Add the target directory to .gitignore
      if (gitignoreContent && !gitignoreContent.endsWith('\n')) {
        gitignoreContent += '\n';
      }
      gitignoreContent += `${targetDir}/\n`;
      
      fs.writeFileSync(gitignorePath, gitignoreContent);
      console.log(`Added ${targetDir}/ to .gitignore`);
    } else {
      console.log(`${targetDir}/ is already in .gitignore`);
    }
  }
}

main().catch(err => {
  console.error('Error:', err.message);
  process.exit(1);
});
