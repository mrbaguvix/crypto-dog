import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme:Theme)=> createStyles({
    root: {
      marginTop: 20,
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 16,
    },
    pos: {
      marginBottom: 12,
    },
    crytoButtonErst: {
      marginLeft: 0,
      margin: theme.spacing(1),
    },
    crytoButton: {
      margin: theme.spacing(1),
    },
    bold: {
      fontWeight: 'bold'
    },
    perAsset: {
      fontWeight: 'bold'
    },
    assetMeta: {
      display:'flex', 
      alignItems: 'center', 
      marginBottom: 8,
      paddingLeft: 16,
      paddingRight: 16
    },
    assetMetaName: {
      marginLeft:7, 
      fontSize:24, 
      fontWeight:600
    },
    assetMetaSymbol: {
      marginLeft:5, 
      paddingTop:5, 
      fontSize:17
    },
    percentDiff: {
      display:'flex', alignItems: 'center', 
      marginTop:3, color: '#16c784', padding:0, 
      fontWeight:600, fontSize:15, borderRadius: 8
    },
    zeroPadLeftRight: {
      paddingLeft: 0, 
      paddingRight: 0
    },
    paddCardCenter: {
      paddingLeft: 16,
      paddingRight: 16
    },
    magCardCenter: {
      marginLeft: 16,
      marginRight: 16
    },
    lAssetInfo: {
      paddingLeft: 16,
      paddingRight: 16,
      fontSize: 14, 
      color: 'gray', 
      paddingTop: 10
    },
    table: {
      minWidth: 650,
    }
}));