import { FC } from 'react';
import {Typography, Box, TextField, Button} from '@material-ui/core';
import * as React from 'react';
import { useStyles } from './styles';
import {format} from "date-fns";
import clsx from "clsx";
import {DotsIcon} from "../../../../icons";

interface Props {
  name: string;
  size: number;
  closeDate: string;
  maturityDate: string;
  premiums: number
  tx: number
  handleOpenModalTx(id: number): void
}

const MobileTableCoveredAssets: FC<Props> = ({ name, size, closeDate, maturityDate, premiums, tx, handleOpenModalTx }: Props) => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Box className={classes.wrap}>
        <Typography variant="subtitle1">{name}</Typography>
        <Button
          className={classes.buttonDots}
          onClick={(e) => handleOpenModalTx(tx)}
        ><DotsIcon /></Button>
      </Box>
      <Box className={classes.wrap} mt={1}>
        <Box>
          <Typography variant="body1" className={classes.text}>
            Сlose date
          </Typography>
          <Typography variant="subtitle2" className={classes.text}>
            {format(new Date(closeDate), 'MM/dd/yyyy')}
          </Typography>
        </Box>
        <Box className={classes.textRight}>
          <Typography variant="body1" className={classes.text}>
            Maturity date
          </Typography>
          <Typography variant="subtitle2" className={classes.text}>
            {format(new Date(maturityDate), 'MM/dd/yyyy')}
          </Typography>
        </Box>
      </Box>
      <Box className={classes.wrap} mt={1}>
        <Box>
          <Typography variant="body1" className={classes.text}>
            Size
          </Typography>
          <Typography variant="subtitle2" className={classes.text}>
            ${size}
          </Typography>
        </Box>
        <Box className={classes.textRight}>
          <Typography variant="body1" className={classes.text}>
            Premiums
          </Typography>
          <Typography variant="subtitle2" className={classes.text}>
            ${premiums}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default MobileTableCoveredAssets;
