import {
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm'

import { Category } from 'src/category/entities/category.entity'
import { User } from 'src/user/entities/user.entity'

@Entity()
export class Transaction {
	@PrimaryGeneratedColumn({ name: 'transaction_id' })
	id: number

	@Column()
	title: string

	@Column({ nullable: true })
	type: string

	@ManyToOne(() => User, (user) => user.transaction)
	@JoinColumn({ name: 'user_id' })
	user: User

	@ManyToOne(() => Category, (category) => category.transaction)
	@JoinColumn({ name: 'category_id' })
	category: Category

	@Column()
	amount: number

	@CreateDateColumn()
	createdAt: Date

	@UpdateDateColumn()
	updatedAt: Date
}
