import { Stack, Typography } from '@mui/material';

interface DataLabelProps {
	title: string;
	text: string | number;
}
export const DataLabel = ({ title, text }: DataLabelProps) => {
	return (
		<Stack
			flexDirection="row"
			alignItems="center"
			gap={0.5}
		>
			<Typography variant="subtitle2">{title}:</Typography>
			<Typography variant="body1">{text}</Typography>
		</Stack>
	);
};