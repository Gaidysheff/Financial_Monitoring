import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

import { Category } from '../../category/entities/category.entity'
import { Transaction } from '../../transaction/entities/transaction.entity'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  email: string

  @Column()
  password: string

  @OneToMany(() => Category, (category) => category.user, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  categories: Category[]

  @OneToMany(() => Transaction, (transaction) => transaction.user, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  transaction: Transaction[]

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
