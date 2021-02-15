import React from 'react';
import { Typography } from '@material-ui/core';

// Headings
export const Heading1: React.FC = ({ children }) => <Typography variant="h1">{children}</Typography>;
export const Heading2: React.FC = ({ children }) => <Typography variant="h2">{children}</Typography>;
export const Heading3: React.FC = ({ children }) => <Typography variant="h3">{children}</Typography>;
export const Heading4: React.FC = ({ children }) => <Typography variant="h4">{children}</Typography>;
export const Heading5: React.FC = ({ children }) => <Typography variant="h5">{children}</Typography>;
export const Heading6: React.FC = ({ children }) => <Typography variant="h6">{children}</Typography>;

// Subtitles
export const Subtitle1: React.FC = ({ children }) => <Typography variant="subtitle1">{children}</Typography>;
export const Subtitle2: React.FC = ({ children }) => <Typography variant="subtitle2">{children}</Typography>;

// paragraph
export const Paragraph1: React.FC = ({ children }) => <Typography variant="body1">{children}</Typography>;
export const Paragraph2: React.FC = ({ children }) => <Typography variant="body2">{children}</Typography>;
