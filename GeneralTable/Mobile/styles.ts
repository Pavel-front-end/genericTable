import { makeStyles, Theme } from '@material-ui/core';
import { paletteColors } from 'theme/materialTheme';

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    border: `1px solid ${theme.palette.type === 'dark' ? paletteColors.darkPurple : paletteColors.extraLightPurple}`,
    borderRadius: 16,
    padding: '12px 20px',
    width: 'auto',
    background: theme.palette.type === 'dark' ? paletteColors.black : paletteColors.gradientLightBlue,
    marginBottom: '1rem',
  },
  wrap: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  wrapPercentWeight: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  text: {
    fontWeight: 400
  },
  icon: {
    marginRight: 10,
  },
  percentValue: {
    width: 52,
    height: 40,
    border: `1px solid ${paletteColors.borderGrey}`,
    background: paletteColors.white,
    borderRadius: 8,
    marginRight: 10,
    display: 'flex',
    justifyContent: 'center',
    '& input': {
      color: paletteColors.black,
      fontSize: 14,
      textAlign: 'center',
      '&::-webkit-inner-spin-button, &::-webkit-outer-spin-button': {
        webkitAppearance: 'none',
        display: 'none',
        margin: 0
      }
    }
  },
  containerInput: {
    display: 'flex',
    alignItems: 'center',
  },
  minW100: {
    minWidth: 100,
  },
  pr1: {
    paddingRight: '1rem',
  }
}));
