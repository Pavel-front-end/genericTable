import { FC } from 'react';
import {Typography, Box, TextField} from '@material-ui/core';
import * as React from 'react';
import { useStyles } from './styles';
import {format} from "date-fns";
import clsx from "clsx";

interface Props {
  name?: string;
  value?: string;
  icon?: React.ReactElement;
  lockDate?: string;
  unlockDate?: string;
  changePercentWeightPool?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  percentWeightPool?: number
  setPercent?: (value: number) => void;
}

const MobileTable: FC<Props> = ({ name, value, icon, unlockDate, lockDate, changePercentWeightPool, percentWeightPool, setPercent }: Props) => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Box className={classes.wrap}>
        <Box display="flex" alignItems="center">
          {name === 'ANZ' ? <img src={'/imgAnz'} className={classes.icon}/> : <Box className={classes.icon}>{icon}</Box>}
          <Typography variant="h3">{name}</Typography>
        </Box>
        <Typography variant="h3" className={classes.text}>
          {value} {percentWeightPool && name}
        </Typography>
      </Box>
      {percentWeightPool && setPercent && (
        <>
          <Box className={classes.wrapPercentWeight} mt={6}>
            <Typography variant="h4" className={clsx(classes.text, classes.pr1)}>
              Potential total amount per week
            </Typography>
            <Typography variant="h4" className={clsx(classes.text, classes.minW100)}>
              Weight of pool
            </Typography>
          </Box>
          <Box className={classes.wrap} mt={1}>
            <Typography variant="h3" className={classes.text}>
              {percentWeightPool}
            </Typography>
            <Box className={clsx(classes.containerInput, classes.minW100)}>
              <TextField
                className={classes.percentValue}
                type="number"
                InputProps={{
                  inputProps: { min: 0, max: 100 }
                }}
                name={name}
                value={percentWeightPool}
                onChange={changePercentWeightPool}
                onBlur={(e) => Number(e.target.value) < 1 && setPercent(1) || Number(e.target.value) > 100 && setPercent(100) }
              />
              <Typography variant="body1" >%</Typography>
            </Box>
          </Box>
        </>
      )}
      {(lockDate || unlockDate) &&
        (<>
          <Box className={classes.wrap} mt={6}>
            <Typography variant="h4" className={classes.text}>
              Lock date
            </Typography>
            <Typography variant="h4" className={classes.text}>
              Unlock date
            </Typography>
          </Box>
          <Box className={classes.wrap} mt={1}>
            <Typography variant="h3" className={classes.text}>
              {format(new Date(Number(lockDate)*1000), 'MM/dd/yyyy')}
            </Typography>
            <Typography variant="h3" className={classes.text}>
              {format(new Date(Number(unlockDate)*1000), 'MM/dd/yyyy')}
            </Typography>
          </Box>
        </>)
      }
    </Box>
  );
};

export default MobileTable;
