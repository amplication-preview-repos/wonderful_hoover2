import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FoodPreferenceServiceBase } from "./base/foodPreference.service.base";

@Injectable()
export class FoodPreferenceService extends FoodPreferenceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
