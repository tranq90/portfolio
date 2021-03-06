import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
    },
});

export default function ImgMediaCard() {
    const classes = useStyles();

    return (
        <div className="projects">
            <a name="section3"></a>
            <h1>Projects</h1>
            <div className="card1">
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://s3.amazonaws.com/assets-of-websites/pages/245902/service_images/20795/original/basename.jpg?1526073832"
                            title="Beauty Lounge By Gilena"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Beauty Lounge By Gilena
                        </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                A purely front-end website built in MEAN. Used as a storefront to view services and book reservations
                         </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        www.beautyloungebygilena.com
                    </CardActions>
                </Card>
            </div>
            <div className="card2">
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="165"
                            image="https://i.vimeocdn.com/video/670181029_295x166.jpg"
                            title="Nomad's Coat"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Nomad's Coat
                        </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Customized Shopify website to get exactly what the client wanted
                         </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            www.nomadscoat.com
                        </Button>
                    </CardActions>
                </Card>
            </div>
            <div className="card3">
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="165"
                            image="https://s3.amazonaws.com/poly-screenshots.angel.co/enhanced_screenshots/1201862-original.png"
                            title="ShowRooms"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                ShowRooms
                        </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                TV Show information website with email or text notifications for show times.
                         </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            www.showrooms.com
                        </Button>
                    </CardActions>
                </Card>
            </div>
        </div>
    );
}


