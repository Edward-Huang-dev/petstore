/* eslint-disable @typescript-eslint/no-unused-vars */
import { ApiModelProperty } from '@nestjs/swagger';
import { BaseDTO } from './base.dto';

import { PetDTO } from './pet.dto';

/**
 * A PhotoUrlDTO object.
 */
export class PhotoUrlDTO extends BaseDTO {
    @ApiModelProperty({ description: 'url field', required: false })
    url: string;

    @ApiModelProperty({ type: PetDTO, description: 'pets relationship' })
    pets: PetDTO;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
}
