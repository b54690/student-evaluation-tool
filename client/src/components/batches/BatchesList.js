// import React, {PureComponent} from 'react'
// import {connect} from 'react-redux'
// import {getBatches} from '../../actions/batches'
// import {Link} from 'react-router-dom'
// import BatchForm from './BatchForm'
// import Paper from 'material-ui/Paper'

// class BatchesPage extends PureComponent {

//     componentWillMount(){
//         this.props.getBatches()
//     }

//     render(){
//         const {batches} = this.props
//         const {currentUser} = this.props

//         const OrderedBatches = batches.sort(function(a, b) {
//         return a.id - b.id;
//         })
        
//         return(
//             <Paper className="outer-paper">
//             <h2>Add a new batch</h2>
//             <p>Date MM/DD/YYYY format</p>
//             <BatchForm />
//             <h1>All Batches: </h1>
//             { OrderedBatches.map(batches =>
//                 <div className= "batchPage">
//                 <Link to={`/batches/${batches.batchNumber}`}><h3>BATCH NUMBER {batches.batchNumber}  -   Start Date: {batches.startDate}  End Date: {batches.endDate}</h3></Link>
//                 </div>
//             )}
//             </Paper>
//         )
//     }
// }

// const mapStateToProps = (state) => ({
//     batches: state.batches,
//     currentUser: state.currentUser
// })

// export default connect (mapStateToProps, {getBatches})(BatchesPage)