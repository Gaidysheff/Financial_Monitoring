import { Category } from './entities/category.entity'
import { CreateCategoryDto } from './dto/create-category.dto'
import {
	Injectable,
	BadRequestException,
	NotFoundException,
} from '@nestjs/common'
import { Repository } from 'typeorm'
import { UpdateCategoryDto } from './dto/update-category.dto'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class CategoryService {
	constructor(
		@InjectRepository(Category)
		private readonly categoryRepository: Repository<Category>,
	) {}

	async create(createCategoryDto: CreateCategoryDto, id: number) {
		const isExit = await this.categoryRepository.findBy({
			user: { id: id },
			title: createCategoryDto.title,
		})
		if (isExit.length)
			throw new BadRequestException(
				'This category has been already existing',
			)

		const newCategory = { title: createCategoryDto.title, user: { id } }

		return await this.categoryRepository.save(newCategory)
	}

	async findAll(id: number) {
		return await this.categoryRepository.find({
			where: {
				user: { id },
			},
			relations: {
				transaction: true,
			},
		})
	}

	async findOne(id: number) {
		const category = await this.categoryRepository.findOne({
			where: { id: id },
			relations: {
				user: true,
				transaction: true,
			},
		})

		if (!category) throw new NotFoundException('Category not found')

		return category
	}

	async update(id: number, updateCategoryDto: UpdateCategoryDto) {
		const category = await this.categoryRepository.findOne({
			where: { id: id },
		})
		if (!category) throw new NotFoundException('Category not found')
		return await this.categoryRepository.update(id, updateCategoryDto)
	}

	async remove(id: number) {
		const category = await this.categoryRepository.findOne({
			where: { id: id },
		})
		if (!category) throw new NotFoundException('Category not found')
		return await this.categoryRepository.delete(id)
	}
}
