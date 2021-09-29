import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Owner } from '../owner/entities/owner.entity';
import { OwnerService } from 'src/owner/owner.service';
import { Repository } from 'typeorm';
import { CreatePetInput } from './dto/create-pet.input';
import { Pet } from './entities/pet.entity';

@Injectable()
export class PetsService {
    constructor(@InjectRepository(Pet) private petsRepository: Repository<Pet>, private ownersService: OwnerService) { }

    createPet(createPetInput: CreatePetInput): Promise<Pet> {
        const newPet = this.petsRepository.create(createPetInput)
        return this.petsRepository.save(newPet)
    }

    async findAll(): Promise<Pet[]> {
        return this.petsRepository.find()
    }

    findOne(id: number): Promise<Pet> {
        return this.petsRepository.findOneOrFail(id)
    }

    getOwner(ownerId: number): Promise<Owner> {
        return this.ownersService.findOne(ownerId)
    }
}
