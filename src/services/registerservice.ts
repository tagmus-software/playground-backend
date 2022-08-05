import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";

export class registerservice implements Seeder{
  run(dataSource: DataSource, factoryManager: SeederFactoryManager): Promise<void> {
    throw new Error("E-email ja exite.");
  }
  async(): Promise<void> {
    throw new Error("Method not implemented.");
  }

}