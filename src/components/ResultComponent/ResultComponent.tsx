import { useTranslation } from 'react-i18next';

import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@mui/material';

interface InputComponentProps {
  hourlyResult: number | undefined;
}

const TABLE_WIDTH = 350;

export function ResultComponent({ hourlyResult }: InputComponentProps) {
  const { t } = useTranslation();

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <TableContainer component={Paper} sx={{ maxWidth: TABLE_WIDTH }}>
        <Table
          sx={{ maxWidth: TABLE_WIDTH }}
          aria-label={t('components.resultComponent.ariaTable')}
        >
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography>
                  <b>{t('components.resultComponent.tableLabels.time')}</b>
                </Typography>
              </TableCell>
              <TableCell>
                <Typography>
                  <b>{t('components.resultComponent.tableLabels.cost')}</b>
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* 0.5 HOURS */}
            <TableRow>
              <TableCell>
                <Typography variant="body1">
                  {`1/2 ${t('components.resultComponent.tableLabels.hours')}`}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body1">
                  {hourlyResult !== undefined ? `${(hourlyResult / 2).toFixed(2)} €` : '0'}
                </Typography>
              </TableCell>
            </TableRow>
            {/* 1 HOUR */}
            <TableRow>
              <TableCell>
                <Typography variant="body1">
                  {`1 ${t('components.resultComponent.tableLabels.hour')}`}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body1">
                  {hourlyResult !== undefined ? `${hourlyResult.toFixed(2)} €` : '0'}
                </Typography>
              </TableCell>
            </TableRow>
            {/* 2 HOURS */}
            <TableRow>
              <TableCell>
                <Typography variant="body1">
                  {`2 ${t('components.resultComponent.tableLabels.hours')}`}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body1">
                  {hourlyResult !== undefined ? `${(hourlyResult * 2).toFixed(2)} €` : '0'}
                </Typography>
              </TableCell>
            </TableRow>
            {/* 5 HOURS */}
            <TableRow>
              <TableCell>
                <Typography variant="body1">
                  {`5 ${t('components.resultComponent.tableLabels.hours')}`}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body1">
                  {hourlyResult !== undefined ? `${(hourlyResult * 5).toFixed(2)} €` : '0'}
                </Typography>
              </TableCell>
            </TableRow>
            {/* 8 HOURS */}
            <TableRow>
              <TableCell>
                <Typography variant="body1">
                  {`8 ${t('components.resultComponent.tableLabels.hours')}`}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body1">
                  {hourlyResult !== undefined ? `${(hourlyResult * 8).toFixed(2)} €` : '0'}
                </Typography>
              </TableCell>
            </TableRow>
            {/* 16 HOURS */}
            <TableRow>
              <TableCell>
                <Typography variant="body1">
                  {`16 ${t('components.resultComponent.tableLabels.hours')}`}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body1">
                  {hourlyResult !== undefined ? `${(hourlyResult * 16).toFixed(2)} €` : '0'}
                </Typography>
              </TableCell>
            </TableRow>
            {/* 1 DAY */}
            <TableRow>
              <TableCell>
                <Typography variant="body1">
                  {`1 ${t('components.resultComponent.tableLabels.day')}`}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body1">
                  {hourlyResult !== undefined ? `${(hourlyResult * 24).toFixed(2)} €` : '0'}
                </Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
