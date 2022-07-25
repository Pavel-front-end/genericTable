import { makeStyles, Theme } from '@material-ui/core';
import { paletteColors } from 'theme/materialTheme';

export const useStylesTable = makeStyles((theme: Theme) => ({
  table: {
    borderRadius: '1rem',
    borderCollapse: 'collapse',
    tableLayout: 'fixed',
  },
  tableLayoutAuto: {
    tableLayout: 'auto',
  },
  tableHead: {
    borderRadius: '1rem',
    '& th:last-child p': {
      [theme.breakpoints.down('md')]: {
        textAlign: 'right'
      }
    },
    '& p': {
      color: paletteColors.white
    },
  },
  tableCell: {
    border: 'none',
    '&:first-child': {
      borderTopLeftRadius: '1rem',
    },
    '&:last-child': {
      borderTopRightRadius: '1rem',
    },
  },
  textCenter: {
    '&:last-child': {
      textAlign: 'center'
    }
  },
  subTableText: {
    margin: '1rem auto',
    maxWidth: '45.8rem',
  },
  button: {
    width: 140,
  },
  tableColor: {
    boxShadow: `none`,
    background: 'transparent'
  },
  tableHeadColor: {
    background: paletteColors.whitePurple,
    borderBottom: `1px solid ${paletteColors.whitePurple}`,
  },
  TextDark: {
    color: `${paletteColors.black} !important`,
    fontWeight: 600
  },
  size14: {
    fontSize: '1rem',
  }

}))