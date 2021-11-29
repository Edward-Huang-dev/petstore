/* eslint-disable @typescript-eslint/no-unused-vars */
import { Entity, Column, JoinColumn, OneToOne, ManyToOne, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { BaseEntity } from './base/base.entity';

import { Pet } from './pet.entity';

/**
 * A PhotoUrl.
 */
@Entity('photo_url')
export class PhotoUrl extends BaseEntity {
    @Column({ name: 'url', nullable: true })
    url: string;

    @ManyToOne((type) => Pet)
    pets: Pet;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
}
