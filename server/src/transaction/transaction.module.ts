import { Category } from 'src/category/entities/category.entity'
import { CategoryService } from 'src/category/category.service'
import { Module } from '@nestjs/common'
import { Transaction } from './entities/transaction.entity'
import { TransactionController } from './transaction.controller'
import { TransactionService } from './transaction.service'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
	imports: [TypeOrmModule.forFeature([Transaction, Category])],
	controllers: [TransactionController],
	providers: [TransactionService, CategoryService],
})
export class TransactionModule {}
