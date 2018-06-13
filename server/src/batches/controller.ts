import { JsonController, Param, NotFoundError, Get, Body, HttpCode, Post, Authorized } from 'routing-controllers'
import {Batch} from './entity'

@JsonController()
export default class BatchController {

  // @Authorized()
  @Post('/batches')
  @HttpCode(201)
  async createBatch(
    @Body() batch: Batch,
  ) {
    const createdBatch = await Batch.create(batch).save()
    return createdBatch
  }

  // @Authorized()
  @Get('/batches')
  getBatches() {
    return Batch.find()
  }


  // @Authorized()
  @Get('/batches/:id([0-9]+)')
  @HttpCode(200)
  async getBatch(
    @Param('id') batchId: number
  ) {
    const batch = await Batch.findOne(batchId)
    if (!batch) throw new NotFoundError('Batch does not exist!')
    return batch
  }
}