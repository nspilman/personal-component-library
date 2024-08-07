import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const csv = `
Current Title,New Title
Components/Accordion,Components/Layout/Accordion
Components/Alert,Components/Feedback/Alert
Components/Avatar,Components/Data Display/Avatar
Components/Badge,Components/Data Display/Badge
Components/Breadcrumbs,Components/Navigation/Breadcrumbs
Components/Button,Components/Inputs/Button
Components/Calendar,Components/Inputs/Calendar
Components/Card,Components/Layout/Card
Components/Carousel,Components/Data Display/Carousel
Components/Checkbox,Components/Inputs/Checkbox
Components/Chip,Components/Data Display/Chip
Components/Drawer,Components/Layout/Drawer
Components/Dropdown,Components/Inputs/Dropdown
Components/Form,Components/Inputs/Form
Components/Grid,Components/Layout/Grid
Components/ImageUploader,Components/Inputs/ImageUploader
Components/Input,Components/Inputs/Input
Components/Menu,Components/Navigation/Menu
Components/Modal,Components/Feedback/Modal
Components/Pagination,Components/Navigation/Pagination
Components/Popover,Components/Data Display/Popover
Components/Progress,Components/Feedback/Progress
Components/Radio,Components/Inputs/Radio
Components/Select,Components/Inputs/Select
Components/Skeleton,Components/Feedback/Skeleton
Components/Slider,Components/Inputs/Slider
Components/Spinner,Components/Feedback/Spinner
Components/Stepper,Components/Navigation/Stepper
Components/Switch,Components/Inputs/Switch
Components/Table,Components/Data Display/Table
Components/Tabs,Components/Navigation/Tabs
Components/Typography,Components/Data Display/Typography
Components/TimePicker,Components/Inputs/TimePicker
Components/Toast,Components/Feedback/Toast
Components/Toggle,Components/Inputs/Toggle
Components/Tooltip,Components/Data Display/Tooltip
Components/Divider,Components/Layout/Divider
Components/List,Components/Data Display/List
Components/Rating,Components/Inputs/Rating
Components/TreeView,Components/Data Display/TreeView
Components/Backdrop,Components/Feedback/Backdrop
Components/FileUploader,Components/Inputs/FileUploader
`;

// Parse CSV
const replacements = csv
  .trim()
  .split('\n')
  .slice(1) // Skip header
  .map(line => line.split(','))
  .map(([from, to]) => ({ from, to }));

// Function to process a file
function processFile(filePath) {
  let content = readFileSync(filePath, 'utf-8');
  let modified = false;

  replacements.forEach(({ from, to }) => {
    if (content.includes(from)) {
      content = content.replace(new RegExp(from, 'g'), to);
      modified = true;
    }
  });

  if (modified) {
    writeFileSync(filePath, content, 'utf-8');
    console.log(`Updated: ${filePath}`);
  }
}

// Recursively process directories
function processDirectory(dir) {
  console.log({ dir });
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) {
      processDirectory(path);
    } else if (entry.isFile() && path.endsWith('.stories.tsx')) {
      processFile(path);
    }
  }
}

// Start processing from the current directory
processDirectory('./src/components/');

console.log('Processing complete!');
