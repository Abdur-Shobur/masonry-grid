import { codeGenerator } from '@/helper';
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export function CodeView({ children }: { children: string }) {
	return (
		<SyntaxHighlighter language="jsx" style={vscDarkPlus} showLineNumbers>
			{children}
		</SyntaxHighlighter>
	);
}
