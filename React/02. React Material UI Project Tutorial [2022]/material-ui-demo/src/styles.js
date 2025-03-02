import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    background: "lightblue",
    padding: "8 0 6",
  },

  icon: {
    marginRight: "20px",
  },
  buttons: {
    marginTop: "40px",
  },

  cardGrid: {
    padding: '20px 0'
  },

  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },

  cardMedia: {
    paddingTop: '56.25%' // 16:9
  },
  
  cardContent: {
    flexGrow: 1,
  },
}));

export default useStyles;
