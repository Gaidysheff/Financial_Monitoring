import { Category } from './entities/category.entity'
import { CategoryController } from './category.controller'
import { CategoryService } from './category.service'
import { Module } from '@nestjs/common'
import { Transaction } from 'src/transaction/entities/transaction.entity'
import { TransactionService } from 'src/transaction/transaction.service'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
	imports: [TypeOrmModule.forFeature([Category, Transaction])],
	controllers: [CategoryController],
	providers: [CategoryService, TransactionService],
})
export class CategoryModule {}
