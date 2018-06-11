import { JsonController, Get, Post, Param, Body, NotFoundError } from 'routing-controllers'
import { Batch } from './entity'

@JsonController()
export default class BatchController {

  @Get('/batches')
  async allBatches(){
    const batches = await Batch.find()
    if (!batches) throw new NotFoundError('Batches table doesn\'t exist')
    return batches
  }

  @Get('/batches/:id([0-9]+)')
  async getBatchById(
    @Param('id') batchId: number
  ) {
    const batchById = await Batch.findOne(batchId)
    if (!batchById) throw new NotFoundError('Batch doesn\'t exist')
    if (batchById) {
      return {batchById}
    }
  }

  @Post('/batches')
  async createBatch(
    @Body() batch: Batch
  ) {
    const entity = await batch.save()
    return { entity }
  }
}