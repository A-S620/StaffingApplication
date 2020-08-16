import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Card, CardContent, Grid, Typography} from '@material-ui/core'
import ClearIcon from '@material-ui/icons/Clear';
import {connect} from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import {store} from "../../store/Store";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        margin: "10px",
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },

});

function NotifCard(props) {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    const [cardData, setCardData] = React.useState(props.notifs);
    // setCardData(props);
    // console.log(cardData[0].NotifId);

    // {props.notifs.map((singleNotif) => {
    //
    //     return (
    //         cardData.push(singleNotif)
    //     )
    //
    // })}
    const handleDelete = (cardToDelete) => () => {
        console.log(cardToDelete.NotifId);
        var index= cardData.indexOf(cardToDelete);
        console.log(index);
        cardData.splice(index,1);
        // setCardData((cards) => cards.filter((card) => card.NotifId !== cardToDelete.NotifId));
    };
    return (

        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
        >

            {props.notifs.map((data) =>{
                return(
                    <Card className={classes.root}>
                        <Grid
                            container
                            direction="row"
                            justify="flex-end"
                            alignItems="flex-start"
                        >
                            <IconButton
                                onClick={ () =>{
                                    store.dispatch({
                                        type: "DELETE_NOTIFICATION",
                                        payload: data.NotifId
                                    })
                                }

                                    }
                            >
                                <ClearIcon/>
                            </IconButton>

                        </Grid>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                {data.NotifTitle}
                            </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                                {data.NotifDate}
                            </Typography>
                            <Typography variant="body2" component="p">
                                {data.NotifInfo}
                            </Typography>
                        </CardContent>

                    </Card>
                )
            })}




            {/*<Card className={classes.root}>*/}
            {/*    <CardContent>*/}
            {/*        <Typography className={classes.title} color="textSecondary" gutterBottom>*/}
            {/*            Word of the Day*/}
            {/*        </Typography>*/}
            {/*        <Typography variant="h5" component="h2">*/}
            {/*            be{bull}nev{bull}o{bull}lent*/}
            {/*        </Typography>*/}
            {/*        <Typography className={classes.pos} color="textSecondary">*/}
            {/*            adjective*/}
            {/*        </Typography>*/}
            {/*        <Typography variant="body2" component="p">*/}
            {/*            well meaning and kindly.*/}
            {/*            <br/>*/}
            {/*            {'"a benevolent smile"'}*/}
            {/*        </Typography>*/}
            {/*    </CardContent>*/}
            {/*    <CardActions>*/}
            {/*        <Button size="small">Learn More</Button>*/}
            {/*    </CardActions>*/}
            {/*</Card>*/}
        </Grid>
    );
}

const mapStateToProps = state => {
    return {
        notifs: state.notifications
    }
}
export default connect(mapStateToProps, {})(NotifCard);
