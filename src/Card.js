import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '../node_modules/@ellucian/react-design-system/core/styles';
import SoundcloudComponent from './SoundcloudComponent.js'


import {
    Card,
    CardHeader,
    CardContent,
    Typography
} from '../node_modules/@ellucian/react-design-system/core';

const styles = () => ({
    card: {
        width: '30rem',
    },
});

/**
 * Simple Card with Soundcloud Component added
 */
function SimpleCard(props) {
    const { classes } = props;
    const customId = 'SimpleCard';

    return (
        <div className={classes.root} id={`${customId}_Container`}>
            <Typography id={`${customId}_CardDescription`} paragraph>
                This card should display a soundcloud player.
            </Typography>
            <Card className={classes.card} id={`${customId}_Card0`}>
                <CardHeader title="A Soundcloud Card"/>
                <CardContent id={`${customId}_CardContent0`}>
                    <Typography>
                        <SoundcloudComponent />
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}

SimpleCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);