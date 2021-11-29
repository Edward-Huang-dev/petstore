/* eslint-disable @typescript-eslint/no-unused-vars */
import { Entity, Column, JoinColumn, OneToOne, ManyToOne, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { BaseEntity } from './base/base.entity';

import { PhotoUrl } from './photo-url.entity';
import { Category } from './category.entity';
import { Tag } from './tag.entity';
import { Status } from './enumeration/status';

/**
 * A Pet.
 */
@Entity('pet')
export class Pet extends BaseEntity {
    @Column({ name: 'name', nullable: true })
    name: string;

    @Column({ type: 'simple-enum', name: 'status', enum: Status })
    status: Status;

    @OneToMany((type) => PhotoUrl, (other) => other.pets)
    photoUrls: PhotoUrl[];

    @ManyToOne((type) => Category)
    category: Category;

    @ManyToMany((type) => Tag)
    @JoinTable({
        name: 'rel_pet__tags',
        joinColumn: { name: 'pet_id', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'tags_id', referencedColumnName: 'id' },
    })
    tags: Tag[];

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
}
