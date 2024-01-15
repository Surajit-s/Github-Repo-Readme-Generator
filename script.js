function generateReadme() {
    const projectName = document.getElementById('projectName').value.trim();
    const description = document.getElementById('description').value.trim();
    const installation = document.getElementById('installation').value.trim();

    if (!projectName || !description) {
        alert("Please enter both Project Name and Description.");
        return;
    }

    const readmeContent = `# ${projectName}

${description}

## Installation

${installation}`;

    document.getElementById('previewContent').textContent = readmeContent;
}
