import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import Card, {CardActions, CardContent} from 'material-ui/Card';
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import Grid from 'material-ui/Grid';
import { getBatches } from '../../actions/batches'
import {Link} from 'react-router-dom'
import BatchForm from './BatchForm'
import Paper from 'material-ui/Paper'

class BatchesList extends PureComponent {

    componentWillMount() {
         this.props.getBatches();

        }

renderBatch = (batch, index) => {

    return (
        <Grid key={index}>
            <Card>
            <CardContent>
                <Typography>
                    BATCH {batch.batchNumber}
                </Typography>
                <Typography>
                    Start date: {batch.startDate}<br />
                    End date: {batch.endDate}
                </Typography>
            </CardContent>
                <CardActions>
                    <Link to={`/batches/${batch.id}`} style={{textDecoration: 'none'}}>
                    <Button
                        size="large"
                        color="secondary"
                        variant="raised"
                    >
                        BATCH DETAIL
                    </Button>
                    </Link>
                </CardActions>
            </Card>
        </Grid>
    )}

    render() {
        const {batches} = this.props

        const OrderedBatches = batches.sort(function(a, b) {
            return a.id - b.id;
        })

        return(
            <Paper className="outer-paper">
            <h2>Add a new batch</h2>
            <BatchForm />
            <h2>All Batches</h2>
            <Grid container spacing={24}>
                {OrderedBatches.map((batch, index) => this.renderBatch(batch, index))}
            </Grid>
            </Paper>
            
        )
    }
}

const mapStateToProps = function (state) {
	return {
        batches: state.batches,
	}
}

export default connect(mapStateToProps, {getBatches})(BatchesList)