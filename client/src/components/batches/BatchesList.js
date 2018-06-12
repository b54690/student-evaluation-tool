import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import { getBatches, getBatch} from '../../actions/batches'
import { connect } from 'react-redux'
import index from '../../reducers';

class BatchesList extends PureComponent {

componentWillMount() {
    this.props.getBatches();
}

render() {

    const {batches} = this.props;

    const OrderedBatches = batches.sort(function(a, b) {
        return a.id - b.id;
    })

return(
    <div>
        <h1>Codaisseur Student Batches</h1>
        <table>
            <thread>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                </tr>
            </thread>
            <tbody>
                {OrderedBatches.map(batch => (
                <tr key={batch.id}>
                <td>{batch.id}</td>
                <td>
                    <Link
                    className="link"
                    to={`/batches/${batch.id}`}
                    onClick={() => this.fetchBatch(batch.id)}>
                   {batch.title}
                    </Link>
                </td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
)}}

const mapStateToProps = function(state) {
    return {
        batches: state.batches
    };
}

export default connect(mapStateToProps, {getBatches})(BatchesList)


  