import React, { useState } from 'react';
import './App.css';
import { marked } from 'marked';

// Default markdown content
const defaultMarkdown = `
# Heading 1

## Heading 2

[FreeCodeCamp](https://www.freecodecamp.org)

Inline \`code\`

\`\`\`
Code block
\`\`\`

- List item 1
- List item 2

> Blockquote

![FreeCodeCamp Logo](https://www.freecodecamp.org/logo.png)

**Bold text**
`;

function App() {
  const [markdown, setMarkdown] = useState(defaultMarkdown);

  // Convert markdown to HTML using marked
  const getMarkdownText = () => {
    return { __html: marked(markdown, { breaks: true }) };
  };

  return (
    <div className="App container mt-4">
      <div className="row">
        <div className="col-md-6">
          <h3>Editor</h3>
          <textarea
            id="editor"
            className="form-control"
            rows="20"
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
          ></textarea>
        </div>
        <div className="col-md-6">
          <h3>Preview</h3>
          <div
            id="preview"
            className="preview"
            dangerouslySetInnerHTML={getMarkdownText()}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default App;
