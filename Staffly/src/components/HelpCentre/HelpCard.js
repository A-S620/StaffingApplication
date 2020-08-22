import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Card, CardContent, Grid, Typography} from '@material-ui/core'
import {connect} from "react-redux";

const useStyles = makeStyles({
    root: {
        minWidth: 475,
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

function HelpCard(props) {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    const [cardData, setCardData] = React.useState(props.notifs);

    const handleDelete = (cardToDelete) => () => {
        var index = cardData.indexOf(cardToDelete);
        cardData.splice(index, 1);
    };
    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
        >

            {props.help.map((data) => {
                return (
                    <Card className={classes.root}>

                        <CardContent>
                            <Typography variant="h5" component="h2">
                                {data.PostTitle}
                            </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                                {data.PostDate}
                            </Typography>
                            <Typography variant="body2" component="p">
                                {data.PostText}
                            </Typography>
                        </CardContent>

                    </Card>
                )
            })}

        </Grid>
    );
}

const mapStateToProps = state => {
    return {
        help: state.help
    }
}
export default connect(mapStateToProps, {})(HelpCard);